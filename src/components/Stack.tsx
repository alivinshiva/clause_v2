'use client';

import {
  createContext,
  useContext,
  useRef,
  type CSSProperties,
  type ReactNode,
} from 'react';
import {
  motion,
  useScroll,
  useTransform,
  motionValue,
  type MotionValue,
} from 'framer-motion';

const idleProgress = motionValue(1);

const StackContext = createContext<MotionValue<number>>(idleProgress);

export function StackContainer({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const count = Array.isArray(children) ? children.length : 1;

  return (
    <StackContext.Provider value={scrollYProgress}>
      <div
        ref={ref}
        className="stack-container relative z-10 flex-1"
        style={{ '--stack-count': count } as CSSProperties}
      >
        {children}
      </div>
    </StackContext.Provider>
  );
}

export function StackItem({
  index,
  total,
  children,
}: {
  index: number;
  total: number;
  children: ReactNode;
}) {
  const progress = useContext(StackContext);
  const scale = useTransform(progress, [index / total, 1], [1, 0.94]);

  return (
    <div
      className="stack-item"
      style={{ zIndex: index + 1, '--stack-offset': index } as CSSProperties}
    >
      <motion.div className="stack-card" style={{ scale }}>
        {children}
      </motion.div>
    </div>
  );
}
