import { motion } from "framer-motion";

const techStack = ["n8n", "Node.js", "Telegram Bot API", "Vercel", "React"];

const DetailsSection = () => {
  return (
    <section id="details" className="py-16 md:py-24 bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Project Description
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This project is an automation pipeline and Telegram Web App
                designed for a crypto signals Telegram group.
              </p>
              <p>
                It listens for TradingView messages containing trading signals
                and automatically forwards them to Telegram.
              </p>
              <p>
                Position opening data is stored and later displayed when
                averaging occurs. The project also includes a website that
                presents detailed information about opened positions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Timeline
              </h3>
              <p className="text-muted-foreground">1 week (December 2025)</p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                My Role
              </h3>
              <p className="text-muted-foreground">Automation Engineer</p>
            </div>

            {/* <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Links
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-primary hover:underline font-medium"
                >
                  Live Demo →
                </a>
                <a
                  href="#"
                  className="text-primary hover:underline font-medium"
                >
                  GitHub →
                </a>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
