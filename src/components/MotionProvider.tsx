"use client";

import { LazyMotion } from "framer-motion";
import React from "react";

const loadFeatures = () => import("@/lib/framer-features").then((res) => res.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
