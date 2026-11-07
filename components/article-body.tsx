import type { ArticleBlock } from "@/lib/articles"

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-6 text-lg leading-relaxed">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className="text-2xl md:text-3xl font-bold pt-6">
                {block.text}
              </h2>
            )
          case "paragraph":
            return <p key={index}>{block.text}</p>
          case "list":
            return (
              <ul key={index} className="list-disc pl-6 space-y-2">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          case "links":
            return (
              <ul key={index} className="list-disc pl-6 space-y-2">
                {block.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )
          case "code":
            return (
              <pre
                key={index}
                data-language={block.language}
                className="overflow-x-auto rounded-lg border border-border/50 bg-muted/50 p-4 text-sm font-mono"
              >
                <code>{block.code}</code>
              </pre>
            )
        }
      })}
    </div>
  )
}
