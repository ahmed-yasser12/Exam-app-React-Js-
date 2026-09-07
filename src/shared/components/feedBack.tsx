import { CircleX } from "lucide-react";
import { cn } from "../lib/utils";

function FeedBack({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  if (!props.children) return null  
  return (
    <div
      className={cn(
        "relative flex mb-9 mt-6 max-w-113 max-h-9.5 items-center border  w- justify-center h-9.5 text-sm border-red-600 bg-red-50 text-red-500 ",
      )}
    >
        <CircleX size={18} className="absolute  top-0 left-1/2 -translate-x-1/2 bg-white -translate-y-1/2 "/>
      {props.children}
    </div>
  );
}

export default FeedBack;
