import { motion } from "framer-motion";
import positionOpenedImage from "@/assets/position-open.webp";
import positionDCAImage from "@/assets/position-dca.webp";
import positionClosedImage from "@/assets/position-closed.webp";
import telegramWebAppImage from "@/assets/telegram-web-app.webp";

const images = [
  {
    src: telegramWebAppImage,
    alt: "Telegram Web App",
    caption: "Web app for viewing signals",
    span: "lg:col-span-2",
  },
  {
    src: positionOpenedImage,
    alt: "Position Opened",
    caption: "Position opened",
    span: "lg:col-span-2",
  },
  {
    src: positionDCAImage,
    alt: "Position DCA Executed",
    caption: "Position dca executed",
    span: "lg:col-span-2",
  },
  {
    src: positionClosedImage,
    alt: "Position Closed",
    caption: "Position closed",
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
