"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hoveredText, setHoveredText] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const textElements = Array.from(document.querySelectorAll("p, span, a, h1, h2, h3, h4, h5, h6, li"));

        const handleMouseEnter = () => setHoveredText(true);
        const handleMouseLeave = () => setHoveredText(false);

        textElements.forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
            textElements.forEach(el => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
    <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{ x: position.x - 10, y: position.y - 10 }} // offset so cursor centers
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
        <div className={`w-2 h-2 rounded-full border-2 border-white backdrop-blur-sm ${hoveredText ? 'bg-black' : 'bg-white'}`} />
    </motion.div>
);
}