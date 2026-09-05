import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { images } from "@/data/images";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-start overflow-hidden bg-brand-charcoal pt-[76px] sm:pt-[90px] lg:min-h-[95vh] lg:pt-[100px]"
    >
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 bg-[#222825]">
        {/* Using responsive local downloaded images to perfectly fit every device */}
        <picture className="block h-full w-full">
          <source media="(max-width: 639px)" srcSet={images.hero.mobile} />
          <source media="(max-width: 1023px)" srcSet={images.hero.tablet} />
          <img
            src={images.hero.desktop}
            alt="Traditional Andhra Feast"
            fetchPriority="high"
            className="h-full w-full object-cover object-[65%_center] opacity-80 md:object-[80%_center] lg:object-right"
          />
        </picture>

        {/* Desktop Gradient Overlay - Hardcoded RGBA for maximum browser compatibility */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, rgba(34,40,37,1) 0%, rgba(12,46,31,0.85) 45%, rgba(34,40,37,0) 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: "linear-gradient(to top, rgba(34,40,37,0.7) 0%, rgba(34,40,37,0) 25%)",
          }}
        ></div>

        {/* Mobile Gradient Overlay */}
        <div
          className="absolute inset-0 block lg:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(34,40,37,0.85) 0%, rgba(12,46,31,0.6) 45%, rgba(34,40,37,0.95) 100%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-32">
        <div className="flex w-full flex-col items-start justify-center">
          {/* FULL WIDTH ORNAMENTAL ROW */}
          <motion.div
            className="mb-6 flex w-full items-center justify-center gap-2 sm:gap-4 lg:mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Left Repeating Elements */}
            <div className="flex flex-grow items-center justify-end gap-1.5 opacity-90 sm:gap-4 md:gap-6">
              <div className="h-[1px] w-full max-w-[80px] bg-gradient-to-r from-transparent via-brand-gold/60 to-brand-gold sm:max-w-[180px] md:max-w-[300px]"></div>
              <svg
                viewBox="0 0 24 24"
                className="hidden h-5 w-5 flex-shrink-0 text-brand-gold drop-shadow-sm sm:h-6 sm:w-6 md:block"
              >
                <path
                  d="M12 2 C12 2, 9 6, 9 9.5 C9 11.4, 10.3 12.5, 12 12.5 C13.7 12.5, 15 11.4, 15 9.5 C15 6, 12 2, 12 2 Z"
                  fill="#e8cd82"
                />
                <path d="M3 13 C3 18, 8 21, 12 21 C16 21, 21 18, 21 13 Z" fill="currentColor" />
                <path d="M3 13 L21 13" stroke="#222825" strokeWidth="1" />
              </svg>
              <span className="hidden h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-brand-gold/70 md:block"></span>
              <svg
                viewBox="0 0 24 24"
                className="hidden h-5 w-5 flex-shrink-0 text-brand-gold drop-shadow-sm sm:block sm:h-6 sm:w-6"
              >
                <path
                  d="M12 2 C12 2, 9 6, 9 9.5 C9 11.4, 10.3 12.5, 12 12.5 C13.7 12.5, 15 11.4, 15 9.5 C15 6, 12 2, 12 2 Z"
                  fill="#e8cd82"
                />
                <path d="M3 13 C3 18, 8 21, 12 21 C16 21, 21 18, 21 13 Z" fill="currentColor" />
                <path d="M3 13 L21 13" stroke="#222825" strokeWidth="1" />
              </svg>
              <span className="hidden h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-brand-gold/70 sm:block"></span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 flex-shrink-0 text-brand-gold drop-shadow-sm sm:h-6 sm:w-6"
              >
                <path
                  d="M12 2 C12 2, 9 6, 9 9.5 C9 11.4, 10.3 12.5, 12 12.5 C13.7 12.5, 15 11.4, 15 9.5 C15 6, 12 2, 12 2 Z"
                  fill="#e8cd82"
                />
                <path d="M3 13 C3 18, 8 21, 12 21 C16 21, 21 18, 21 13 Z" fill="currentColor" />
                <path d="M3 13 L21 13" stroke="#222825" strokeWidth="1" />
              </svg>
            </div>

            {/* Center Namam */}
            <div className="relative mx-2 flex flex-shrink-0 items-center justify-center sm:mx-6">
              <svg viewBox="0 0 50 50" className="h-12 w-12 drop-shadow-lg sm:h-16 sm:w-16">
                <path d="M10 42 L40 42 L38 48 L12 48 Z" fill="#c5a059" />
                <path
                  d="M14 8 L14 30 C14 43, 36 43, 36 30 L36 8 L29 8 L29 30 C29 36, 21 36, 21 30 L21 8 Z"
                  fill="#fdfbf7"
                />
                <path d="M16 35 C 25 45, 25 45, 34 35 L 25 47 Z" fill="#fdfbf7" />
                <path
                  d="M23 12 L27 12 L27 34 C 27 37, 25 39, 25 41 C 25 39, 23 37, 23 34 Z"
                  fill="#d32f2f"
                />
              </svg>
            </div>

            {/* Right Repeating Elements */}
            <div className="flex flex-grow items-center justify-start gap-1.5 opacity-90 sm:gap-4 md:gap-6">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 flex-shrink-0 text-brand-gold drop-shadow-sm sm:h-6 sm:w-6"
              >
                <path
                  d="M12 2 C12 2, 9 6, 9 9.5 C9 11.4, 10.3 12.5, 12 12.5 C13.7 12.5, 15 11.4, 15 9.5 C15 6, 12 2, 12 2 Z"
                  fill="#e8cd82"
                />
                <path d="M3 13 C3 18, 8 21, 12 21 C16 21, 21 18, 21 13 Z" fill="currentColor" />
                <path d="M3 13 L21 13" stroke="#222825" strokeWidth="1" />
              </svg>
              <span className="hidden h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-brand-gold/70 sm:block"></span>
              <svg
                viewBox="0 0 24 24"
                className="hidden h-5 w-5 flex-shrink-0 text-brand-gold drop-shadow-sm sm:block sm:h-6 sm:w-6"
              >
                <path
                  d="M12 2 C12 2, 9 6, 9 9.5 C9 11.4, 10.3 12.5, 12 12.5 C13.7 12.5, 15 11.4, 15 9.5 C15 6, 12 2, 12 2 Z"
                  fill="#e8cd82"
                />
                <path d="M3 13 C3 18, 8 21, 12 21 C16 21, 21 18, 21 13 Z" fill="currentColor" />
                <path d="M3 13 L21 13" stroke="#222825" strokeWidth="1" />
              </svg>
              <span className="hidden h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-brand-gold/70 md:block"></span>
              <svg
                viewBox="0 0 24 24"
                className="hidden h-5 w-5 flex-shrink-0 text-brand-gold drop-shadow-sm sm:h-6 sm:w-6 md:block"
              >
                <path
                  d="M12 2 C12 2, 9 6, 9 9.5 C9 11.4, 10.3 12.5, 12 12.5 C13.7 12.5, 15 11.4, 15 9.5 C15 6, 12 2, 12 2 Z"
                  fill="#e8cd82"
                />
                <path d="M3 13 C3 18, 8 21, 12 21 C16 21, 21 18, 21 13 Z" fill="currentColor" />
                <path d="M3 13 L21 13" stroke="#222825" strokeWidth="1" />
              </svg>
              <div className="h-[1px] w-full max-w-[80px] bg-gradient-to-l from-transparent via-brand-gold/60 to-brand-gold sm:max-w-[180px] md:max-w-[300px]"></div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="flex w-full flex-col items-center text-center lg:w-[50%] lg:items-start lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Telugu Eyebrow */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="font-telugu text-lg tracking-wider text-brand-gold-light drop-shadow-sm">
                ఆహారమే ఆతిథ్యం
              </span>
            </motion.div>

            {/* Origin Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="mb-3 flex w-full items-center justify-center gap-3 lg:justify-start lg:gap-4"
            >
              <span className="hidden h-[1px] w-8 bg-brand-gold lg:block"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase sm:text-xs">
                Indupalli • Krishna District
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display mb-6 text-2xl font-bold leading-[1.15] text-white drop-shadow-md sm:mb-8 sm:text-4xl md:text-5xl lg:mb-10 lg:text-6xl"
            >
              Where Our Culinary <br className="hidden sm:block" /> Journey Began
            </motion.h1>

            {/* Brand Name replaced by Logo Image in a Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-6 flex w-full flex-col items-center lg:items-start"
            >
              <div className="relative flex aspect-square w-full max-w-[210px] items-center justify-center overflow-hidden rounded-full border border-brand-gold/30 bg-white p-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] sm:max-w-[280px] sm:p-4 md:max-w-[340px] lg:max-w-[380px]">
                <img
                  src={images.brandLogoTransparent || images.brandLogo}
                  alt="Sri Kousalya Catering & Cooking Services"
                  className="h-full w-full scale-105 object-contain"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-6 max-w-md text-sm font-light leading-relaxed text-white/90 drop-shadow-sm sm:mb-8 sm:text-base lg:mx-0"
            >
              Rooted in the culinary traditions of Indupalli, Krishna District, and serving
              celebrations in Visakhapatnam.
            </motion.p>

            {/* Current Location Indicator */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex w-full items-center justify-center gap-3 text-white/80 sm:mb-12 lg:justify-start"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold-light shadow-[0_0_8px_rgba(232,205,130,0.6)]"></span>
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase sm:text-xs">
                Visakhapatnam, Andhra Pradesh
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4 lg:justify-start"
            >
              <Link
                to="/quote"
                className="w-full rounded-sm border border-brand-gold bg-brand-green-dark px-8 py-3.5 text-center text-sm font-medium text-brand-cream shadow-md transition-all duration-300 hover:border-brand-gold-light sm:w-auto"
              >
                Plan Your Function
              </Link>
              <Link
                to="/menu"
                className="w-full rounded-sm border border-brand-gold-light bg-brand-cream px-8 py-3.5 text-center text-sm font-medium text-brand-green-dark shadow-md transition-all duration-300 hover:bg-brand-cream/90 sm:w-auto"
              >
                Explore Our Food
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[9px] font-medium tracking-[0.2em] text-white/70 uppercase">
          Scroll to discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-brand-gold-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
