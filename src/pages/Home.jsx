import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowUpRight, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { ProjectData } from "../data/ProjectData";
import heroBg from "../assets/img4.jpeg";

export default function Home({ onContactClick }) {
  const selectedProjects = ProjectData.slice(0, 4);

  const partners = ["Studio 8", "Pulse Media", "Fokal Events", "Wander & Co.", "LaunchBox"];

  const features = [
    {
      title: "Creative direction",
      desc: "Story development, mood boards and content planning that align with your launch strategy."
    },
    {
      title: "Production quality",
      desc: "4K camera packages, lighting design and drone capture for polished, cinematic results."
    },
    {
      title: "Post-production",
      desc: "Editing, color grading, motion graphics and sound design to make your visuals stand out."
    },
    {
      title: "Digital delivery",
      desc: "Assets optimized for social, web and broadcast, ready for launch across every channel."
    }
  ];

  const stats = [
    { num: "120+", label: "Campaigns delivered for lifestyle, corporate and event brands." },
    { num: "50+", label: "Aerial shoots captured with precision drone operation and cinematic framing." },
    { num: "98%", label: "Client satisfaction score based on repeat creative partnerships." }
  ];

  const testimonials = [
    {
      quote: "Timeless Motion delivered a premium event stream with zero drama and incredible style. Every shot felt intentional.",
      author: "Sarah H., Marketing Director"
    },
    {
      quote: "The final video exceeded our expectations. Their drone work and editing were top-tier, and the team was easy to work with.",
      author: "James P., Creative Lead"
    }
  ];

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <Helmet>
        <title>Timeless Motion Production | Zimbabwe Photography &amp; Video Studio</title>
        <meta name="description" content="Book a professional photographer or videographer in Zimbabwe. Timeless Motion Production delivers wedding photography, brand films, drone footage, livestreaming and social content across Zimbabwe and Southern Africa." />
        <link rel="canonical" href="https://www.timelessmotionproduction.co.zw/" />
        <meta property="og:title" content="Timeless Motion Production | Zimbabwe Photography &amp; Video Studio" />
        <meta property="og:description" content="Book a professional photographer or videographer in Zimbabwe. Wedding photography, drone, brand films, livestream and social content." />
        <meta property="og:url" content="https://www.timelessmotionproduction.co.zw/" />
      </Helmet>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background Photo */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-[1] bg-neutral-950/60" />
        {/* Bottom gradient to anchor the CTA buttons */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/30" />

        {/* Animated background glows (sit above overlay) */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="absolute inset-0 noise-overlay opacity-40" />
          <div className="absolute top-[-20%] left-[20%] w-[65vw] h-[65vw] bg-violet-900/10 rounded-full blur-[130px] mix-blend-screen animate-pulse-slow" />
          <div className="absolute bottom-[-20%] right-[20%] w-[55vw] h-[55vw] bg-blue-900/10 rounded-full blur-[130px] mix-blend-screen animate-pulse-slower" />
        </div>

        {/* Floating circles background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[3]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] md:w-[650px] md:h-[650px] rounded-full border border-white/5 dashed-border opacity-60"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute w-[450px] h-[450px] md:w-[900px] md:h-[900px] rounded-full border border-white/10 opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono tracking-widest uppercase text-neutral-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Zimbabwe Photography &amp; Video Production
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.9] mb-10 text-white"
          >
            Timeless <br />
            <span className="italic font-serif text-neutral-500">Motion</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl font-light text-neutral-400 max-w-3xl leading-relaxed mb-12"
          >
            From Weddings, Special Events to Portfolios. Book a photographer in Zimbabwe with ease. We connect individuals and businesses with local professional photographers across Zimbabwe and Southern Africa.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/263784152659"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-medium uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105"
            >
              <MessageCircle size={18} />
              Chat On WhatsApp
            </a>
            <a
              href="tel:0718776103"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 hover:border-white hover:bg-white/5 rounded-full text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:scale-105"
            >
              <Phone size={18} />
              Call 071 877 6103
            </a>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS / TRUSTED BY TICKER */}
      <section className="py-16 border-y border-white/5 bg-neutral-950/40">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600 mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-xl md:text-2xl font-light text-neutral-500 hover:text-white transition-colors duration-300 cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif italic text-lg text-white">01</span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
                  Featured Projects
                </span>
                <div className="h-px w-20 bg-white/10" />
              </div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
                Curated <span className="italic font-serif text-neutral-500">Excellence</span>
              </h2>
            </div>
            <Link
              to="/about"
              className="text-xs font-mono uppercase tracking-widest border-b border-white/20 pb-2 hover:text-neutral-300 transition-colors inline-block"
            >
              Explore all projects
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-y-24">
            {selectedProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={project.id}
                  className={`group cursor-pointer ${isEven ? "" : "md:mt-20"}`}
                >
                  <div className="relative overflow-hidden aspect-[4/3] rounded-md bg-neutral-900 mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10">
                      <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/10 scale-0 group-hover:scale-100 transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-white/10 pt-4">
                    <div>
                      <h3 className="text-2xl font-medium mb-1 group-hover:text-neutral-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-neutral-600">{project.year}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-32 px-6 bg-neutral-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.015),transparent_45%)] pointer-events-none" />
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif italic text-lg text-white">02</span>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
                  What we do
                </span>
                <div className="h-px w-20 bg-white/10" />
              </div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
                Full-Service <br />
                <span className="italic font-serif text-neutral-500">Production</span>
              </h2>
              <p className="text-neutral-400 font-light leading-relaxed mb-10">
                We handle end-to-end production for lifestyle, corporate, and event brands across Zimbabwe and Southern Africa.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black hover:bg-neutral-200 transition-all rounded-full text-xs font-medium uppercase tracking-widest"
              >
                View Services
              </Link>
            </div>

            {/* Features Listing */}
            <div className="grid md:grid-cols-2 gap-10">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-lg hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <h4 className="text-lg font-medium mb-3 tracking-tight">{feat.title}</h4>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-3 md:border-r border-white/5 last:border-0 md:pr-10">
                <h3 className="text-6xl font-light tracking-tighter text-white">
                  {stat.num}
                </h3>
                <p className="text-xs uppercase tracking-widest text-neutral-500 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600 block mb-12">
            Why clients choose us
          </span>
          <div className="space-y-16">
            {testimonials.map((t, idx) => (
              <div key={idx} className="space-y-6">
                <blockquote className="text-xl md:text-3xl font-light italic leading-relaxed text-neutral-300">
                  “{t.quote}”
                </blockquote>
                <cite className="block text-xs uppercase tracking-widest text-neutral-500 font-mono not-italic">
                  — {t.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-32 px-6 bg-neutral-900 border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-5" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-10">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]">
            Ready to make something <span className="italic font-serif text-neutral-500">timeless?</span>
          </h2>
          <p className="text-neutral-400 font-light text-lg max-w-xl mx-auto leading-relaxed">
            Let’s design a production plan that fits your brand, budget and timeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://wa.me/263784152659"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:scale-105"
            >
              Chat on WhatsApp
            </a>
            <button
              onClick={onContactClick}
              className="px-8 py-4 bg-white text-black hover:bg-neutral-200 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105"
            >
              Book a consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
