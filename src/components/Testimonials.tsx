"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<(typeof testimonials)[number] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [expandableMap, setExpandableMap] = useState<boolean[]>([]);

  const isModalOpen = !!selectedTestimonial;

  // Determine which testimonials actually overflow the 5-line clamp
  const updateExpandableMap = useCallback(() => {
    const map = testimonials.map((_, index) => {
      const el = textRefs.current[index];
      if (!el) return false;
      return el.scrollHeight - el.clientHeight > 1;
    });
    setExpandableMap(map);
  }, []);

  useEffect(() => {
    updateExpandableMap();
    window.addEventListener("resize", updateExpandableMap);

    return () => window.removeEventListener("resize", updateExpandableMap);
  }, [updateExpandableMap]);

  // Auto-scroll effect with smooth pause/resume
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.5;
    let animationFrame: number;

    const step = () => {
      const isPaused = isHovered || isUserInteracting || isModalOpen;

      if (!isPaused && scrollContainer) {
        scrollPositionRef.current += scrollSpeed;

        const maxScroll =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        // Reset scroll position when reaching the end for infinite loop
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }

        scrollContainer.scrollLeft = scrollPositionRef.current;
      }

      animationFrame = window.requestAnimationFrame(step);
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [isHovered, isUserInteracting, isModalOpen]);

  // Close modal on Escape
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedTestimonial(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-space-dark/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Testimonials
        </motion.h2>

        <div className="relative">
          <div
            ref={scrollRef}
            onMouseEnter={() => {
              if (!isDraggingRef.current) setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              if (isDraggingRef.current) {
                isDraggingRef.current = false;
                setIsUserInteracting(false);
              }
            }}
            onMouseDown={(e) => {
              const scrollContainer = scrollRef.current;
              if (!scrollContainer) return;

              isDraggingRef.current = true;
              setIsUserInteracting(true);
              setIsHovered(false);

              dragStartXRef.current = e.pageX - scrollContainer.offsetLeft;
              dragStartScrollLeftRef.current = scrollContainer.scrollLeft;

              scrollContainer.classList.add("cursor-grabbing");
            }}
            onMouseUp={() => {
              const scrollContainer = scrollRef.current;
              if (scrollContainer) {
                scrollContainer.classList.remove("cursor-grabbing");
              }
              isDraggingRef.current = false;
              setIsUserInteracting(false);
            }}
            onMouseMove={(e) => {
              const scrollContainer = scrollRef.current;
              if (!scrollContainer || !isDraggingRef.current) return;

              e.preventDefault();
              const x = e.pageX - scrollContainer.offsetLeft;
              const walk = x - dragStartXRef.current;
              scrollContainer.scrollLeft = dragStartScrollLeftRef.current - walk;
              scrollPositionRef.current = scrollContainer.scrollLeft;
            }}
            onTouchStart={(e) => {
              const scrollContainer = scrollRef.current;
              if (!scrollContainer) return;

              isDraggingRef.current = true;
              setIsUserInteracting(true);
              setIsHovered(false);

              const touch = e.touches[0];
              dragStartXRef.current = touch.pageX - scrollContainer.offsetLeft;
              dragStartScrollLeftRef.current = scrollContainer.scrollLeft;
            }}
            onTouchMove={(e) => {
              const scrollContainer = scrollRef.current;
              if (!scrollContainer || !isDraggingRef.current) return;

              const touch = e.touches[0];
              const x = touch.pageX - scrollContainer.offsetLeft;
              const walk = x - dragStartXRef.current;
              scrollContainer.scrollLeft = dragStartScrollLeftRef.current - walk;
              scrollPositionRef.current = scrollContainer.scrollLeft;
            }}
            onTouchEnd={() => {
              isDraggingRef.current = false;
              setIsUserInteracting(false);
            }}
            className="overflow-x-auto scrollbar-hide cursor-grab"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex gap-6 pb-4 items-stretch">
              {duplicatedTestimonials.map((testimonial, index) => {
                const baseIndex = index % testimonials.length;
                const canExpand = expandableMap[baseIndex];

                return (
                  <motion.div
                    key={`${testimonial.id}-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 w-80 glass rounded-xl p-6 cursor-pointer hover:border-purple-500/60 border border-transparent transition-colors duration-300 flex flex-col min-h-[230px]"
                    onClick={() => {
                      if (canExpand) {
                        setSelectedTestimonial(testimonial);
                      }
                    }}
                  >
                <div className="flex items-center gap-4 mb-4">
                  {testimonial.avatar && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <div className="relative flex-1 mt-1 pb-2">
                  <p
                    ref={
                      index < testimonials.length
                        ? (el) => {
                            textRefs.current[baseIndex] = el;
                          }
                        : undefined
                    }
                    className="text-gray-300 italic line-clamp-5"
                  >
                    &quot;{testimonial.review}&quot;
                  </p>
                </div>

                  {canExpand && (
                    <div className="mt-2 pt-3 border-t border-white/5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTestimonial(testimonial);
                        }}
                        className="text-sm text-purple-400 hover:text-purple-300 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                      >
                        Read more
                      </button>
                    </div>
                  )}
                </motion.div>
                );
              })}
            </div>
          </div>

          {/* Fixed edge fades (subtle dark gradients to suggest overflow) */}
          <div className="pointer-events-none absolute inset-y-0 -left-1 w-12 bg-gradient-to-r from-space-darker/95 via-space-darker/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 -right-1 w-12 bg-gradient-to-l from-space-darker/95 via-space-darker/60 to-transparent" />
        </div>
      </div>

      {/* Modal for full testimonial */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            key="testimonial-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedTestimonial(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              key="testimonial-modal"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl mx-4 md:mx-6 bg-space-dark/95 glass md:rounded-2xl rounded-t-3xl md:max-h-[80vh] h-[70vh] md:h-auto overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl md:text-xl focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full"
                aria-label="Close testimonial"
              >
                ×
              </button>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  {selectedTestimonial.avatar && (
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={selectedTestimonial.avatar}
                        alt={selectedTestimonial.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {selectedTestimonial.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {selectedTestimonial.role} at{" "}
                      {selectedTestimonial.company}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(selectedTestimonial.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-200 leading-relaxed">
                  &quot;{selectedTestimonial.review}&quot;
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

