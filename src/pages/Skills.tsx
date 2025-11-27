import { motion } from "framer-motion";
import { Brain, Database, Cloud, Code2, Award, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const certifications = [
  { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", issuer: "Oracle", year: "2025" },
  { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", year: "2025" },
  { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle", year: "2025" },
  { title: "Machine Learning with Python", issuer: "IBM SkillsBuild", year: "2024" },
  { title: "Applied Data Science with Python – Level 2", issuer: "IBM", year: "2024" },
  { title: "Data Analysis with Python", issuer: "IBM SkillsBuild", year: "2024" },
  { title: "Data Visualization with Python", issuer: "IBM SkillsBuild", year: "2024" },
  { title: "Python Essentials 1 & 2", issuer: "Cisco", year: "2024" },
];

const Skills = () => {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.aiMl"),
      icon: Brain,
      color: "primary",
      skills: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Supervised Learning", "Unsupervised Learning", "CNN", "LSTM", "Transformers", "XGBoost", "Random Forest", "Deep Learning"],
    },
    {
      title: t("skills.nlpLlms"),
      icon: Code2,
      color: "secondary",
      skills: ["BERT", "mT5", "TF-IDF", "Text Mining", "RAG", "Clustering", "K-Means", "LLMs", "Levenshtein", "Stable Diffusion"],
    },
    {
      title: t("skills.computerVision"),
      icon: Brain,
      color: "primary",
      skills: ["YOLOv8", "Detectron2", "Mask R-CNN", "ResNet-50", "OpenCV", "Image Classification", "Object Detection", "Instance Segmentation", "ORB + BFMatcher"],
    },
    {
      title: t("skills.dataBigData"),
      icon: Database,
      color: "secondary",
      skills: ["SQL", "MySQL", "Oracle", "MongoDB", "PL/SQL", "Pandas", "NumPy", "Power BI", "SSIS", "PCA", "t-SNE", "Data Cleaning"],
    },
    {
      title: t("skills.webDev"),
      icon: Code2,
      color: "primary",
      skills: ["React.js", "TypeScript", "Laravel", "Flask", "FastAPI", "Django", "Tailwind CSS", "REST APIs", "Swagger", "React Native"],
    },
    {
      title: t("skills.cloudDevops"),
      icon: Cloud,
      color: "secondary",
      skills: ["Azure", "AWS", "OCI", "Docker", "Git", "GitHub", "CI/CD", "Linux", "Bash", "Agile"],
    },
  ];

  const softSkills = language === "en" 
    ? ["Leadership", "Team Management", "Project Management", "Problem Solving", "Communication", "Critical Thinking", "Agile Methodology", "Time Management"]
    : ["Leadership", "Gestion d'équipe", "Gestion de projet", "Résolution de problèmes", "Communication", "Esprit critique", "Méthodologie Agile", "Gestion du temps"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("skills.title")} <span className="gradient-text">{t("skills.techStack")}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("skills.subtitle")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="glass glass-hover rounded-2xl p-6 group">
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-xl ${category.color === "primary" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}>
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${category.color === "primary" ? "bg-primary/10 text-primary/90 hover:bg-primary/20" : "bg-secondary/10 text-secondary/90 hover:bg-secondary/20"}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">{t("skills.softSkills")}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span key={skill} className="px-4 py-2 rounded-full glass text-sm font-medium hover:border-primary/50 transition-all">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{t("skills.certifications")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass rounded-xl p-4 flex items-start gap-3 hover:border-primary/30 transition-all"
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-sm">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
