import { useEffect, useRef } from 'react';

const useAnimateOnScroll = (threshold = 0.1) => {
  const elementRef = useRef<HTMLHeadingElement>(null!);

  useEffect(() => {
    if (!elementRef.current) return;
    function handleMutation([entry]: IntersectionObserverEntry[]) {
      if (entry.isIntersecting) {
        elementRef.current.classList.add('active');
      } else {
        elementRef.current.classList.remove('active');
      }
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: threshold,
    };

    const observer = new IntersectionObserver(handleMutation, options);
    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [threshold]);

  return elementRef;
};

export default useAnimateOnScroll;
