import { cn } from "@/shared/lib/utils"

function DescForm({className,children,...props}:React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <span className={cn("max-w-73.5 max-h-4.5  text-sm font-medium ",className)} {...props}>
        {children}
    </span>  
  )
}

export default DescForm
