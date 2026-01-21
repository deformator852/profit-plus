import { motion } from "framer-motion";
import section2Image from "@/assets/section2.webp";
import section3Image from "@/assets/section3.webp";

const images = [
  {
    src: section2Image,
    alt: "Section 2",
    caption: "Client's feedback section",
    span: "lg:col-span-2",
  },
  {
    src: section3Image,
    alt: "Section 3",
    caption: "Pricing section",
    span: "lg:col-span-2",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Project Gallery
          </h2>
          <p className="text-muted-foreground">
            Visual walkthrough of key screens and features.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`image-card group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary-foreground font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
