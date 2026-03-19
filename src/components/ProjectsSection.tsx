import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AgroShop – Agriculture E-Commerce Platform",
    description:
      "A fully functional agriculture-focused e-commerce platform that enables farmers to purchase fertilizers, pesticides, and herbicides with ease. Includes product details, cart management, and SMS/email notifications after order placement.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "PHP", "MySQL"],
    features: [
      "Product catalog with detailed descriptions",
      "Cart & order management system",
      "SMS & Email notifications",
      "Integrated agriculture resources",
      "Responsive user interface"
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Generated Image Detection System",
    description:
      "An AI/ML-based system that detects whether an uploaded image is real or AI-generated using a Convolutional Neural Network (CNN) model.",
    tech: ["Python", "TensorFlow/Keras", "CNN", "AI/ML"],
    features: [
      "Image upload interface",
      "Real vs Fake classification",
      "Deep learning model integration",
      "Data preprocessing pipeline",
      "Prediction result display"
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "Civic Issues Reporting & Resolution Platform",
    description:
      "A civic issue management system consisting of a React Native mobile app for citizens and a MERN stack web dashboard for administrators to track, manage, and resolve reported issues efficiently.",
    tech: ["React Native", "React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Issue upload with image & location",
      "Real-time status tracking",
      "Admin & employee dashboard",
      "Issue status updates",
      "User notification system"
    ],
    github: "#",
    demo: "#",
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
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-sm px-3 py-2 rounded bg-primary/10 text-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3 mb-8 mt-auto">
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
              <div className="flex items-center gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={18} /> Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-primary hover:text-accent transition-colors"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;