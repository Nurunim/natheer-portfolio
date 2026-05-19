import React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { GrainOverlay, CursorDot, StickyNav, PosterRule, ThinRule, OrnamentalDivider, Reveal } from "../components/Editorial";

const Hero = () => {
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 700], [0, 60]);
  const photoScale = useTransform(scrollY, [0, 700], [1, 1.06]);

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] overflow-hidden bg-background flex flex-col items-center justify-center px-4"
    >
      {/* Corner brackets */}
      <motion.div
        className="absolute top-8 left-8 w-12 h-12 border-t-[2px] border-l-[2px] border-primary"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />
      <motion.div
        className="absolute top-8 right-8 w-12 h-12 border-t-[2px] border-r-[2px] border-border"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-12 h-12 border-b-[2px] border-l-[2px] border-border"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-12 h-12 border-b-[2px] border-r-[2px] border-primary"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />

      {/* Left edge rotated label */}
      <motion.div
        className="absolute left-5 top-1/2 -translate-y-1/2 hidden md:block"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.7, ease: "easeOut" }}
      >
        <span className="section-label-rotated">PORTFOLIO — 2026</span>
      </motion.div>
      <motion.div
        className="absolute right-5 top-1/2 -translate-y-1/2 hidden md:block"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.7, ease: "easeOut" }}
      >
        <span className="section-label-rotated">BAGHDAD · IRAQ</span>
      </motion.div>

      {/* TOP LINE — "NADHEER" slides in from left */}
      <div className="w-full max-w-5xl flex justify-center overflow-hidden mb-4 md:mb-6">
        <motion.h1
          className="font-bebas text-foreground tracking-[0.18em] leading-none text-center"
          style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
          initial={{ x: "-110%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          NADHEER
        </motion.h1>
      </div>

      {/* CENTER — photo */}
      <motion.div
        className="relative"
        style={{ width: "min(58vw, 380px)", height: "min(74vw, 490px)" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Thin olive frame offset behind */}
        <div
          className="absolute border border-primary"
          style={{ inset: "-10px", opacity: 0.4 }}
        />
        <motion.img
          src="/nadheer-photo.png"
          alt="Nadheer Waleed Jasim"
          className="w-full h-full object-cover object-top relative z-10"
          style={{
            filter: "contrast(1.1) brightness(1.1)",
            y: photoY,
            scale: photoScale,
          }}
        />
      </motion.div>

      {/* BOTTOM LINE — "WALEED JASIM" slides in from right */}
      <div className="w-full max-w-5xl flex justify-center overflow-hidden mt-4 md:mt-6">
        <motion.h1
          className="font-bebas text-foreground tracking-[0.18em] leading-none text-center"
          style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
          initial={{ x: "110%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          WALEED JASIM
        </motion.h1>
      </div>

      {/* Animated rule */}
      <motion.div
        className="w-full max-w-2xl h-[2px] bg-primary origin-center mt-8 mb-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Subtitle + contact */}
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.7, ease: "easeOut" }}
      >
        <div className="font-teko text-secondary tracking-[0.35em] text-base md:text-lg uppercase">
          Cybersecurity Engineer&nbsp;&nbsp;✦&nbsp;&nbsp;Baghdad, Iraq
        </div>
        <div className="font-cormorant italic text-foreground opacity-50 text-sm tracking-wide">
          +9647700155986 &nbsp;|&nbsp; natheerwaleed1f@gmail.com
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-primary opacity-50"
        />
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <AnimatePresence>
      <div className="min-h-screen relative overflow-x-hidden text-foreground">
        <GrainOverlay />
        <CursorDot />
        <StickyNav />

        <main className="mx-auto w-full">
          <Hero />

          {/* PROFILE SECTION */}
          <section id="profile" className="bg-background pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8">
                  <span className="font-bebas text-4xl text-secondary tracking-widest">— 01 —</span>
                </div>
              </Reveal>

              <div className="flex flex-col md:flex-row mt-8 gap-0">
                <Reveal delay={0.2} className="w-full md:w-[60%] pr-0 md:pr-16 md:border-r border-border">
                  <div className="hidden md:block">
                    <span className="section-label-rotated float-left mr-6 mt-1 opacity-50">PROFILE</span>
                  </div>
                  <p className="font-cormorant text-lg leading-[1.9] text-foreground mb-10">
                    Nadheer Waleed Jasim is a cybersecurity engineer and software developer based in Baghdad, Iraq. With deep expertise spanning offensive and defensive security, software engineering, and technical strategy, he has built and led complex systems from vulnerability research to large-scale network defense. He brings precision, creativity, and discipline to every project — from custom tooling to cutting-edge security operations.
                  </p>
                  <p className="font-fell italic text-2xl md:text-3xl text-highlight leading-relaxed">
                    "Precision. Creativity. Discipline."
                  </p>
                </Reveal>

                <Reveal delay={0.35} className="w-full md:w-[40%] mt-12 md:mt-0 md:pl-16">
                  <div className="space-y-8">
                    {[
                      { label: "LOCATION", value: "Baghdad, Iraq" },
                      { label: "ROLE", value: "Cybersecurity Engineer" },
                      { label: "EMAIL", value: "natheerwaleed1f@gmail.com" },
                      { label: "PHONE", value: "+9647700155986" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                        className="pl-5 border-l-[2px] border-primary"
                      >
                        <div className="font-teko text-primary tracking-[0.2em] text-xs mb-1 uppercase">{item.label}</div>
                        <div className="font-cormorant text-foreground text-xl">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* EXPERTISE SECTION */}
          <section id="expertise" className="bg-alt pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8">
                  <span className="font-bebas text-4xl text-secondary tracking-widest">— 02 —</span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 mt-8">
                {[
                  {
                    title: "OFFENSIVE & DEFENSIVE",
                    items: ["Penetration Testing", "Vulnerability Research", "Malware Analysis", "CTF Competition", "Threat Mitigation", "Network Defense"],
                    delay: 0.1,
                  },
                  {
                    title: "SOFTWARE ENGINEERING",
                    items: ["Full-Stack Development", "System Architecture", "API Design", "Database Engineering", "Workflow Automation"],
                    delay: 0.25,
                  },
                  {
                    title: "STRATEGY",
                    items: ["Security Assessment", "Technical Leadership", "Research & Development", "Tool Development", "Process Engineering"],
                    delay: 0.4,
                  },
                ].map((col, colIdx) => (
                  <Reveal
                    key={col.title}
                    delay={col.delay}
                    className={`${colIdx < 2 ? "md:pr-12 md:border-r border-border" : "md:pl-0"} ${colIdx > 0 ? "md:pl-12" : ""}`}
                  >
                    <h3 className="font-bebas text-2xl tracking-widest text-foreground mb-8 pb-4 border-b border-border">
                      {col.title}
                    </h3>
                    <ul className="space-y-4">
                      {col.items.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: col.delay + 0.05 * i, duration: 0.5, ease: "easeOut" }}
                          className="font-cormorant text-xl text-foreground flex items-center gap-3"
                        >
                          <span className="text-primary text-xs">✦</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* WORKS SECTION */}
          <section id="works" className="bg-background pt-24 pb-32">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8">
                  <span className="font-bebas text-4xl text-secondary tracking-widest">— 03 —</span>
                </div>
              </Reveal>

              <div className="mt-8 flex flex-col">
                {[
                  { id: "01", name: "MIRAI", desc: "Advanced botnet reverse engineering and analysis project studying IoT exploit chains and network propagation mechanics" },
                  { id: "02", name: "PRINT WORKFLOW MANAGER", desc: "Enterprise print management system streamlining production workflows for commercial printing operations" },
                  { id: "03", name: "SECURITY & AUTOMATION TOOLING", desc: "Bespoke security tools and automation scripts built for real-world offensive and defensive operations" },
                  { id: "04", name: "ECO-IRAQ", desc: "Environmental data platform for Iraq, aggregating ecological metrics and enabling data-driven environmental policy" },
                  { id: "05", name: "ADVANCED VULNERABILITY RESEARCH", desc: "Systematic research into novel attack vectors, CVE documentation, and responsible disclosure" },
                  { id: "06", name: "NETWORK DEFENSE SIMULATION", desc: "Large-scale network hardening and threat response frameworks deployed in production environments" },
                ].map((project, idx) => (
                  <React.Fragment key={project.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: 0.05 * idx, duration: 0.65, ease: "easeOut" }}
                      whileHover={{ x: 6 }}
                      className="relative py-10 pl-6 md:pl-10 group cursor-none"
                      style={{ borderLeft: "3px solid #3A3A2E", transition: "border-color 0.3s" }}
                      onMouseEnter={e => (e.currentTarget.style.borderLeftColor = "#D4B896")}
                      onMouseLeave={e => (e.currentTarget.style.borderLeftColor = "#3A3A2E")}
                    >
                      <span className="absolute top-2 right-2 md:right-6 font-bebas text-[8rem] md:text-[11rem] leading-none opacity-[0.04] text-foreground pointer-events-none select-none">
                        {project.id}
                      </span>
                      <div className="font-teko text-primary text-xs tracking-[0.3em] mb-3 uppercase">{project.id}</div>
                      <h4 className="font-bebas text-3xl md:text-5xl text-foreground mb-3 leading-tight">
                        {project.name}
                      </h4>
                      <p className="font-cormorant text-secondary text-lg max-w-2xl leading-relaxed">
                        {project.desc}
                      </p>
                    </motion.div>
                    <ThinRule />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* CREDENTIALS SECTION */}
          <section id="credentials" className="bg-alt pt-24 pb-32">
            <div className="max-w-5xl mx-auto px-8 md:px-16">
              <Reveal>
                <PosterRule />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="text-center py-8 mb-8">
                  <span className="font-bebas text-4xl text-secondary tracking-widest">— 04 —</span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {[
                  { title: "6TH / 71 TEAMS", sub: "CTF COMPETITION", span: 2 },
                  { title: "78TH / 1,014 TEAMS", sub: "INTERNATIONAL CTF", span: 1 },
                  { title: "8TH PLACE — MINISTRY CTF", sub: "MINISTRY OF INTERIOR COMPETITION", span: 1 },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.6, ease: "easeOut" }}
                    className={`border-[3px] border-primary bg-[#12120C] p-8 ${item.span === 2 ? "md:col-span-2" : ""}`}
                  >
                    <h4 className={`font-bebas text-foreground mb-2 ${item.span === 2 ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"}`}>
                      {item.title}
                    </h4>
                    <div className="font-teko text-primary tracking-[0.2em] text-base">{item.sub}</div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
                {["AWS CERTIFIED", "CISCO CERTIFIED", "CEH — ETHICAL HACKER"].map((cert, i) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                    className="border-[2px] border-border bg-background p-6 text-center"
                  >
                    <h5 className="font-bebas text-xl text-foreground tracking-wider">{cert}</h5>
                  </motion.div>
                ))}
              </div>

              <Reveal delay={0.6}>
                <div className="border-[3px] border-primary bg-[#12120C] p-7 text-center">
                  <div className="font-teko text-primary text-xs tracking-[0.3em] mb-2 uppercase">Event</div>
                  <h4 className="font-bebas text-3xl md:text-4xl text-foreground tracking-wide">
                    HOST — AI DEVFEST 2026, AL-FARABI UNIVERSITY
                  </h4>
                </div>
              </Reveal>
            </div>
          </section>
        </main>

        <footer className="bg-background border-t border-border pt-14 pb-20">
          <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center gap-5">
            <OrnamentalDivider />
            <div className="font-bebas text-2xl tracking-[0.3em] text-foreground mt-2">
              NADHEER WALEED JASIM
            </div>
            <div className="font-teko uppercase tracking-[0.3em] text-primary text-sm">
              BAGHDAD — 2026
            </div>
            <div className="font-teko tracking-[0.15em] text-foreground opacity-40 text-sm">
              natheerwaleed1f@gmail.com | +9647700155986
            </div>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
};

export default Portfolio;
