import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Database, Brain, Cloud } from "lucide-react";

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["React", "HTML", "Tailwind CSS", "JavaScript", "TypeScript","Bootstrap"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "Java","PHP", "Next.js", "Python"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MongoDB", "MySQL", "Supabase", "Firebase", "PostgreSQL"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    skills: ["Python", "Scikit-learn", "ML Integration", "Data Analysis"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["MongoDB Atlas", "Vercel", "Render", "Netlify","Git", "GitHub"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-12">
            My <span className="gradient-text">tech stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {categories.map(({ icon: Icon, title, skills }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass rounded-xl p-8 hover:glow transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-mono px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
