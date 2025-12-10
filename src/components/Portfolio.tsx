"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [sfaImageIndex, setSfaImageIndex] = useState(0);
  const [scmsImageIndex, setScmsImageIndex] = useState(0);
  const sfaTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scmsTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const savedScrollPosition = useRef<number>(0);
  const restoreScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isModalOpen = useRef<boolean>(false);

  const clearSfaTimers = () => {
    sfaTimers.current.forEach((timer) => clearTimeout(timer));
    sfaTimers.current = [];
  };

  const clearScmsTimers = () => {
    scmsTimers.current.forEach((timer) => clearTimeout(timer));
    scmsTimers.current = [];
  };

  const startSfaCycle = () => {
    clearSfaTimers();
    setSfaImageIndex(1); // move to second image immediately
    sfaTimers.current.push(
      setTimeout(() => {
        setSfaImageIndex(2);
      }, 1000)
    );
  };

  const resetSfaCycle = () => {
    clearSfaTimers();
    setSfaImageIndex(0);
  };

  const startScmsCycle = () => {
    clearScmsTimers();
    setScmsImageIndex(1); // move to second image immediately
    const steps = [2, 3, 4]; // indices for scms-3, scms-4, scms-5
    steps.forEach((idx, step) => {
      scmsTimers.current.push(
        setTimeout(() => {
          setScmsImageIndex(idx);
        }, (step + 1) * 1000)
      );
    });
  };

  const resetScmsCycle = () => {
    clearScmsTimers();
    setScmsImageIndex(0);
  };

  useEffect(() => {
    return () => {
      clearSfaTimers();
      clearScmsTimers();
    };
  }, []);

  // Lock body scroll when modal is open and restore when closed
  useEffect(() => {
    if (selectedProject) {
      // Clear any pending restore timeout
      if (restoreScrollTimeout.current) {
        clearTimeout(restoreScrollTimeout.current);
        restoreScrollTimeout.current = null;
      }

      // Mark modal as open
      isModalOpen.current = true;

      // Save current scroll position using ref to persist across renders
      savedScrollPosition.current = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollPosition.current}px`;
      document.body.style.width = '100%';
      document.body.style.paddingRight = '0px'; // Prevent layout shift from scrollbar
    } else if (isModalOpen.current || document.body.style.position === 'fixed') {
      // Modal is closing - restore if it was previously open OR if body is still locked
      isModalOpen.current = false;

      // Wait for exit animation to complete (0.2s transition + small buffer)
      restoreScrollTimeout.current = setTimeout(() => {
        const restoreScroll = savedScrollPosition.current;

        // Restore body styles
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.paddingRight = '';
        
        // Restore scroll position immediately to avoid visible jumps
        const scrollPos = restoreScroll > 0 ? restoreScroll : 0;
        window.scrollTo(0, scrollPos);
        // Reset saved position after restoration
        savedScrollPosition.current = 0;
        
        restoreScrollTimeout.current = null;
      }, 250); // Slightly longer than exit animation duration (200ms)
    }

    // Cleanup function - ensure scroll is restored if modal opens while another is closing
    return () => {
      // If a new modal is opening, we've already cleared the timeout above
      // This cleanup is mainly for edge cases
    };
  }, [selectedProject]);

  // Cleanup on unmount - ensure scroll is always restored
  useEffect(() => {
    return () => {
      // Clear any pending timeout
      if (restoreScrollTimeout.current) {
        clearTimeout(restoreScrollTimeout.current);
        restoreScrollTimeout.current = null;
      }
      
      // Safety: restore scroll if body is still locked
      if (document.body.style.position === 'fixed') {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.paddingRight = '';
        
        if (savedScrollPosition.current > 0) {
          window.scrollTo(0, savedScrollPosition.current);
        }
      }
    };
  }, []);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Portfolio
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch scale-[0.97]">
          {projects.map((project, index) => {
            const summary = project.summary ?? project.description;
            const visibleTech = project.techStack.slice(0, 5);
            const remainingCount = project.techStack.length - visibleTech.length;

            const isMobilityCom = project.id === "3";
            const isSalesForce = project.id === "2";
            const isScms = project.id === "1";
            const isHovered = hoveredProjectId === project.id;
            const currentSfaIndex = isSalesForce ? sfaImageIndex : 0;
            const currentScmsIndex = isScms ? scmsImageIndex : 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -6 }}
                className="glass rounded-xl overflow-hidden group cursor-pointer flex flex-col"
                onMouseEnter={() => {
                  setHoveredProjectId(project.id);
                  if (isSalesForce) {
                    startSfaCycle();
                  }
                  if (isScms) {
                    startScmsCycle();
                  }
                }}
                onMouseLeave={() => {
                  setHoveredProjectId(null);
                  if (isSalesForce) {
                    resetSfaCycle();
                  }
                  if (isScms) {
                    resetScmsCycle();
                  }
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  {isMobilityCom ? (
                    <>
                      <Image
                        src="/images/mobilitycom-1.png"
                        alt={project.title}
                        fill
                        quality={85}
                        className={`object-cover transition-opacity duration-500 ${
                          isHovered ? "opacity-0" : "opacity-100"
                        }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <Image
                        src="/images/mobilitycom-2.png"
                        alt={project.title}
                        fill
                        quality={85}
                        className={`object-cover transition-opacity duration-500 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </>
                  ) : isSalesForce ? (
                    <>
                      {["/images/sfa-1.png", "/images/sfa-2.png", "/images/sfa-3.png"].map(
                        (src, idx) => (
                          <Image
                            key={src}
                            src={src}
                            alt={project.title}
                            fill
                            quality={85}
                            className={`object-cover transition-opacity duration-300 ${
                              currentSfaIndex === idx ? "opacity-100" : "opacity-0"
                            }`}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        )
                      )}
                    </>
                  ) : isScms ? (
                    <>
                      {[
                        "/images/scms-1.png",
                        "/images/scms-2.png",
                        "/images/scms-3.png",
                        "/images/scms-4.png",
                        "/images/scms-5.png",
                      ].map((src, idx) => (
                        <Image
                          key={src}
                          src={src}
                          alt={project.title}
                          fill
                          quality={85}
                          className={`object-cover transition-opacity duration-300 ${
                            currentScmsIndex === idx ? "opacity-100" : "opacity-0"
                          }`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ))}
                    </>
                  ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={85}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-space-darker/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 flex-1">
                    {summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {visibleTech.map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="px-3 py-1 text-xs bg-space-accent rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {remainingCount > 0 && (
                      <span className="px-3 py-1 text-xs bg-space-accent/50 rounded-full text-gray-400">
                        +{remainingCount} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              key="project-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-space-darker glass rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto overscroll-contain touch-pan-y"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl leading-none focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                aria-label="Close project details"
              >
                ×
              </button>

              <div className="mb-6">
                <h3 className="text-3xl font-semibold text-white mb-3 pr-8">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {selectedProject.problem && (
                  <div>
                    <h4 className="text-purple-300 font-semibold text-lg mb-2">Problem</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.problem}</p>
                  </div>
                )}
                {selectedProject.role && (
                  <div>
                    <h4 className="text-purple-300 font-semibold text-lg mb-2">Role</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.role}</p>
                  </div>
                )}
                {selectedProject.impact && (
                  <div>
                    <h4 className="text-purple-300 font-semibold text-lg mb-2">Impact</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.impact}</p>
                  </div>
                )}
                {selectedProject.highlights?.length ? (
                  <div>
                    <h4 className="text-purple-300 font-semibold text-lg mb-2">Key Highlights</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {selectedProject.highlights.map((item, idx) => (
                        <li key={`${selectedProject.id}-highlight-${idx}`} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="mb-6">
                <h4 className="text-purple-300 font-semibold text-lg mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={`${selectedProject.id}-tech-${tech}`}
                      className="px-3 py-1.5 text-sm bg-space-accent rounded-full text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-space-accent hover:bg-space-accent/80 text-white rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label={`View ${selectedProject.title} on GitHub`}
                >
                  <FiGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                {selectedProject.liveUrl !== "#" && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label={`View ${selectedProject.title} live demo`}
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

