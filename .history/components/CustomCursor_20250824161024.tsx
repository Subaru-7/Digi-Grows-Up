"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hoveredElement, setHoveredElement] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const allElements = Array.from(document.querySelectorAll("*"));

        const handleMouseEnter = () => setHoveredElement(true);
        const handleMouseLeave = () => setHoveredElement(false);

        allElements.forEach(el => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
            allElements.forEach(el => {
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
        <div className={`w-2 h-2 rounded-full border-2 border-white backdrop-blur-sm ${hoveredElement ? 'bg-black' : 'bg-white'}`} />
    </motion.div>
);
}