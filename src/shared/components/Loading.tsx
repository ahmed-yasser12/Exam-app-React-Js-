import { Loader2 } from 'lucide-react'
function Loading() {
  return (
     <div className="flex h-[500px] w-full flex-col items-center justify-center gap-3 font-mono text-blue-600">
      <Loader2 className="size-10 animate-spin text-blue-600" />
    </div>
  )
}

export default Loading