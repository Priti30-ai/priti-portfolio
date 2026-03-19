import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Download, Mail } from "lucide-react";
import profile from "@/assets/profile.jpeg";

const socials = [
  { icon: Github, href: "https://github.com/Priti30-ai", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ahire-priti", label: "LinkedIn" },
  { icon: ExternalLink, href: "https://leetcode.com/Priti_30", label: "LeetCode" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">

      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container-narrow relative z-10">

        {/* MAIN FLEX CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
        >

          {/* LEFT SIDE - TEXT */}
          <div className="text-center lg:text-left max-w-2xl">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base font-mono text-primary mb-4 tracking-widest uppercase"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight"
            >
              <span className="gradient-text">Priti Ahire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-4"
            >
              Passionate about AI, ML & Data Science · MERN Stack Developer · Exploring Cloud Technologies
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-lg text-muted-foreground/70 mb-10"
            >
              I build scalable web applications using MERN and explore AI/ML & Data Science to develop intelligent, real-world solutions. Continuously learning and growing in Cloud technologies and modern software development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                className="gradient-bg text-primary-foreground px-8 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
              >
                View Projects
              </a>

              <a
                href="/Priti Ahire Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-8 py-3 rounded-lg text-lg font-medium text-foreground hover:bg-secondary transition-all duration-200 flex items-center gap-2"
              >
                <Download size={20} />
                View Resume
              </a>

              <a
                href="#contact"
                className="border border-border px-8 py-3 rounded-lg text-lg font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-200 flex items-center gap-2"
              >
                <Mail size={20} />
                Contact
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center lg:justify-start gap-6"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 p-2"
                >
                  <Icon size={24} />
                </a>
              ))}
            </motion.div>

          </div>

          {/* RIGHT SIDE - PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 sm:w-72 lg:w-80">

              {/* Glow background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary to-accent blur-2xl opacity-30"></div>

              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl">
                <img
                  src={profile}
                  alt="Priti"
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </motion.div>

        </motion.div>

        {/* Scroll Indicator OUTSIDE flex container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;