import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[999] bg-neutral-950 flex items-center justify-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-[0.2em] font-sans text-center">
              TIMELESS MOTION
            </h1>
            <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">
              Cinematic Craft &amp; Digital Strategy
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
              className="h-[1px] bg-white/20 w-48 mt-2"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
