"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiSend, FiCopy } from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/AnjelaSarmiento",
    ariaLabel: "Visit GitHub profile",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/anjela-sofia-sarmiento/",
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    name: "Facebook",
    icon: FiFacebook,
    url: "https://www.facebook.com/anjela.sarmiento",
    ariaLabel: "Visit Facebook profile",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const emailAddress = "work.anjelasofiasarmiento@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are not configured.");
    }

    try {
      await emailjs.send(
        serviceId ?? "",
        templateId ?? "",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        {
          publicKey: publicKey ?? "",
        }
      );

      setSubmitStatus("success");
      setSubmitMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Something went wrong while sending your message. Please try again later."
      );
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section
      id="contact"
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
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-space-accent/50 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-600 focus:ring-purple-500"
                  } text-white placeholder-gray-500`}
                  placeholder="Your name"
                  aria-label="Name"
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-space-accent/50 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-600 focus:ring-purple-500"
                  } text-white placeholder-gray-500`}
                  placeholder="your.email@example.com"
                  aria-label="Email"
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-space-accent/50 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-600 focus:ring-purple-500"
                  } text-white placeholder-gray-500`}
                  placeholder="Your message..."
                  aria-label="Message"
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {submitStatus && submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={
                    submitStatus === "success"
                      ? "text-green-400 text-center"
                      : "text-red-400 text-center"
                  }
                  role="alert"
                >
                  {submitMessage}
                </motion.p>
              )}

              {/* Send Message Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-space-darker disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.4),0_0_40px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6),0_0_50px_rgba(147,51,234,0.5)]"
                aria-label="Send message"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Connect With Me
            </h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out through social media or send me a message
              using the form. I&apos;m always open to discussing new projects,
              creative ideas, or opportunities.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center glass rounded-lg hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label={social.ariaLabel}
                  >
                    <Icon className="w-6 h-6 text-gray-300 hover:text-purple-400 transition-colors duration-300" />
                  </a>
                );
              })}
            </div>

            <div className="mt-8 p-6 glass rounded-lg">
              <p className="text-sm text-gray-400 mb-3">Email</p>
              <div className="flex items-center gap-2.5 flex-nowrap">
                <a
                  href={`mailto:${emailAddress}?subject=Portfolio Inquiry`}
                  className="group/email flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                  aria-label={`Send email to ${emailAddress}`}
                >
                  <FiMail className="w-5 h-5 text-purple-400 flex-shrink-0 transition-all duration-300 group-hover/email:text-purple-300 group-hover/email:scale-105 group-hover/email:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] group-hover/email:brightness-110" />
                  <span className="text-white whitespace-nowrap transition-colors duration-300 group-hover/email:text-purple-300">
                    {emailAddress}
                  </span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="group/copy p-1 -ml-1 text-purple-400 hover:text-purple-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded flex items-center justify-center"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  <FiCopy className="w-4 h-4 transition-all duration-300 group-hover/copy:scale-105 group-hover/copy:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] group-hover/copy:brightness-110" />
                </button>
              </div>
              {emailCopied && (
                <p className="text-xs text-green-400 mt-2">✓ Email copied to clipboard!</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

