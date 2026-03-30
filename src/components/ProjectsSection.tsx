import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AgroShop – Agriculture E-Commerce Platform",
    description:
      "A fully functional agriculture-focused e-commerce platform that enables farmers to purchase fertilizers, pesticides, and herbicides with ease.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "MySQL"],
    features: [
      "Product catalog",
      "Cart & order management",
      "SMS & Email notifications",
      "Agriculture resources",
      "Responsive UI"
    ],
    github: "https://github.com/Priti30-ai/Agrishop",
    demo: "", // no demo yet
  },
  {
    title: "AI Generated Image Detection System",
    description:
      "AI/ML system to detect whether an image is real or AI-generated using CNN.",
    tech: ["Python", "TensorFlow/Keras", "CNN", "AI/ML"],
    features: [
      "Image upload",
      "Real vs Fake classification",
      "Deep learning model",
      "Prediction display"
    ],
    github: "", // add later
    demo: "",
  },
  {
    title: "Civic Issues Reporting Platform",
    description:
      "MERN + React Native system for reporting and managing civic issues.",
    tech: ["React Native", "React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Issue upload with location",
      "Real-time tracking",
      "Admin dashboard",
      "Notifications"
    ],
    github: "",
    demo: "",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-12">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass rounded-xl p-8 hover:glow transition-all duration-300 group flex flex-col hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1 rounded bg-primary/10 text-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition"
                  >
                    <Github size={18} /> Code
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-accent transition"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;