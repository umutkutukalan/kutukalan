import { useEffect, useCallback } from "react";

export const useInfiniteScroll = (
  loadMore: () => void,
  hasMore: boolean,
  isLoading: boolean,
  resetDependency?: unknown,
): void => {
  const handleScroll = useCallback(() => {
    if (isLoading || !hasMore) return;

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 200) {
      loadMore();
    }
  }, [loadMore, hasMore, isLoading]);

  useEffect(() => {
    let timeoutId: number | null = null;

    const throttledHandleScroll = () => {
      if (timeoutId) return;
      timeoutId = window.setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 100);
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll, resetDependency]);
};