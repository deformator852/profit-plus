import { motion } from "framer-motion";

const techStack = ["HTML", "CSS ", "Lovable"];

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
                This website was created for a crypto signals Telegram group. It
                features a fully responsive layout, ensuring it looks great on
                all devices.
              </p>
              <p>
                The reviews section is built with custom content types, allowing
                the site admin to easily manage and update content.
              </p>
              <p>
                The site supports multiple languages, including Russian,
                English, and Hebrew, and all content can be easily edited
                through the admin panel.
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
              <p className="text-muted-foreground">1 day (December 2025)</p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                My Role
              </h3>
              <p className="text-muted-foreground">Website developer</p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Links
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://profitplus-signals.vip/"
                  className="text-primary hover:underline font-medium"
                >
                  Live → profitplus-signals.vip
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
