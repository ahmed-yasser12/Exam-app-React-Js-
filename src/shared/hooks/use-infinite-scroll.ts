import { useEffect, useRef } from "react";

interface UseInfiniteScrollOptions {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export function useInfiniteScroll({ hasNextPage,isFetchingNextPage,fetchNextPage,}: UseInfiniteScrollOptions) {
  const observerTarget = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = observerTarget.current;

    if (!target || !hasNextPage || isFetchingNextPage) {
      return;
    }
//   دي Web API موجودة في المتصفح.
    const observer = new IntersectionObserver(
      ([entry]) => {
        // in viewPort 
        if (entry.isIntersecting) { 
          fetchNextPage();
        }
      },
      {
            // دى تشتغل call back لما 20% من العنصر يدخل الـ viewport.
        threshold: 0.2,
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return observerTarget;
}
