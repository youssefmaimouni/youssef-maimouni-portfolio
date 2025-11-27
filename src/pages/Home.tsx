import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import profilePicture from "@/assets/profile-picture.jpg";

const Home = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 rounded-full bg-primary/60"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 rounded-full bg-secondary/60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container relative z-10 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 glow-gradient">
                <img
                  src={profilePicture}
                  alt="Youssef Maimouni"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full glass text-xs text-muted-foreground whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {t("home.openForPFE")}
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                  📍 {t("home.location")}
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
              >
                {t("home.greeting")}{" "}
                <span className="gradient-text">{t("home.name")}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground mb-4"
              >
                {t("home.role")}
              </motion.p>

              {/* Sub-headline */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
              >
                {t("home.description")}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
              >
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/projects">
                    {t("home.viewProjects")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <a href="/MAIMOUNI_YOUSSEF_CV.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    {t("home.downloadCV")}
                  </a>
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="https://github.com/youssefmaimouni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/maimouni-youssef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:youssefmaimouni03@gmail.com"
                  className="p-3 rounded-xl glass glass-hover text-muted-foreground hover:text-primary"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link to="/about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs">{t("home.learnMore")}</span>
          <ChevronDown className="h-5 w-5" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
