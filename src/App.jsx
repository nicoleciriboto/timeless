import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ContactDrawer from "./components/ContactDrawer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      {/* Cinematic entrance Preloader */}
      <Preloader />

      <div className="relative min-h-screen bg-neutral-950 text-neutral-200">
        {/* Navigation Bar */}
        <Navbar onContactClick={() => setDrawerOpen(true)} />

        {/* Page Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home onContactClick={() => setDrawerOpen(true)} />} />
            <Route path="/about" element={<About onContactClick={() => setDrawerOpen(true)} />} />
            <Route path="/services" element={<Services onContactClick={() => setDrawerOpen(true)} />} />
          </Routes>
        </main>

        {/* Global Footer (Simple version mapping copyright, socials, sitemap) */}
        <footer className="bg-neutral-950 border-t border-white/5 py-12 px-6">
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-neutral-600 font-mono">
              <span>&copy; {new Date().getFullYear()} Timeless Motion Production</span>
              <span className="hidden sm:inline">|</span>
              <span>Zimbabwe &amp; Southern Africa</span>
            </div>
            
            <div className="flex items-center gap-6">
              {[
                { name: "TikTok",    href: "https://www.tiktok.com/@timelessmotionproduction" },
                { name: "Facebook",  href: "#" },
                { name: "Instagram", href: "#" },
              ].map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </footer>

        {/* Sliding Lead Consultation Drawer */}
        <ContactDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

        {/* Floating WhatsApp Live Chat Button */}
        <a
          href="https://wa.me/263784152659"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-6 right-6 z-[200] flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.7)] transition-all duration-300 hover:scale-110 group"
        >
          {/* Pulse ring */}
          <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-40 animate-ping" />
          {/* WhatsApp SVG icon */}
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white relative z-10" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 .5C7.439.5.5 7.439.5 16c0 2.777.726 5.484 2.105 7.875L.5 31.5l7.875-2.063A15.44 15.44 0 0 0 16 31.5C24.561 31.5 31.5 24.561 31.5 16S24.561.5 16 .5zm0 28.219a13.17 13.17 0 0 1-6.703-1.828l-.481-.285-4.672 1.223 1.246-4.547-.313-.5A13.135 13.135 0 0 1 2.857 16C2.857 8.746 8.746 2.857 16 2.857S29.143 8.746 29.143 16 23.254 28.719 16 28.719zm7.219-9.844c-.395-.198-2.34-1.154-2.703-1.285-.363-.133-.625-.199-.889.198-.264.395-1.022 1.285-1.252 1.549-.23.263-.461.297-.856.099-.395-.199-1.668-.615-3.178-1.96-1.174-1.047-1.967-2.34-2.197-2.734-.23-.395-.025-.609.173-.805.177-.177.395-.462.593-.692.198-.231.264-.396.396-.66.132-.264.066-.495-.033-.693-.099-.199-.889-2.143-1.219-2.934-.32-.769-.648-.664-.889-.676l-.757-.013c-.264 0-.692.099-1.055.495-.363.396-1.384 1.352-1.384 3.296 0 1.944 1.417 3.822 1.615 4.086.198.264 2.789 4.26 6.758 5.975.945.407 1.682.65 2.256.832.948.301 1.811.258 2.494.157.761-.114 2.34-.957 2.67-1.882.33-.924.33-1.717.231-1.882-.099-.165-.363-.264-.757-.462z"/>
          </svg>
        </a>
      </div>
    </Router>
  );
}

export default App;
