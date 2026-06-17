import React from "react";
import { motion } from "framer-motion";
import { Film, Calendar, Compass, MessageSquare } from "lucide-react";
import img5 from "../assets/img5.jpeg";
import DroneSeries2 from "../assets/DroneSeries2.jpeg";
import img3 from "../assets/img3.jpeg";

export default function About({ onContactClick }) {
  const approach = [
    {
      step: "01",
      title: "Brief",
      desc: "We start by learning your goals, audience and timeline so every asset supports your business."
    },
    {
      step: "02",
      title: "Shoot",
      desc: "Our team executes with premium cameras, audio and lighting for professional results."
    },
    {
      step: "03",
      title: "Edit",
      desc: "We polish footage with grading, sound design and motion work to deliver the final brand story."
    },
    {
      step: "04",
      title: "Launch",
      desc: "We hand over social-ready assets, deliverables and support for your campaign rollout."
    }
  ];

  const team = [
    {
      role: "Founder / Creative Director",
      desc: "Leads concept, direction and client strategy for every production."
    },
    {
      role: "Director of Photography",
      desc: "Oversees camera, lighting and visual execution on every shoot."
    },
    {
      role: "Post Producer",
      desc: "Manages editing, sound and final delivery for fast and polished completion."
    }
  ];

  const coreDifferentiators = [
    "Trusted production process from briefing to delivery",
    "Flexible teams for shoots, post and digital release",
    "Ready-made content for social and web usage"
  ];

  const crafts = [
    {
      icon: <Film className="w-6 h-6" />,
      title: "Brand films",
      desc: "High-impact video production for product launches and campaigns."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Events",
      desc: "Livestream and highlight edits for conferences, concerts and corporate gatherings."
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Drone",
      desc: "Aerial storytelling that adds scale and cinematic movement."
    }
  ];

  const spotlightImages = [
    img5,
    DroneSeries2,
    img3
  ];

  return (
    <div className="bg-neutral-950 text-white min-h-screen pt-24">
      {/* INTRO HERO */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-serif italic text-lg text-white">02</span>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
            About the Studio
          </span>
          <div className="h-px w-20 bg-white/10" />
        </div>

        <h1 className="text-4xl md:text-7xl font-medium tracking-tight mb-16 leading-[1.1] max-w-5xl">
          We create visual stories that feel{" "}
          <span className="italic font-serif text-neutral-500">polished, bold</span> and memorable.
        </h1>

        <div className="grid md:grid-cols-2 gap-12 text-lg font-light text-neutral-400 leading-relaxed border-t border-white/5 pt-16">
          <div className="space-y-6">
            <p className="text-xl text-white">
              Timeless Motion Production combines cinematic craftsmanship with smart digital strategy to deliver visuals that move people.
            </p>
            <p>
              Timeless Motion Production is a full-service creative studio specializing in cinematic video, photography and digital storytelling. Our team blends technical skill with creative vision to produce work that engages audiences.
            </p>
          </div>
          <div>
            <p className="mb-6">
              We handle end-to-end production: pre-production, shooting, post, distribution and digital strategy across photography, drone, livestream and digital campaigns.
            </p>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all rounded-full text-xs font-medium uppercase tracking-widest mt-4"
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-32 px-6 bg-neutral-900/20 border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-20">
            Our <span className="italic font-serif text-neutral-500">Approach</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {approach.map((item, idx) => (
              <div key={idx} className="space-y-4 border-l border-white/5 pl-6">
                <span className="font-serif italic text-neutral-500 text-lg block">{item.step}</span>
                <h4 className="text-lg font-medium text-white">{item.title}</h4>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-20">
            Creative <span className="italic font-serif text-neutral-500">Roles</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((t, idx) => (
              <div
                key={idx}
                className="p-8 border border-white/5 bg-white/[0.01] rounded-lg hover:border-white/10 hover:bg-white/[0.03] transition-all"
              >
                <h4 className="text-xl font-medium text-white mb-3">{t.role}</h4>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCES */}
      <section className="py-24 px-6 bg-neutral-900/30">
        <div className="container mx-auto max-w-4xl text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            What makes us <span className="italic font-serif text-neutral-500">different</span>
          </h2>
          <ul className="space-y-4 max-w-md mx-auto text-left font-light text-neutral-300">
            {coreDifferentiators.map((diff, idx) => (
              <li key={idx} className="flex items-start gap-4 text-base">
                <span className="text-neutral-500 text-lg mt-0.5">•</span>
                <span>{diff}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PORTFOLIO SPOTLIGHT */}
      <section className="py-32 px-6 border-b border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20 text-center space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 block">
              Portfolio Spotlight Page
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
              Selected stories from our <span className="italic font-serif text-neutral-500">recent productions</span>
            </h2>
            <p className="text-neutral-400 font-light max-w-xl mx-auto text-sm">
              Projects that blend cinematic craft and digital impact. A selection of recent work across photography, drone, livestream and creative campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {spotlightImages.map((imgUrl, idx) => (
              <div key={idx} className="aspect-[4/5] bg-neutral-900 overflow-hidden rounded-md relative group">
                <img
                  src={imgUrl}
                  alt={`Spotlight showcase ${idx}`}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFT SECTION */}
      <section className="py-32 px-6 text-center">
        <div className="container mx-auto max-w-4xl space-y-16">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              The craft behind each project
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
              A commitment to <span className="italic font-serif text-neutral-500">high standards</span>
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              We combine strong visual direction, technical execution and polished post-production so every project feels intentional and elevated.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {crafts.map((craft, idx) => (
              <div key={idx} className="space-y-4 p-6 border border-white/5 rounded-md">
                <div className="text-neutral-400">{craft.icon}</div>
                <h4 className="text-lg font-medium">{craft.title}</h4>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">{craft.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-all rounded-full text-xs font-medium uppercase tracking-widest mt-8"
          >
            <MessageSquare size={16} />
            Book a project review
          </button>
        </div>
      </section>
    </div>
  );
}
