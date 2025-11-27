import { motion } from "framer-motion";
import { ExternalLink, Github, Shield, Newspaper, Droplets, Trophy } from "lucide-react";

const projects = [
  {
    title: "Cloud Cybersecurity with AI",
    description:
      "Implemented CNN-LSTM and XGBoost models on Azure/AWS to detect network intrusions using NSL-KDD datasets with 98.5% accuracy.",
    icon: Shield,
    tags: ["Python", "Azure", "Deep Learning", "XGBoost"],
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/20 text-primary",
    link: "#",
  },
  {
    title: "Arabic News Clustering (NLP)",
    description:
      "Processed 52k+ articles using TF-IDF + BERT hybrid vectorization and dynamic K-Means clustering for intelligent news categorization.",
    icon: Newspaper,
    tags: ["NLP", "Transformers", "BERT", "Clustering"],
    gradient: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/20 text-secondary",
    link: "#",
  },
  {
    title: "Smart Water Leak Detection",
    description:
      "1st Place Winner at DevJam Hackathon 2025. A single-sensor ML solution for real-time leak detection in water systems.",
    icon: Droplets,
    tags: ["IoT", "Machine Learning", "Real-time Data"],
    gradient: "from-primary/20 via-secondary/10 to-primary/5",
    iconBg: "bg-gradient-to-br from-primary/20 to-secondary/20 text-primary",
    badge: (
      <div className="absolute -top-3 -right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-background text-xs font-semibold">
        <Trophy className="h-3 w-3" /> 1st Place
      </div>
    ),
    link: "#",
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
    <section id="projects" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world AI solutions tackling cybersecurity, NLP, and IoT challenges
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {project.badge}
              <div
                className={`h-full glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center mb-5`}
                  >
                    <project.icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
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

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
