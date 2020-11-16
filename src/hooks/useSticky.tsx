import { useEffect, useState, useRef, useCallback } from "react";

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const element = useRef<any>(null);

  const handleScroll = useCallback(() => {
    if (element && element.current) {
      setSticky(element.current.getBoundingClientRect().top < 0);
    }
  }, []);

  // This function handles the scroll performance issue
  const debounce = useCallback((func: Function, wait: number) => {
    let timeout: any;

    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 0));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [debounce, handleScroll]);

  return { isSticky, element };
}

export default useSticky;
