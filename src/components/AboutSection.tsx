import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Rocket, Target } from "lucide-react";

const highlights = [
  { 
    icon: Code2, 
    title: "Full-Stack MERN Development", 
    desc: "Designing scalable, responsive, and efficient web applications using MongoDB, Express, React, and Node.js." 
  },
  { 
    icon: Brain, 
    title: "AI/ML & Data Science", 
    desc: "Building intelligent systems using deep learning models and data-driven methodologies." 
  },
  { 
    icon: Rocket, 
    title: "Cloud & Deployment", 
    desc: "Exploring cloud platforms and modern deployment practices for production-ready applications." 
  },
  { 
    icon: Target, 
    title: "Analytical Problem Solving", 
    desc: "Strong logical thinking with a focus on solving real-world challenges efficiently." 
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-8 leading-tight">
            Innovating smart technologies. 
            <span className="gradient-text"> Exploring scalable vision.</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
            I am a passionate developer focused on building scalable web applications using the MERN stack 
            while actively exploring AI/ML and Data Science to create intelligent, data-driven solutions. 
            I enjoy transforming complex ideas into efficient, real-world applications and continuously 
            expanding my expertise in Cloud technologies and modern software architecture. 
            My goal is to grow as a versatile engineer who bridges full-stack development with intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass rounded-xl p-8 hover:glow transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon size={26} className="text-primary-foreground" />
              </div>

              <h3 className="font-semibold text-foreground mb-3 text-xl">
                {title}
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;