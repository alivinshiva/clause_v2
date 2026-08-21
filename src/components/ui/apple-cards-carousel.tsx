'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useOutsideClick } from '@/hooks/use-outside-click';

export type CarouselCard = {
  category: string;
  title: string;
  gradient: string;
  tagline?: string;
  highlights?: string[];
  href?: string;
  ctaLabel?: string;
  content: React.ReactNode;
};

type CarouselContextProps = {
  onCardClose: (index: number) => void;
  currentIndex: number;
};

const CarouselContext = createContext<CarouselContextProps>({
  onCardClose: () => {},
  currentIndex: 0,
});

const arrowButtonClasses =
  'absolute -top-1 z-40 h-10 w-10 rounded-full bg-white border border-clause-steel/20 shadow-sm flex items-center justify-center text-clause-midnight transition-all hover:bg-clause-intelligence hover:text-white hover:border-clause-intelligence disabled:opacity-30 disabled:pointer-events-none';

export const Carousel = ({
  items,
  initialScroll = 0,
}: {
  items: React.ReactNode[];
  initialScroll?: number;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const scrollByAmount = (left: number) => {
    carouselRef.current?.scrollBy({ left, behavior: 'smooth' });
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 384 + 32; // w-96 + gap
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex: 0 }}
    >
      <div className="relative">
        <button
          onClick={() => scrollByAmount(-416)}
          disabled={!canScrollLeft}
          aria-label="Previous"
          className={`${arrowButtonClasses} left-0`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => scrollByAmount(416)}
          disabled={!canScrollRight}
          aria-label="Next"
          className={`${arrowButtonClasses} right-0`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-scroll pt-14 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, index) => (
            <motion.div
              key={`carousel-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index, ease: 'easeOut' }}
              className="mr-8 last:mr-0 min-w-[80%] sm:min-w-[55%] md:min-w-[33%]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index }: { card: CarouselCard; index: number }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  const close = () => {
    setOpen(false);
    onCardClose(index);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') close();
    }
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useOutsideClick(containerRef, () => close());

  return (
    <>
      <AnimatePresence>
        {open &&
          createPortal(
            <div className="fixed inset-0 z-[100] overflow-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="fixed inset-0 h-full w-full bg-clause-midnight/80 backdrop-blur-lg"
              />
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40, transition: { duration: 0.05 } }}
                ref={containerRef}
                className="relative z-[110] my-24 mx-auto max-w-3xl rounded-3xl bg-white p-6 md:p-10 shadow-2xl"
              >
                <button
                  onClick={close}
                  aria-label="Close"
                  className="sticky top-4 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-clause-midnight text-white transition-colors hover:bg-clause-intelligence"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <p className="text-sm font-semibold uppercase tracking-wide text-clause-intelligence">
                  {card.category}
                </p>
                <p className="mt-2 text-2xl md:text-3xl font-semibold text-clause-midnight">
                  {card.title}
                </p>
                <div className="py-8">{card.content}</div>
                {card.href && (
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-clause-intelligence transition-all hover:gap-2.5"
                  >
                    {card.ctaLabel ?? 'Learn more'}{' '}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </motion.div>
            </div>,
            document.body,
          )}
      </AnimatePresence>
      <div
        onClick={() => setOpen(true)}
        className="relative rounded-3xl h-[24rem] md:h-[26rem] w-full overflow-hidden border border-clause-steel/10 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col text-left cursor-pointer"
      >
        <div
          className="relative h-36 md:h-40 shrink-0"
          style={{ background: card.gradient }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
            <p className="text-xs md:text-sm font-medium text-clause-midnight/70">
              {card.category}
            </p>
            <p className="text-xl md:text-2xl font-semibold mt-1 text-clause-midnight">
              {card.title}
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 p-6 md:p-7">
          {card.tagline && (
            <p className="text-sm text-clause-steel leading-relaxed line-clamp-3">
              {card.tagline}
            </p>
          )}
          {card.highlights && card.highlights.length > 0 && (
            <ul className="mt-4 space-y-2">
              {card.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-clause-steel"
                >
                  <svg
                    className="w-4 h-4 mt-0.5 text-clause-intelligence shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
          {card.href && (
            <Link
              href={card.href}
              onClick={(e) => e.stopPropagation()}
              className="mt-auto w-full py-3 px-6 rounded-lg bg-clause-intelligence text-white font-medium text-sm text-center hover:bg-clause-intelligence/90 transition-all"
            >
              {card.ctaLabel ?? 'Learn more'}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
