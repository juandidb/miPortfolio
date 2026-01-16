import { useEffect, useState } from 'react';

export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const matcher = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e) => setIsMobile(e.matches);

    // attach listener
    if (matcher.addEventListener) matcher.addEventListener('change', handler);
    else matcher.addListener(handler);

    // initialize state
    setIsMobile(matcher.matches);

    return () => {
      if (matcher.removeEventListener) matcher.removeEventListener('change', handler);
      else matcher.removeListener(handler);
    };
  }, [breakpoint]);

  return isMobile;
}
