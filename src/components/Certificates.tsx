"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { certificates } from "@/data/certificates";
import { achievements } from "@/data/achievements";
import { FiAward, FiCalendar, FiExternalLink } from "react-icons/fi";

const formatDisplayDate = (dateStr: string) => {
  const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (isoDatePattern.test(dateStr)) {
    const parsed = new Date(dateStr);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  }
  return dateStr;
};

const getSortableDateValue = (dateStr: string) => {
  const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;
  const rangePattern = /^(\d{4})-(\d{4})$/;
  const yearPattern = /^(\d{4})$/;

  if (isoDatePattern.test(dateStr)) {
    const parsed = new Date(dateStr);
    if (!Number.isNaN(parsed.getTime())) return parsed.getTime();
  }

  const rangeMatch = dateStr.match(rangePattern);
  if (rangeMatch) {
    return parseInt(rangeMatch[1], 10);
  }

  const yearMatch = dateStr.match(yearPattern);
  if (yearMatch) {
    return parseInt(yearMatch[1], 10);
  }

  return Number.MAX_SAFE_INTEGER;
};

export default function Certificates() {
  const certificatesRef = useRef(null);
  const achievementsRef = useRef(null);
  const certificatesInView = useInView(certificatesRef, {
    once: true,
    margin: "-100px",
  });
  const achievementsInView = useInView(achievementsRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Certificates & Achievements
        </motion.h2>

        {/* Certificates */}
        <div ref={certificatesRef} className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={
              certificatesInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-8 text-purple-400 text-center"
          >
            Certificates
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  certificatesInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col min-h-[230px]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <FiAward className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {certificate.title}
                    </h4>
                    <p className="text-gray-400 mb-3">{certificate.issuer}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FiCalendar className="w-4 h-4" />
                      <span>
                        {new Date(certificate.date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5">
                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                      aria-label={`View ${certificate.title} certificate`}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>View Certificate</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div ref={achievementsRef}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={
              achievementsInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-8 text-purple-400 text-center"
          >
            Achievements
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...achievements]
              .sort(
                (a, b) => getSortableDateValue(a.date) - getSortableDateValue(b.date)
              )
              .map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  achievementsInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      achievement.category === "award"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : achievement.category === "recognition"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-purple-500/20 text-purple-400"
                    }`}
                  >
                    <FiAward className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 mb-3">
                      {achievement.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FiCalendar className="w-4 h-4" />
                      <span>{formatDisplayDate(achievement.date)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

