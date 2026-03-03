"use client"

import { useEffect, useRef } from "react"

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789@#$%&*+=<>"
const FONT_SIZE = 14
const FPS = 15
const FRAME_INTERVAL = 1000 / FPS

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let columns = 0
    let drops: number[] = []
    let animationId: number
    let lastFrameTime = 0
    let isVisible = true

    function resize() {
      const parent = canvas!.parentElement
      if (!parent) return
      canvas!.width = parent.clientWidth
      canvas!.height = parent.clientHeight
      const newColumns = Math.floor(canvas!.width / FONT_SIZE)
      const newDrops = new Array(newColumns).fill(0)
      // Preserve existing drop positions where possible
      for (let i = 0; i < Math.min(columns, newColumns); i++) {
        newDrops[i] = drops[i]
      }
      // Randomize new columns so rain is already visible on load
      for (let i = columns; i < newColumns; i++) {
        newDrops[i] = Math.floor(Math.random() * (canvas!.height / FONT_SIZE))
      }
      columns = newColumns
      drops = newDrops
    }

    function draw(time: number) {
      animationId = requestAnimationFrame(draw)

      if (!isVisible) return
      if (time - lastFrameTime < FRAME_INTERVAL) return
      lastFrameTime = time

      // Semi-transparent overlay for trail effect
      ctx!.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height)

      ctx!.fillStyle = "rgba(34, 197, 94, 1)"
      ctx!.font = `${FONT_SIZE}px monospace`

      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * FONT_SIZE
        const y = drops[i] * FONT_SIZE

        ctx!.fillText(char, x, y)

        // Reset drop to top randomly after passing bottom
        if (y > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    resize()
    animationId = requestAnimationFrame(draw)

    // Pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    // Responsive resize
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas.parentElement!)

    return () => {
      cancelAnimationFrame(animationId)
      observer.disconnect()
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full opacity-50"
    />
  )
}
