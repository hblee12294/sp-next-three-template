"use client";

import { useRef, useEffect } from "react";

import { SplitEffect } from "@/effects/split";

export function Banner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const effect = new SplitEffect(container);

    effect.start();

    return () => {
      effect.dispose();
    };
  }, []);

  return <div ref={containerRef} className="size-full"></div>;
}
