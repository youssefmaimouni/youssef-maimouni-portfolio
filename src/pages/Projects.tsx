import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Newspaper, Droplets, Trophy, Home, Car, QrCode, Brain, Boxes, Code2 } from "lucide-react";

const featuredProjects = [
  {
    title: "Cloud Cybersecurity with AI",
    description:
      "Implemented and compared multiple deep learning models (CNN-LSTM, Random Forest, MLP, XGBoost) for network intrusion detection. Used benchmark datasets (NSL-KDD, UNSW-NB15, CICIDS2017) with deployment on Azure & AWS.",
    icon: Shield,
    tags: ["Python", "Azure", "AWS", "Deep Learning", "XGBoost", "CNN-LSTM"],
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/20 text-primary",
    github: "https://github.com/youssefmaimouni",
  },
  {
    title: "Arabic News Clustering (NLP)",
    description:
      "Processed 52,000+ Arabic articles from 4 media sources. Hybrid vectorization (TF-IDF + BERT), dynamic K-Means clustering (609 clusters), similarity analysis, PCA/t-SNE visualization, and automatic summarization with mT5.",
    icon: Newspaper,
    tags: ["NLP", "BERT", "TF-IDF", "K-Means", "mT5", "Stable Diffusion"],
    gradient: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/20 text-secondary",
    github: "https://github.com/youssefmaimouni",
  },
  {
    title: "Smart Water Leak Detection",
    description:
      "1st Place Winner at DevJam Hackathon 2025. An innovative IoT + AI solution for real-time water leak detection using a single flow sensor and machine learning algorithms.",
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
  {
    title: "Intelligent Shelf Product Detection",
    description: "Computer vision pipeline for retail shelf analysis with YOLOv8, Detectron2, ResNet-50, and ORB+BFMatcher.",
    icon: Boxes,
    tags: ["YOLOv8", "Detectron2", "ResNet-50", "Computer Vision"],
    github: "https://github.com/youssefmaimouni/SCINC",
  },
  {
    title: "Car & House Price Prediction",
    description: "End-to-end ML pipeline with TensorFlow/Keras, Flask API, React frontend, and interactive dashboards.",
    icon: Car,
    tags: ["TensorFlow", "Flask", "React", "Analytics"],
    github: "https://github.com/youssefmaimouni/houses_cars_prices_prediction",
  },
  {
    title: "Exam Attendance System",
    description: "Full-stack web + mobile app with QR Code attendance using React, React Native, and Laravel.",
    icon: QrCode,
    tags: ["React", "React Native", "Laravel", "QR Code"],
    github: "https://github.com/youssefmaimouni/fsac-pve",
  },
  {
    title: "HrayfIA - Artisan Gallery",
    description: "AI-powered platform for Moroccan artisans to showcase and sell their crafts.",
    icon: Brain,
    tags: ["AI", "React", "Full-stack"],
    github: "https://github.com/youssefmaimouni/hrayfIA",
  },
  {
    title: "Stock Management System",
    description: "Comprehensive inventory management platform with Laravel backend and React frontend.",
    icon: Home,
    tags: ["Laravel", "React", "Tailwind", "REST API"],
    github: "https://github.com/youssefmaimouni/gestion-stork",
  },
  {
    title: "AutoRevise AI Campus",
    description: "AI-powered study revision tool for students using intelligent content processing.",
    icon: Code2,
    tags: ["AI", "Education", "NLP"],
    github: "https://github.com/youssefmaimouni/autorevise-ai-campus",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="container px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world AI solutions tackling cybersecurity, NLP, IoT, and computer vision challenges
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {project.badge}
              <div
                className="h-full glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center mb-5`}
                  >
                    <project.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Other <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-5 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <project.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-muted/50 text-muted-foreground text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/youssefmaimouni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:border-primary/50 transition-all text-muted-foreground hover:text-primary"
            >
              <Github className="h-5 w-5" />
              View all repositories on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
