import { ChevronDown } from "lucide-react";

interface InfiniteScrollIndicatorProps {
  ref ?: React.RefObject<HTMLDivElement | null>;
  isLoading: boolean;
}

function InfiniteScrollIndicator({
  ref,
  isLoading,
}: InfiniteScrollIndicatorProps) {
  return (
    <div
      ref={ref}
      className="flex min-h-16 flex-col items-center cursor-pointer  justify-center text-sm text-gray-500"
    > 
      {isLoading ? (
        <span>Loading more...</span>
      ) : (
        <>
          <span>Scroll to view more</span>
          <ChevronDown className="size-4" />
        </>
      )}
    </div>
  );
}

export default InfiniteScrollIndicator;
