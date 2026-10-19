import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Animate direct children with the animate classes
    const animatable = el.querySelectorAll('.animate-fade-up, .animate-fade-in');
    animatable.forEach((child) => observer.observe(child));
    // Also observe the element itself if it has the class
    if (el.classList.contains('animate-fade-up') || el.classList.contains('animate-fade-in')) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
