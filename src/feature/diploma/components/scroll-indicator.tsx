import { ChevronDown } from "lucide-react";

function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-1 py-4 text-sm text-gray-500">
      <span>Scroll to view more</span>
      <ChevronDown className="size-4" />
    </div>
  );
}

export default ScrollIndicator;
