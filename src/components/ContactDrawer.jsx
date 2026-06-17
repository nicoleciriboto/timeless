import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "263784152659";

export default function ContactDrawer({ isOpen, onClose }) {
  const [status, setStatus] = useState("idle"); // idle | success
  const [form, setForm] = useState({ name: "", phone: "", details: "" });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Hello Timeless Motion! 👋\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n\n` +
      `*Project Details:*\n${form.details}`
    );

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");

    setStatus("success");
    setTimeout(() => {
      onClose();
      setStatus("idle");
      setForm({ name: "", phone: "", details: "" });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-[100]"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[101] w-full md:w-[600px] bg-neutral-900 border-l border-white/10 shadow-2xl p-8 md:p-12 overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 text-neutral-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6"
                >
                  <Check className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-medium mb-2 text-white">Opening WhatsApp…</h3>
                <p className="text-neutral-400 font-light">
                  Your message has been prepared. Complete the send in WhatsApp.
                </p>
              </div>
            ) : (
              <div className="mt-12">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6 block">
                  04 / Contact
                </span>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tighter mb-2 text-white">
                  Start a <span className="italic font-serif text-neutral-500">Project</span>
                </h3>
                <p className="text-neutral-400 font-light mb-12">
                  Tell us about your brand vision. Let's create something timeless.
                </p>

                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-8">
                    <div className="relative">
                      <input
                        required
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 text-white"
                      />
                    </div>
                    <div className="relative">
                      <input
                        required
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number (e.g. +263 71 234 5678)"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 text-white"
                      />
                    </div>
                    <div className="relative">
                      <textarea
                        required
                        name="details"
                        value={form.details}
                        onChange={handleChange}
                        placeholder="Project Details..."
                        rows={4}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors resize-none placeholder:text-neutral-700 text-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-medium py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
