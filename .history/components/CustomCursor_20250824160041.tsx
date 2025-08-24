"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{ x: position.x - 10, y: position.y - 10 }} // offset so cursor centers
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="w-6 h-6 rounded-full border-2 border-white bg-white/20 backdrop-blur-sm" />
    </motion.div>
  );
}