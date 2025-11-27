import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Newspaper, Droplets, Trophy, Home, Car, QrCode, Brain, Boxes, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t, language } = useLanguage();

  const featuredProjects = [
    {
      title: language === "en" ? "Cloud Cybersecurity with AI" : "Cybersécurité Cloud avec IA",
      description: language === "en"
        ? "Implemented and compared multiple deep learning models (CNN-LSTM, Random Forest, MLP, XGBoost) for network intrusion detection. Used benchmark datasets (NSL-KDD, UNSW-NB15, CICIDS2017) with deployment on Azure & AWS."
        : "Implémentation et comparaison de modèles deep learning (CNN-LSTM, Random Forest, MLP, XGBoost) pour la détection d'intrusions réseau. Utilisation de datasets de référence avec déploiement sur Azure & AWS.",
      icon: Shield,
      tags: ["Python", "Azure", "AWS", "Deep Learning", "XGBoost", "CNN-LSTM"],
      gradient: "from-primary/20 to-primary/5",
      iconBg: "bg-primary/20 text-primary",
      github: "https://github.com/youssefmaimouni",
    },
    {
      title: language === "en" ? "Arabic News Clustering (NLP)" : "Clustering d'Articles Arabes (NLP)",
      description: language === "en"
        ? "Processed 52,000+ Arabic articles from 4 media sources. Hybrid vectorization (TF-IDF + BERT), dynamic K-Means clustering (609 clusters), similarity analysis, PCA/t-SNE visualization, and automatic summarization with mT5."
        : "Traitement de 52 000+ articles arabes de 4 sources médias. Vectorisation hybride (TF-IDF + BERT), clustering K-Means dynamique, analyse de similarité, visualisation PCA/t-SNE, et résumé automatique avec mT5.",
      icon: Newspaper,
      tags: ["NLP", "BERT", "TF-IDF", "K-Means", "mT5", "Stable Diffusion"],
      gradient: "from-secondary/20 to-secondary/5",
      iconBg: "bg-secondary/20 text-secondary",
      github: "https://github.com/youssefmaimouni",
    },
    {
      title: language === "en" ? "Smart Water Leak Detection" : "Détection Intelligente de Fuites d'Eau",
      description: language === "en"
        ? "1st Place Winner at DevJam Hackathon 2025. An innovative IoT + AI solution for real-time water leak detection using a single flow sensor and machine learning algorithms."
        : "1ère Place au Hackathon DevJam 2025. Solution innovante IoT + IA pour la détection en temps réel de fuites d'eau avec un seul capteur et des algorithmes ML.",
      icon: Droplets,
      tags: ["IoT", "Machine Learning", "Real-time", "Python"],
      gradient: "from-primary/20 via-secondary/10 to-primary/5",
      iconBg: "bg-gradient-to-br from-primary/20 to-secondary/20 text-primary",
      badge: (
        <div className="absolute -top-3 -right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-background text-xs font-semibold">
          <Trophy className="h-3 w-3" /> 1st Place
        </div>
      ),
      github: "https://github.com/youssefmaimouni/AquaFlow",
    },
  ];

  const otherProjects = [
    { title: language === "en" ? "Intelligent Shelf Product Detection" : "Détection Intelligente de Produits en Rayon", description: language === "en" ? "Computer vision pipeline for retail shelf analysis with YOLOv8, Detectron2, ResNet-50, and ORB+BFMatcher." : "Pipeline de vision par ordinateur pour l'analyse de rayons retail.", icon: Boxes, tags: ["YOLOv8", "Detectron2", "ResNet-50"], github: "https://github.com/youssefmaimouni/SCINC" },
    { title: language === "en" ? "Car & House Price Prediction" : "Prédiction de Prix (Voitures & Maisons)", description: language === "en" ? "End-to-end ML pipeline with TensorFlow/Keras, Flask API, React frontend." : "Pipeline ML complet avec TensorFlow/Keras, Flask API, React.", icon: Car, tags: ["TensorFlow", "Flask", "React"], github: "https://github.com/youssefmaimouni/houses_cars_prices_prediction" },
    { title: language === "en" ? "Exam Attendance System" : "Système de Présence aux Examens", description: language === "en" ? "Full-stack web + mobile app with QR Code attendance." : "Application web + mobile avec présence par QR Code.", icon: QrCode, tags: ["React", "React Native", "Laravel"], github: "https://github.com/youssefmaimouni/fsac-pve" },
    { title: "HrayfIA - Artisan Gallery", description: language === "en" ? "AI-powered platform for Moroccan artisans." : "Plateforme IA pour les artisans marocains.", icon: Brain, tags: ["AI", "React", "Full-stack"], github: "https://github.com/youssefmaimouni/hrayfIA" },
    { title: language === "en" ? "Stock Management System" : "Système de Gestion de Stock", description: language === "en" ? "Comprehensive inventory management platform." : "Plateforme complète de gestion d'inventaire.", icon: Home, tags: ["Laravel", "React", "Tailwind"], github: "https://github.com/youssefmaimouni/gestion-stork" },
    { title: "AutoRevise AI Campus", description: language === "en" ? "AI-powered study revision tool." : "Outil de révision alimenté par l'IA.", icon: Code2, tags: ["AI", "Education", "NLP"], github: "https://github.com/youssefmaimouni/autorevise-ai-campus" },
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const cardVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("projects.title")} <span className="gradient-text">{t("projects.featured")}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("projects.subtitle")}</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
          {featuredProjects.map((project) => (
            <motion.div key={project.title} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="group relative">
              {project.badge}
              <div className="h-full glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center mb-5`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-4 w-4" /> {t("projects.viewCode")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">{t("projects.other")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.a key={project.title} href={project.github} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} whileHover={{ y: -4 }} className="glass rounded-xl p-5 hover:border-primary/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary"><project.icon className="h-5 w-5" /></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">{project.title}</h4>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (<span key={tag} className="px-2 py-0.5 rounded bg-muted/50 text-muted-foreground text-xs">{tag}</span>))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
            <a href="https://github.com/youssefmaimouni" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:border-primary/50 transition-all text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" /> {t("projects.viewAll")} <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
