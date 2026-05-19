import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GrainOverlay, CursorDot, StickyNav, PosterRule, ThinRule, OrnamentalDivider, Reveal } from "../components/Editorial";

const Portfolio = () => {
  return (
    <AnimatePresence>
      <div className="min-h-screen relative overflow-x-hidden selection:bg-secondary selection:text-background text-foreground">
        <GrainOverlay />
        <CursorDot />
        <StickyNav />

        <main className="mx-auto w-full">
          {/* HERO SECTION */}
          <section id="hero" className="min-h-[100vh] bg-background relative flex flex-col items-center justify-center p-6 pb-20">
            <motion.div 
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block"
            >
              <span className="section-label-rotated">PORTFOLIO — 2026</span>
            </motion.div>
            
            <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block">
              <span className="section-label-rotated">BAGHDAD · IRAQ</span>
            </div>
            
            {/* Geometric bracket decoration */}
            <div className="absolute top-6 left-6 w-16 h-16 border-t-[3px] border-l-[3px] border-primary" />
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0 }}
              className="relative w-[70vw] md:w-[320px] aspect-[320/420] border-[4px] border-primary mb-6"
            >
              <img 
                src="/nadheer-photo.png" 
                alt="Nadheer Waleed Jasim"
                className="w-full h-full object-cover filter sepia-[0.2] contrast-[1.1] grayscale-[0.15]"
              />
            </motion.div>
            
            <div className="w-[70vw] md:w-[320px] h-[1px] bg-secondary mb-12" />
            
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="font-bebas text-[12vw] md:text-[9vw] leading-[0.85] tracking-[0.3em] text-foreground mb-6">
                NADHEER<br/>WALEED JASIM
              </h1>
            </motion.div>
            
            <div className="w-full max-w-4xl mx-auto mb-8">
              <PosterRule />
            </div>
            
            <div className="text-center space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                className="font-teko text-xl md:text-2xl tracking-[0.3em] text-secondary"
              >
                CYBERSECURITY ENGINEER <span className="mx-2">✦</span> BAGHDAD, IRAQ
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
                className="font-cormorant italic text-sm md:text-base text-foreground"
              >
                +9647700155986 | natheerwaleed1f@gmail.com
              </motion.p>
            </div>
          </section>

          {/* PROFILE SECTION */}
          <section id="profile" className="bg-background pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-6">
              <PosterRule />
              <div className="text-center py-6">
                <span className="font-bebas text-4xl text-secondary">— 01 —</span>
              </div>
              
              <div className="flex flex-col md:flex-row mt-12">
                <div className="w-full md:w-[60%] flex gap-6 md:gap-12 relative">
                  <div className="hidden md:block">
                    <span className="section-label-rotated absolute top-0 -left-6">PROFILE</span>
                  </div>
                  <Reveal className="flex-1 pr-0 md:pr-12 border-r-0 md:border-r-[1px] border-primary">
                    <p className="font-cormorant text-lg md:text-[1.1rem] leading-[1.8] text-foreground mb-8">
                      Nadheer Waleed Jasim is a cybersecurity engineer and software developer based in Baghdad, Iraq. With deep expertise spanning offensive and defensive security, software engineering, and technical strategy, he has built and led complex systems from vulnerability research to large-scale network defense. He brings precision, creativity, and discipline to every project — from custom tooling to cutting-edge security operations.
                    </p>
                    <p className="font-fell italic text-2xl md:text-3xl text-highlight">
                      "Precision. Creativity. Discipline."
                    </p>
                  </Reveal>
                </div>
                
                <div className="w-full md:w-[40%] mt-12 md:mt-0 md:pl-12">
                  <Reveal delay={0.2} className="pl-6 border-l-[3px] border-primary space-y-6">
                    <div>
                      <div className="font-teko text-primary tracking-[0.2em] uppercase text-[15px] mb-1">LOCATION</div>
                      <div className="font-cormorant text-foreground text-xl">Baghdad, Iraq</div>
                    </div>
                    <div>
                      <div className="font-teko text-primary tracking-[0.2em] uppercase text-[15px] mb-1">ROLE</div>
                      <div className="font-cormorant text-foreground text-xl">Cybersecurity Engineer</div>
                    </div>
                    <div>
                      <div className="font-teko text-primary tracking-[0.2em] uppercase text-[15px] mb-1">EMAIL</div>
                      <div className="font-cormorant text-foreground text-xl">natheerwaleed1f@gmail.com</div>
                    </div>
                    <div>
                      <div className="font-teko text-primary tracking-[0.2em] uppercase text-[15px] mb-1">PHONE</div>
                      <div className="font-cormorant text-foreground text-xl">+9647700155986</div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERTISE SECTION */}
          <section id="expertise" className="bg-alt pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-6">
              <PosterRule />
              <div className="text-center py-6">
                <span className="font-bebas text-4xl text-secondary">— 02 —</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 mt-12 relative">
                <Reveal className="md:pr-8 md:border-r-[2px] border-primary">
                  <h3 className="font-bebas text-3xl md:text-[2rem] tracking-wide text-foreground mb-8">OFFENSIVE & DEFENSIVE</h3>
                  <ul className="space-y-3 font-cormorant text-xl text-foreground">
                    <li><span className="text-primary mr-3 text-sm">✦</span> Penetration Testing</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> Vulnerability Research</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> Malware Analysis</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> CTF Competition</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> Threat Mitigation</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> Network Defense</li>
                  </ul>
                </Reveal>
                
                <Reveal delay={0.2} className="md:px-8 md:border-r-[2px] border-primary">
                  <h3 className="font-bebas text-3xl md:text-[2rem] tracking-wide text-foreground mb-8">SOFTWARE ENGINEERING</h3>
                  <ul className="space-y-3 font-cormorant text-xl text-foreground">
                    <li><span className="text-primary mr-3 text-sm">✦</span> Full-Stack Development</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> System Architecture</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> API Design</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> Database Engineering</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> Workflow Automation</li>
                  </ul>
                </Reveal>
                
                <Reveal delay={0.4} className="md:pl-8">
                  <h3 className="font-bebas text-3xl md:text-[2rem] tracking-wide text-foreground mb-8">STRATEGY</h3>
                  <ul className="space-y-3 font-cormorant text-xl text-foreground">
                    <li><span className="text-primary mr-3 text-sm">✦</span> Security Assessment</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> Technical Leadership</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> Research & Development</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> Tool Development</li>
                    <li><span className="text-primary mr-3 text-sm">✦</span> Process Engineering</li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>

          {/* WORKS SECTION */}
          <section id="works" className="bg-background pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-6">
              <PosterRule />
              <div className="text-center py-6">
                <span className="font-bebas text-4xl text-secondary">— 03 —</span>
              </div>
              
              <div className="mt-12 flex flex-col">
                {[
                  { id: "01", name: "MIRAI", desc: "Advanced botnet reverse engineering and analysis project studying IoT exploit chains and network propagation mechanics" },
                  { id: "02", name: "PRINT WORKFLOW MANAGER", desc: "Enterprise print management system streamlining production workflows for commercial printing operations" },
                  { id: "03", name: "SECURITY & AUTOMATION TOOLING", desc: "Bespoke security tools and automation scripts built for real-world offensive and defensive operations" },
                  { id: "04", name: "ECO-IRAQ", desc: "Environmental data platform for Iraq, aggregating ecological metrics and enabling data-driven environmental policy" },
                  { id: "05", name: "ADVANCED VULNERABILITY RESEARCH", desc: "Systematic research into novel attack vectors, CVE documentation, and responsible disclosure" },
                  { id: "06", name: "NETWORK DEFENSE SIMULATION", desc: "Large-scale network hardening and threat response frameworks deployed in production environments" }
                ].map((project) => (
                  <React.Fragment key={project.id}>
                    <Reveal delay={0.1}>
                      <div className="relative py-12 pl-6 md:pl-12 border-l-[4px] border-border hover:border-highlight transition-colors duration-300 group cursor-none">
                        <span className="absolute top-0 right-4 font-bebas text-[10rem] md:text-[12rem] leading-none opacity-5 text-foreground pointer-events-none select-none -z-10">
                          {project.id}
                        </span>
                        <h4 className="font-bebas text-4xl md:text-[3.5rem] text-foreground mb-4 relative z-10">
                          {project.name}
                        </h4>
                        <p className="font-cormorant text-lg md:text-[1rem] text-secondary max-w-3xl relative z-10">
                          {project.desc}
                        </p>
                      </div>
                    </Reveal>
                    <ThinRule />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>

          {/* CREDENTIALS SECTION */}
          <section id="credentials" className="bg-alt pt-20 pb-32">
            <div className="max-w-5xl mx-auto px-6">
              <PosterRule />
              <div className="text-center py-6 mb-12">
                <span className="font-bebas text-4xl text-secondary">— 04 —</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Reveal className="border-[4px] border-primary bg-[#1A1A12] p-8 col-span-1 md:col-span-2">
                  <h4 className="font-bebas text-5xl md:text-6xl text-foreground mb-2">6TH / 71 TEAMS</h4>
                  <div className="font-teko text-primary tracking-[0.2em] text-xl">CTF COMPETITION</div>
                </Reveal>
                
                <Reveal delay={0.1} className="border-[4px] border-primary bg-[#1A1A12] p-8">
                  <h4 className="font-bebas text-4xl md:text-5xl text-foreground mb-2">78TH / 1,014 TEAMS</h4>
                  <div className="font-teko text-primary tracking-[0.2em] text-xl">INTERNATIONAL CTF</div>
                </Reveal>
                
                <Reveal delay={0.2} className="border-[4px] border-primary bg-[#1A1A12] p-8">
                  <h4 className="font-bebas text-4xl md:text-5xl text-foreground mb-2">8TH PLACE — MINISTRY CTF</h4>
                  <div className="font-teko text-primary tracking-[0.2em] text-xl">MINISTRY OF INTERIOR COMPETITION</div>
                </Reveal>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                {['AWS CERTIFIED', 'CISCO CERTIFIED', 'CEH — CERTIFIED ETHICAL HACKER'].map((cert, i) => (
                  <Reveal key={i} delay={0.3 + (i * 0.1)} className="border-[2px] border-primary bg-background p-6 text-center">
                    <h5 className="font-bebas text-2xl text-foreground">{cert}</h5>
                  </Reveal>
                ))}
              </div>
              
              <Reveal delay={0.6} className="border-[4px] border-primary bg-[#1A1A12] p-6 text-center">
                <h4 className="font-bebas text-3xl md:text-4xl text-foreground tracking-wide">
                  HOST — AI DEVFEST 2026, AL-FARABI UNIVERSITY
                </h4>
              </Reveal>
            </div>
          </section>

        </main>

        <footer className="bg-background border-t border-border pt-16 pb-24">
          <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6">
            <OrnamentalDivider />
            <div className="font-teko uppercase tracking-[0.3em] text-foreground text-lg md:text-xl mt-4">
              NADHEER WALEED JASIM — BAGHDAD — 2026
            </div>
            <div className="font-teko uppercase tracking-[0.2em] text-primary text-sm md:text-base">
              natheerwaleed1f@gmail.com | +9647700155986
            </div>
          </div>
        </footer>
      </div>
    </AnimatePresence>
  );
};

export default Portfolio;
