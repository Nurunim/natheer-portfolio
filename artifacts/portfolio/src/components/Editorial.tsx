import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const GrainOverlay = () => (
  <div className="grain-overlay">
    <svg width="100%" height="100%">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" opacity="0.07"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
    </svg>
  </div>
);

export const CursorDot = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // No spring per instructions: "framer-motion spring for position... wait, instruction says 
  // 'CursorDot — olive green cursor follower (10px dot, framer-motion spring for position)'
  const cursorXSpring = useSpring(cursorX, { stiffness: 400, damping: 28, mass: 0.5 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 400, damping: 28, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 5);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[10px] h-[10px] bg-primary rounded-full pointer-events-none z-[99999]"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    />
  );
};

export const StickyNav = () => (
  <nav className="sticky top-0 z-50 bg-background border-b-[2px] border-primary">
    <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <a href="#hero" className="font-bebas text-2xl text-foreground tracking-widest">N.W.J</a>
      <div className="hidden md:flex gap-8 font-teko uppercase tracking-[0.2em] text-primary">
        {['Profile', 'Expertise', 'Works', 'Credentials'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className="relative group hover:text-foreground transition-colors duration-300">
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export const PosterRule = () => <div className="poster-rule" />;
export const ThinRule = () => <div className="thin-rule" />;
export const OrnamentalDivider = () => <div className="ornamental-divider">─── ✦ ───</div>;

export const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
