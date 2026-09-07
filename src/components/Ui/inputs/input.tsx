import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "@/shared/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        /* Layout & Sizing */
        "max-h-11.5 max-w-111.5 min-w-0 py-2.5 px-2.5 ",
        /* Border */
        " border border-gray-200",
        // hover ,
        "hover:border-blue-500",
        /* Background */
        "bg-gray-50",
        /* Typography */
        "text-base text-gray-800",
        /* Transitions & Outline */
        "transition-colors outline-none",
        /* File input styles */
        "file:inline-flex  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        /* Placeholder */
        "placeholder:text-gray-400",
        /* Focus-visible */
        "focus-visible:border-blue-600 disabled:opacity-20 focus-visible:ring-3 focus-visible:ring-blue-100",
        /* Disabled */
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-200  disabled:text-gray-900 disabled:border-gray-200",
        /* Aria-invalid */
        "aria-invalid:border-red-600 aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        /* Responsive */
        "md:text-sm",
        /* Dark mode */
        "dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
