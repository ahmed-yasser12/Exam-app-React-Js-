import { cn } from "@/shared/lib/utils";

interface RegisterProgressProps {
 step: number;
  totalSteps: number;
}

export function Progress({ step, totalSteps}: RegisterProgressProps) {
  return (
  <div className="flex items-center max-w-115 mb-2.5">
  {Array.from({ length: totalSteps }).map((_, index) => (
    <div key={index} className="flex items-center flex-1">
      <div
        className={cn(
          "size-2.5 shrink-0 rotate-45 border",
          index <= step
            ? "bg-blue-600 border-blue-600"
            : "bg-white border-blue-600"
        )}
      />

      {index < totalSteps - 1 && (
        <div
          className={cn(
            "flex-2 border-t border-dashed",
            index < step
              ? "border-blue-600"
              : "border-gray-300"
          )}
        />
      )}
    </div>
  ))}
</div>
  );
}