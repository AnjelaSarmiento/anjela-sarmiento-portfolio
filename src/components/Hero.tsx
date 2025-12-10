"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TypingAnimation from "./TypingAnimation";

const roles = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Designer",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-darker via-space-dark to-space-darker opacity-90" />

      {/* Stars background effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Hi! I&apos;m </span>
              <span className="gradient-text">Anjela Sofia G. Sarmiento</span>
              <span className="text-white"> – </span>
              <br />
              <TypingAnimation roles={roles} />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-300 mb-8 font-light"
            >
              Developing solutions that are out of this world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#portfolio"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-space-darker text-center"
                aria-label="View Projects"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-space-darker text-center"
                aria-label="Let's Connect"
              >
                Let&apos;s Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Astronaut Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block ml-8"
          >
            {/* Orbit Lines Container */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Outer Orbit Line */}
              <motion.div
                className="absolute"
                style={{
                  width: "605px",
                  height: "435px",
                  top: "50%",
                  left: "50%",
                  marginTop: "-250px",
                  marginLeft: "-350px",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full border border-purple-400/40" style={{ borderRadius: "50%" }} />
              </motion.div>
              
              {/* Inner Orbit Line */}
              <motion.div
                className="absolute"
                style={{
                  width: "550px",
                  height: "400px",
                  top: "50%",
                  left: "50%",
                  marginTop: "-200px",
                  marginLeft: "-275px",
                }}
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full border border-blue-400/40" style={{ borderRadius: "50%" }} />
              </motion.div>
            </div>

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="relative w-full h-auto max-w-md">
                <Image
                  src="/images/astronaut.png"
                  alt="Astronaut floating in space"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}

