"use client";

import { useState, useEffect } from "react";

interface TypingAnimationProps {
  roles: string[];
}

export default function TypingAnimation({ roles }: TypingAnimationProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === currentRole) {
      // Pause at the end of typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
    } else if (isDeleting && currentText === "") {
      // Move to next role after deleting
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(100);
    } else if (isDeleting) {
      // Delete character
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, typingSpeed);
    } else {
      // Type character
      timeout = setTimeout(() => {
        setCurrentText((prev) => currentRole.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <span className="inline-block min-h-[1.2em]">
      <span className="text-white">{currentText}</span>
      <span className="inline-block w-0.5 h-[1em] bg-purple-400 ml-1 animate-pulse">
        |
      </span>
    </span>
  );
}

