"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";

interface MotionProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}

export const FadeIn = ({ children, delay = 0, y = 20, x = 0, className = "" }: MotionProps) => (
  <m.div
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </m.div>
);

export const StaggerItem = ({ children, index = 0, y = 20, x = 0, className = "" }: MotionProps & { index?: number }) => (
  <m.div
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={className}
  >
    {children}
  </m.div>
);

export const ScaleIn = ({ children, delay = 0, className = "" }: MotionProps) => (
  <m.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </m.div>
);
