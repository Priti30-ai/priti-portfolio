import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate successful submission
    setShowSuccess(true);

    // Clear the form
    setForm({ name: "", email: "", message: "" });

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Interested in working together or have a question? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5 relative"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all flex items-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>

            {/* Success message */}
            {showSuccess && (
              <div className="absolute top-0 right-0 mt-2 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg shadow-lg transition-all">
                ✅ Your message has been sent successfully!
              </div>
            )}
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Get in touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:ahirepritiii@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={18} className="text-primary" />
                  <span className="text-sm">ahirepritiii@gmail.com</span>
                </a>
                <a
                  href="https://github.com/Priti30-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={18} className="text-primary" />
                  <span className="text-sm">github.com/Priti30-ai</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ahire-priti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={18} className="text-primary" />
                  <span className="text-sm">linkedin.com/in/priti</span>
                </a>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">Open to opportunities</h3>
              <p className="text-sm text-muted-foreground">
                I’m actively exploring modern technologies and building my career with curiosity, consistency, and passion. Excited to grow through meaningful opportunities and create impactful solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;