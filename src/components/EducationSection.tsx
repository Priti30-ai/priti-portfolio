import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    title: "Diploma in Computer Technology",
    subtitle: "Government Polytechnic, Nashik",
    description:
      "Built strong technical foundations in programming, data structures, and system fundamentals.",
  },
  {
    title: "Internship – Python, Data Science & AI/ML",
    subtitle: "Sumago Infotech Pvt. Ltd., Nashik",
    description:
      "Worked on real-world machine learning projects, data preprocessing, model building, and analytics workflows.",
  },
  {
    title: "B.E. in Information Technology (Direct Second Year)",
    subtitle: "Dr. D.Y. Patil Institute of Technology, Pimpri, Pune",
    description:
      "Currently pursuing engineering with focus on scalable systems, AI integration, and modern web technologies.",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      
      {/* Main Container (NO text-center here) */}
      <div className="container-narrow mx-auto">
        
        {/* Section Heading - LEFT ALIGNED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <p className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">
            Education
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold font-display leading-tight">
            Academic Journey.
            <br />
            <span className="gradient-text">
              Professional Experience.
            </span>
          </h2>
        </motion.div>

        {/* Cards Section */}
        <div className="space-y-10">
          {timeline.map(({ title, subtitle, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass rounded-xl p-8 hover:glow transition-all duration-300"
            >
              {/* Card Content LEFT ALIGNED for professional look */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {title}
              </h3>

              <p className="text-primary text-base mb-3">
                {subtitle}
              </p>

              <p className="text-base text-muted-foreground max-w-2xl">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;