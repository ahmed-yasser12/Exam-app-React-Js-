import { cn } from "@/shared/lib/utils"


function Heading({className ,...props}:React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn("font-bold font-inter",className)} {...props}>{props.children} </h1>
  )
}

export default Heading