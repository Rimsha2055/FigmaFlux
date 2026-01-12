"use client";
import { useEffect, useRef, useState } from "react";

// Simple hook returning [ref, isIntersecting]
// options: IntersectionObserver options (root, rootMargin, threshold)
export default function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      options
    );

    observer.observe(node);

    return () => {
      try {
        observer.unobserve(node);
        observer.disconnect();
      } catch (e) {
        // ignore
      }
    };
  }, [ref, JSON.stringify(options)]);

  return [ref, isIntersecting];
}
