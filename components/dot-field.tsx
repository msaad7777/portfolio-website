"use client"

import { useEffect, useRef } from "react"

/**
 * A calm field of dots behind the hero. Dots near the pointer ease outward,
 * grow a little and pick up the accent colour, then spring back to rest.
 *
 * Cost control:
 * - The animation loop only runs while something is moving. With the pointer
 *   away and every dot at rest, no frames are drawn at all.
 * - Pauses when the tab is hidden or the hero is scrolled out of view.
 * - prefers-reduced-motion draws one static frame and never animates.
 * - Touch devices (no hover) get a slow, low-frame-rate drift instead of
 *   pointer tracking.
 */

const SPACING = 30 // px between dots
const JITTER = 0.18 // fraction of SPACING each dot is offset, so the grid feels organic
const RADIUS = 150 // px the pointer reaches
const PUSH = 14 // px a dot moves away from the pointer at the centre
const BASE_SIZE = 1.1 // dot radius at rest
const GROW = 1.1 // extra radius at the pointer
const GLOW_ALPHA = 0.45 // extra opacity at the pointer
const BASE_ALPHA_DARK = 0.2
const BASE_ALPHA_LIGHT = 0.24
const STIFFNESS = 0.08 // spring towards the target
const DAMPING = 0.78
const IDLE_FPS = 24 // touch devices only

type Dot = {
  hx: number // home position
  hy: number
  x: number
  y: number
  vx: number
  vy: number
  glow: number // 0..1, eased towards the pointer influence
  phase: number
}

type Palette = { fg: [number, number, number]; accent: [number, number, number]; baseAlpha: number }

function hslVarToRgb(value: string): [number, number, number] {
  // CSS vars are stored as "H S% L%"
  const [h, s, l] = value.trim().split(/\s+/).map((p) => parseFloat(p))
  const sat = s / 100
  const lig = l / 100
  const k = (n: number) => (n + h / 30) % 12
  const a = sat * Math.min(lig, 1 - lig)
  const f = (n: number) => lig - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)]
}

function readPalette(): Palette {
  const root = document.documentElement
  const styles = getComputedStyle(root)
  const dark = root.classList.contains("dark")
  return {
    fg: hslVarToRgb(styles.getPropertyValue("--foreground") || "222 47% 11%"),
    accent: hslVarToRgb(styles.getPropertyValue("--accent") || "192 82% 29%"),
    baseAlpha: dark ? BASE_ALPHA_DARK : BASE_ALPHA_LIGHT,
  }
}

// Seeded so the layout is identical on every visit.
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export function DotField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")

    let dots: Dot[] = []
    let width = 0
    let height = 0
    let palette = readPalette()
    let raf = 0
    let running = false
    let visible = true
    let lastFrame = 0
    const pointer = { x: -1e4, y: -1e4, active: false }

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const rand = seeded(7)
      const cols = Math.ceil(width / SPACING) + 1
      const rows = Math.ceil(height / SPACING) + 1
      const offsetX = (width - (cols - 1) * SPACING) / 2
      const offsetY = (height - (rows - 1) * SPACING) / 2
      dots = []
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const hx = offsetX + c * SPACING + (rand() - 0.5) * 2 * JITTER * SPACING
          const hy = offsetY + r * SPACING + (rand() - 0.5) * 2 * JITTER * SPACING
          dots.push({ hx, hy, x: hx, y: hy, vx: 0, vy: 0, glow: 0, phase: rand() * Math.PI * 2 })
        }
      }
    }

    const resetDots = () => {
      for (const d of dots) {
        d.x = d.hx
        d.y = d.hy
        d.vx = d.vy = d.glow = 0
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const [fr, fg, fb] = palette.fg
      const [ar, ag, ab] = palette.accent
      for (const d of dots) {
        const g = d.glow
        const r = Math.round(fr + (ar - fr) * g)
        const gg = Math.round(fg + (ag - fg) * g)
        const b = Math.round(fb + (ab - fb) * g)
        const alpha = palette.baseAlpha + g * GLOW_ALPHA
        ctx.fillStyle = `rgba(${r},${gg},${b},${alpha})`
        ctx.beginPath()
        ctx.arc(d.x, d.y, BASE_SIZE + GROW * g, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // One physics step. Returns true while anything is still moving.
    const step = (time: number) => {
      let moving = false
      const idle = !finePointer.matches
      for (const d of dots) {
        let tx = d.hx
        let ty = d.hy
        let influence = 0

        if (pointer.active) {
          const dx = d.hx - pointer.x
          const dy = d.hy - pointer.y
          const dist = Math.hypot(dx, dy)
          if (dist < RADIUS) {
            const t = 1 - dist / RADIUS
            influence = t * t * (3 - 2 * t) // smoothstep
            const n = dist || 1
            tx += (dx / n) * PUSH * influence
            ty += (dy / n) * PUSH * influence
          }
        } else if (idle) {
          // Slow drifting swell for touch screens: two long waves crossing the field.
          const wave = Math.sin(d.hx * 0.012 + time * 0.0006) * Math.cos(d.hy * 0.015 - time * 0.0004)
          influence = Math.max(0, wave) * 0.35
          tx += Math.cos(d.phase + time * 0.0005) * 1.6
          ty += Math.sin(d.phase + time * 0.0005) * 1.6
        }

        d.vx = (d.vx + (tx - d.x) * STIFFNESS) * DAMPING
        d.vy = (d.vy + (ty - d.y) * STIFFNESS) * DAMPING
        d.x += d.vx
        d.y += d.vy
        d.glow += (influence - d.glow) * 0.12

        if (Math.abs(d.vx) > 0.01 || Math.abs(d.vy) > 0.01 || Math.abs(influence - d.glow) > 0.004) moving = true
      }
      return moving || idle
    }

    const loop = (time: number) => {
      raf = 0
      if (!running) return
      const idle = !finePointer.matches
      if (idle && time - lastFrame < 1000 / IDLE_FPS) {
        raf = requestAnimationFrame(loop)
        return
      }
      lastFrame = time
      const moving = step(time)
      draw()
      if (moving || pointer.active) raf = requestAnimationFrame(loop)
      else {
        // Settled: snap exactly home so no sub-pixel offset lingers.
        running = false
        resetDots()
        draw()
      }
    }

    const start = () => {
      if (reduceMotion.matches || !visible || document.hidden) return
      running = true
      if (!raf) raf = requestAnimationFrame(loop)
    }

    const stop = () => {
      running = false
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }


    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const inside = x >= -RADIUS && y >= -RADIUS && x <= rect.width + RADIUS && y <= rect.height + RADIUS
      pointer.x = x
      pointer.y = y
      if (inside !== pointer.active || inside) {
        pointer.active = inside
        start()
      }
    }

    const onPointerLeave = () => {
      pointer.active = false
      start()
    }

    const onVisibility = () => (document.hidden ? stop() : start())

    const onMotionChange = () => {
      if (reduceMotion.matches) {
        stop()
        resetDots()
        draw()
      } else start()
    }

    const resizeObserver = new ResizeObserver(() => {
      build()
      draw()
      start()
    })
    resizeObserver.observe(canvas)

    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })
    intersection.observe(canvas)

    // Redraw when the theme class on <html> changes.
    const themeObserver = new MutationObserver(() => {
      palette = readPalette()
      draw()
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

    window.addEventListener("pointermove", onPointerMove, { passive: true })
    document.documentElement.addEventListener("pointerleave", onPointerLeave)
    document.addEventListener("visibilitychange", onVisibility)
    reduceMotion.addEventListener("change", onMotionChange)
    finePointer.addEventListener("change", start)

    build()
    draw()
    start()

    return () => {
      stop()
      resizeObserver.disconnect()
      intersection.disconnect()
      themeObserver.disconnect()
      window.removeEventListener("pointermove", onPointerMove)
      document.documentElement.removeEventListener("pointerleave", onPointerLeave)
      document.removeEventListener("visibilitychange", onVisibility)
      reduceMotion.removeEventListener("change", onMotionChange)
      finePointer.removeEventListener("change", start)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
