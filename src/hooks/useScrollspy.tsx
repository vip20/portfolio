import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

export const useScrollSpy = ({
  activeSectionDefault = 0,
  sectionElementRefs = [],
  throttleMs = 100,
}: any) => {
  const [activeSection, setActiveSection] = useState(activeSectionDefault);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handle = throttle(() => {
    let currentSectionId = activeSection;
    let isReversed = false;
    if (isScrollUp()) {
      isReversed = true;
      sectionElementRefs = sectionElementRefs.reverse();
    }
    for (let i = 0; i < sectionElementRefs.length; i++) {
      const section = sectionElementRefs[i].current;
      if (!section || !(section instanceof Element)) continue;
      if (isInViewport(section)) {
        currentSectionId = i;
        continue;
      }
    }

    setActiveSection(
      isReversed
        ? sectionElementRefs.length - currentSectionId - 1
        : currentSectionId
    );
  }, throttleMs);

  const isScrollUp = () => {
    let isScrolledUp = false;
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st < lastScrollTop) {
      //scrolledUp
      isScrolledUp = true;
    }
    setLastScrollTop(st <= 0 ? 0 : st);
    return isScrolledUp;
  };

  const isInViewport = (element: any) => {
    const rect = element.getBoundingClientRect();
    const elHeight = element.offsetHeight;
    const elWidth = element.offsetWidth;
    return (
      rect.top >= -elHeight &&
      rect.left >= -elWidth &&
      rect.right <=
        (window.innerWidth || document.documentElement.clientWidth) + elWidth &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) + elHeight
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, [handle, sectionElementRefs]);
  return activeSection;
};
