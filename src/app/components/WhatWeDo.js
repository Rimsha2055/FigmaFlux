
"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhatWeDo() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.2 });

  // Detect if page was scrolled on load — used to avoid animating immediately on refresh
  const [scrolledOnLoad] = useState(() => typeof window !== "undefined" && window.scrollY > 0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid auto-playing animation if the section is already in view on first render and page wasn't scrolled.
    if (isInView) {
      if (!mounted && !scrolledOnLoad) {
        // mark mounted but don't start animation until it leaves and re-enters
        setMounted(true);
        return;
      }
      controls.start("show");
      setMounted(true);
    } else {
      // when leaving viewport, reset to hidden so it can play again on re-enter
      controls.start("hidden");
    }
  }, [isInView, controls, scrolledOnLoad, mounted]);

  return (
    <motion.section
      ref={ref}
      className="py-16 md:py-24 text-black"
      variants={container}
      initial="hidden"
      animate={controls}
    >
      <div className="text-center">
        <motion.h2 variants={item} className="text-4xl md:text-5xl font-neue-montreal mb-20">
          What We Do
        </motion.h2>

        <motion.p variants={item} className="text-sm text-gray-600 mb-8">
          Club Details
        </motion.p>

        <motion.p variants={item} className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Speech and Debate is where you'll learn to think critically, speak confidently, and engage in exciting competitions. Here's everything you need to know:
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-center md:text-left">
        <motion.div variants={item}>
          <motion.p variants={item} className="text-sm text-gray-600 mb-2">What</motion.p>
          <motion.h3 variants={item} className="text-2xl md:text-3xl font-neue-montreal mb-4">Ready to find your voice?</motion.h3>
          <motion.p variants={item} className="text-gray-700">This is a safe place to hone your skills with like-minded peers.</motion.p>
        </motion.div>

        <motion.div variants={item}>
          <motion.p variants={item} className="text-sm text-gray-600 mb-2">Who</motion.p>
          <motion.h3 variants={item} className="text-2xl md:text-3xl font-neue-montreal mb-4">All Lincoln High students</motion.h3>
          <motion.p variants={item} className="text-gray-700">Everyone, in any grade, is welcome to join.</motion.p>
        </motion.div>

        <motion.div variants={item}>
          <motion.p variants={item} className="text-sm text-gray-600 mb-2">When</motion.p>
          <motion.h3 variants={item} className="text-2xl md:text-3xl font-neue-montreal mb-4">Wednesday, 3:30-4:30pm</motion.h3>
          <motion.p variants={item} className="text-gray-700">You'll be out in time for the late bus home.</motion.p>
        </motion.div>

        <motion.div variants={item}>
          <motion.p variants={item} className="text-sm text-gray-600 mb-2">Where</motion.p>
          <motion.h3 variants={item} className="text-2xl md:text-3xl font-neue-montreal mb-4">Room 204</motion.h3>
          <motion.p variants={item} className="text-gray-700">We meet in Mr. Smith's room. He's our teacher sponsor.</motion.p>
        </motion.div>
      </div>

      <motion.div className="mt-16 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24" variants={container}>
        <motion.img
          src="/images/image2.jpg"
          alt="Activity"
          width={1250}
          height={640}
          className="w-full h-auto max-h-[580px] object-cover rounded-lg"
          variants={item}
        />
      </motion.div>
    </motion.section>
  );
}
