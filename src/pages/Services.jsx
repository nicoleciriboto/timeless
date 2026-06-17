import React from "react";
import { Helmet } from "react-helmet-async";
import { Camera, Video, Compass, Radio, Smartphone, Layers, CheckCircle2 } from "lucide-react";

export default function Services({ onContactClick }) {
  const serviceList = [
    {
      icon: <Camera className="w-8 h-8 text-neutral-400 group-hover:text-black transition-colors" />,
      title: "Photography",
      desc: "High-end campaign photography for product launches, portraits and editorial visuals. Includes lighting, composition and retouching for flawless imagery."
    },
    {
      icon: <Video className="w-8 h-8 text-neutral-400 group-hover:text-black transition-colors" />,
      title: "Videography",
      desc: "Cinematic storytelling for commercials, brand films and event coverage. We manage shooting, directing and post-production to shape your message, including optimized TikTok reels."
    },
    {
      icon: <Compass className="w-8 h-8 text-neutral-400 group-hover:text-black transition-colors" />,
      title: "Drone Shots",
      desc: "Licensed aerial filming for real estate, tourism and corporate storytelling. Smooth cinematic movement and editorial-grade capture."
    },
    {
      icon: <Radio className="w-8 h-8 text-neutral-400 group-hover:text-black transition-colors" />,
      title: "Livestreaming",
      desc: "Professional live broadcast production with multi-camera switching, high-quality audio and seamless platform distribution."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-neutral-400 group-hover:text-black transition-colors" />,
      title: "Social Media",
      desc: "Engagement-first video packages for reels, shorts and ads. Content created to perform on social platforms with strong visual impact."
    },
    {
      icon: <Layers className="w-8 h-8 text-neutral-400 group-hover:text-black transition-colors" />,
      title: "Web & Apps",
      desc: "Digital experiences built for conversion and brand expression, including landing pages, product sites and mobile-ready interfaces."
    }
  ];

  const workflow = [
    {
      num: "01",
      title: "Discovery",
      desc: "We define goals, target audience and visual direction so every asset supports your campaign."
    },
    {
      num: "02",
      title: "Production",
      desc: "We shoot with premium gear, precise lighting and experienced crews to capture every moment."
    },
    {
      num: "03",
      title: "Post",
      desc: "We polish footage with editing, color grading and motion design for a premium final result."
    },
    {
      num: "04",
      title: "Delivery",
      desc: "We hand over fast, optimized assets ready for social, web and event deployment."
    }
  ];

  const deliverables = [
    "Strategic creative direction that aligns with your business goals.",
    "Professional production for photo, video, and aerial content.",
    "Ready-to-publish assets for social, web and events."
  ];

  return (
    <div className="bg-neutral-950 text-white min-h-screen pt-24">
      <Helmet>
        <title>Our Services | Photography, Video &amp; Drone in Zimbabwe | Timeless Motion</title>
        <meta name="description" content="Professional photography, videography, drone filming, livestreaming, social media content and web services in Zimbabwe. Book Timeless Motion Production for your next project." />
        <link rel="canonical" href="https://www.timelessmotionproduction.co.zw/services" />
        <meta property="og:title" content="Our Services | Photography, Video &amp; Drone in Zimbabwe" />
        <meta property="og:description" content="Photography, videography, drone, livestreaming and social content services in Zimbabwe. Book Timeless Motion Production today." />
        <meta property="og:url" content="https://www.timelessmotionproduction.co.zw/services" />
      </Helmet>
      {/* HEADER */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-xs font-mono tracking-widest uppercase text-neutral-500">
          Services
        </div>
        <h1 className="text-4xl md:text-7xl font-medium tracking-tight leading-[1.1] text-white">
          Professional production services built for{" "}
          <span className="italic font-serif text-neutral-500">premium brands.</span>
        </h1>
        <p className="text-neutral-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Photography, video, drone, livestream and digital content solutions delivered with clarity, polish and speed.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <button
            onClick={onContactClick}
            className="px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-all rounded-full text-xs font-semibold uppercase tracking-widest"
          >
            Book a consultation
          </button>
          <a
            href="/about"
            className="px-8 py-4 bg-transparent border border-white/10 hover:border-white hover:bg-white/5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all"
          >
            View recent work
          </a>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-neutral-900/10 border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, idx) => (
              <div
                key={idx}
                className="group p-8 border border-white/5 bg-white/[0.01] hover:bg-white hover:text-black hover:border-white rounded-lg transition-all duration-500"
              >
                <div className="mb-8 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-black group-hover:bg-black/5 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-medium mb-4 tracking-tight group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 font-light text-sm leading-relaxed group-hover:text-neutral-700 transition-colors">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-20 text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Workflow
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
              How we <span className="italic font-serif text-neutral-500">work</span>
            </h2>
            <p className="text-neutral-400 font-light max-w-md mx-auto text-sm">
              Efficient production, clear communication, polished delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((flow) => (
              <div key={flow.num} className="space-y-4 border-t border-white/10 pt-6">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block">
                  Step {flow.num}
                </span>
                <h4 className="text-xl font-medium text-white">{flow.title}</h4>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">{flow.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-24 px-6 bg-neutral-900/30 border-t border-white/5">
        <div className="container mx-auto max-w-3xl text-center space-y-12">
          <h2 className="text-3xl font-medium tracking-tight">
            Our commitment to <span className="italic font-serif text-neutral-500">your brand</span>
          </h2>
          <div className="space-y-4 max-w-md mx-auto text-left font-light text-neutral-300">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-neutral-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <button
            onClick={onContactClick}
            className="px-8 py-4 bg-white text-black hover:bg-neutral-200 rounded-full text-xs font-semibold uppercase tracking-widest transition-all mt-4"
          >
            Book a consultation
          </button>
        </div>
      </section>
    </div>
  );
}
