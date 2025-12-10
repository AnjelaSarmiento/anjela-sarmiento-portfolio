"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { techStack } from "@/data/techstack";
import type { IconType } from "react-icons";
import { FiCode, FiLock, FiVideo } from "react-icons/fi";
import { TbBrandCSharp } from "react-icons/tb";

// Use a broad import to avoid version-specific missing icon type errors
const SiIcons = require("react-icons/si") as Record<string, IconType>;

const iconMap: Record<string, IconType> = {
  react: SiIcons.SiReact,
  nextjs: SiIcons.SiNextdotjs,
  typescript: SiIcons.SiTypescript,
  javascript: SiIcons.SiJavascript,
  html5: SiIcons.SiHtml5,
  css3: SiIcons.SiCss3,
  nodejs: SiIcons.SiNodedotjs,
  mongodb: SiIcons.SiMongodb,
  mysql: SiIcons.SiMysql,
  git: SiIcons.SiGit,
  github: SiIcons.SiGithub,
  docker: SiIcons.SiDocker,
  figma: SiIcons.SiFigma,
  vscode: SiIcons.SiVisualstudiocode || SiIcons.SiVisualstudio,
  express: SiIcons.SiExpress,
  tailwind: SiIcons.SiTailwindcss,
  bootstrap: SiIcons.SiBootstrap,
  jquery: SiIcons.SiJquery,
  php: SiIcons.SiPhp,
  cplusplus: SiIcons.SiCplusplus,
  csharp: TbBrandCSharp || SiIcons.SiCsharp || SiIcons.SiDotnet,
  codeigniter: SiIcons.SiCodeigniter,
  socketio: SiIcons.SiSocketdotio,
  postman: SiIcons.SiPostman,
  sass: SiIcons.SiSass,
  api: FiCode,
  jwt: FiLock,
  webrtc: FiVideo,
};

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
};

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ["frontend", "backend", "database", "tools"] as const;

  return (
    <section
      id="tech-stack"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-space-dark/50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => {
            const categoryTech = techStack.filter(
              (tech) => tech.category === category
            );

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-2xl font-semibold mb-6 text-purple-400">
                  {categoryLabels[category]}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {categoryTech.map((tech, index) => {
                    const normalizeIconKey = (icon: string, name: string) => {
                      const key = icon.trim().toLowerCase();
                      if (key === "c#") return "csharp";
                      if (key === "c++") return "cplusplus";
                      if (key === "code igniter") return "codeigniter";
                      if (key === "nodejs") return "nodejs";
                      if (key === "rest") return "api";
                      // fallback: try from name if icon is missing/incorrect
                      if (name.toLowerCase().includes("c#")) return "csharp";
                      if (name.toLowerCase().includes("c++")) return "cplusplus";
                      return key;
                    };

                    const iconKey = normalizeIconKey(tech.icon, tech.name);
                    const IconComponent = iconMap[iconKey] || SiIcons.SiReact || FiCode;

                    return (
                      <motion.div
                        key={tech.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + index * 0.05,
                        }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center p-4 rounded-lg bg-space-accent/50 hover:bg-space-accent transition-all duration-300 group cursor-pointer"
                      >
                        <IconComponent
                          className="w-8 h-8 text-gray-300 group-hover:text-purple-400 transition-colors duration-300 mb-2"
                          aria-hidden="true"
                        />
                        <span className="text-xs text-gray-400 group-hover:text-gray-200 text-center transition-colors duration-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

