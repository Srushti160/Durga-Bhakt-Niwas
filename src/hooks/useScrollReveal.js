import { useState, useEffect, useCallback } from 'react';

export function useScrollReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  const callbackRef = useCallback((node) => {
    setRef(node);
  }, []);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return [callbackRef, isVisible];
}
