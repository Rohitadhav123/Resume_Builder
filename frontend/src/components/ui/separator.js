// Create this file: src/components/ui/separator.js

export function Separator({ className = "", orientation = "horizontal", ...props }) {
  return (
    <div
      className={`shrink-0 bg-border ${
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
      } ${className}`}
      {...props}
    />
  )
}