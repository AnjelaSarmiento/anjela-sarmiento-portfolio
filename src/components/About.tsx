"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
      <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
          {/* Hologram Projection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-start relative order-2 lg:order-1 px-6 lg:px-8 py-8 lg:py-12"
          >
            <div className="relative w-full max-w-md aspect-[3/4] my-4 lg:my-8">
              {/* Projection Base Glow - Platform Emission */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-16">
                <div className="absolute inset-0 rounded-full blur-2xl" style={{ background: 'linear-gradient(to top, rgba(83, 52, 131, 0.4) 0%, rgba(15, 52, 96, 0.3) 50%, transparent 100%)' }}></div>
                <div className="absolute inset-0 rounded-full blur-xl" style={{ background: 'linear-gradient(to top, rgba(15, 52, 96, 0.3) 0%, rgba(83, 52, 131, 0.2) 50%, transparent 100%)' }}></div>
              </div>

              {/* Outer Glow - Purple-Blue Halo */}
              <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-70" style={{ background: 'linear-gradient(to bottom right, rgba(83, 52, 131, 0.25) 0%, rgba(15, 52, 96, 0.2) 50%, rgba(83, 52, 131, 0.25) 100%)' }}></div>
              <div className="absolute -inset-4 rounded-2xl blur-2xl opacity-50" style={{ background: 'linear-gradient(to bottom right, rgba(15, 52, 96, 0.15) 0%, rgba(83, 52, 131, 0.1) 50%, rgba(15, 52, 96, 0.15) 100%)' }}></div>

              {/* Main Hologram Container */}
              <div className="relative w-full h-full">
                {/* Soft Edge Fade Mask */}
                <div 
                  className="absolute inset-0 z-30 pointer-events-none"
                  style={{
                    maskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.3) 80%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.3) 80%, transparent 100%)',
                  }}
                ></div>

                {/* Digital Noise Grain / Shimmer */}
                <motion.div
                  className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]"
                  animate={{
                    opacity: [0.02, 0.04, 0.02],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
                      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)
                    `,
                    backgroundSize: '100% 100%, 100% 100%',
                  }}
                ></motion.div>

                {/* Transparent Digital Grid Overlay */}
                <div 
                  className="absolute inset-0 z-15 pointer-events-none opacity-8"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(83, 52, 131, 0.15) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(83, 52, 131, 0.15) 1px, transparent 1px),
                      linear-gradient(rgba(15, 52, 96, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(15, 52, 96, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px, 40px 40px, 20px 20px, 20px 20px',
                    backgroundPosition: '0 0, 0 0, 20px 20px, 20px 20px',
                    mixBlendMode: 'screen',
                    maskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.6) 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.6) 70%, transparent 100%)',
                  }}
                ></div>

                {/* Slow Vertical Hologram Scan Line */}
                <motion.div
                  className="absolute inset-0 z-18 pointer-events-none"
                  animate={{
                    y: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(83, 52, 131, 0.15) 48%, rgba(15, 52, 96, 0.15) 50%, rgba(83, 52, 131, 0.15) 52%, transparent 100%)',
                    height: '8%',
                    maskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.6) 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.6) 70%, transparent 100%)',
                  }}
                />

                {/* Light RGB Edge Separation - Subtle Optical Refraction */}
                <div className="absolute inset-0 z-12 pointer-events-none">
                  {/* Red channel - very subtle */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 0, 0, 0.3) 2%, transparent 4%, transparent 96%, rgba(255, 0, 0, 0.3) 98%, transparent 100%)',
                      mixBlendMode: 'screen',
                      maskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                      WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                    }}
                  ></div>
                  {/* Green channel - very subtle */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(0, 255, 0, 0.3) 2%, transparent 4%, transparent 96%, rgba(0, 255, 0, 0.3) 98%, transparent 100%)',
                      mixBlendMode: 'screen',
                      maskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                      WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                    }}
                  ></div>
                  {/* Blue channel - very subtle */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 255, 0.3) 2%, transparent 4%, transparent 96%, rgba(0, 0, 255, 0.3) 98%, transparent 100%)',
                      mixBlendMode: 'screen',
                      maskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                      WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                    }}
                  ></div>
                </div>

                {/* Holographic Color Overlay */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(83, 52, 131, 0.08) 0%, rgba(15, 52, 96, 0.06) 50%, rgba(83, 52, 131, 0.08) 100%)',
                    mixBlendMode: 'screen',
                    maskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.6) 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.6) 70%, transparent 100%)',
                  }}
                ></div>

                {/* Main Photo with Opacity Breathing */}
                <motion.div
                  className="relative w-full h-full z-5"
                  animate={{
                    opacity: [0.92, 1, 0.92],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    maskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.3) 80%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.3) 80%, transparent 100%)',
                  }}
                >
                  <Image
                    src="/images/profile-photo.png"
                    alt="Anjela Sofia G. Sarmiento - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      filter: 'brightness(1.05) contrast(1.05) saturate(1.1)',
                    }}
                  />
                </motion.div>

                {/* Additional Holographic Glow Layers */}
                <div 
                  className="absolute inset-0 z-8 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 70% 85% at center, rgba(83, 52, 131, 0.12) 0%, rgba(15, 52, 96, 0.08) 50%, transparent 100%)',
                    mixBlendMode: 'screen',
                    maskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 75% 90% at center, black 45%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                  }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2 text-center lg:text-left"
          >
            {/* Introduction - Enhanced Hierarchy */}
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold text-gray-100 leading-relaxed">
                Hello! I&apos;m <span className="text-purple-400">Anjela Sofia G. Sarmiento</span>
              </p>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                A passionate full-stack developer with a love for creating beautiful, functional, and user-friendly 
                web applications.
              </p>
            </div>

            {/* Technical Expertise with "How" */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              I specialize in building modern web applications with{" "}
              <span className="text-purple-300 font-medium">HTML</span>,{" "}
              <span className="text-purple-300 font-medium">CSS</span>,{" "}
              <span className="text-purple-300 font-medium">Tailwind CSS</span>,{" "}
              <span className="text-purple-300 font-medium">JavaScript</span>,{" "}
              <span className="text-purple-300 font-medium">React</span>,{" "}
              <span className="text-purple-300 font-medium">Node.js</span>,{" "}
              <span className="text-purple-300 font-medium">PHP (CodeIgniter)</span>, and{" "}
              <span className="text-purple-300 font-medium">MySQL</span>.
            </p>

            {/* Design Philosophy - "Why" and "How" */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              My approach centers on <span className="text-purple-300 font-semibold">problem-solving through clean, maintainable code</span> and 
              <span className="text-purple-300 font-semibold"> user-centric design</span>. I believe that great software isn&apos;t just about 
              the technologies used—it&apos;s about understanding user needs, architecting scalable solutions, and writing code that 
              future developers (including myself) will thank me for. Every project is an opportunity to balance innovation with 
              practicality, ensuring that the solutions I build are both cutting-edge and reliable.
            </p>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              My goal is to transform ideas into <span className="text-purple-300 font-semibold">stellar digital experiences</span> that 
              shine in today&apos;s tech universe!
            </p>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <a
                href="/Anjela_Sofia_Sarmiento_CV.pdf"
                download="Anjela_Sofia_Sarmiento_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500 rounded-lg font-semibold text-base hover:bg-purple-500/10 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-space-darker"
                aria-label="Download CV"
              >
                <FiDownload className="w-5 h-5" />
                <span>Download My CV</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

