import { motion } from "framer-motion";
import { Brain, Database, Cloud, Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "primary",
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "YOLOv8",
      "Transformers",
      "BERT",
      "mT5",
      "Scikit-learn",
      "OpenCV",
    ],
  },
  {
    title: "Data & Big Data",
    icon: Database,
    color: "secondary",
    skills: ["SQL", "MongoDB", "Power BI", "Pandas", "NumPy", "Apache Spark"],
  },
  {
    title: "Web Development",
    icon: Code2,
    color: "primary",
    skills: ["React.js", "Laravel", "Flask", "FastAPI", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "secondary",
    skills: ["Docker", "Azure", "AWS", "Git", "CI/CD", "Linux"],
  },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems from prototype to production
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass glass-hover rounded-2xl p-6 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`p-2.5 rounded-xl ${
                    category.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary/90 hover:bg-primary/20"
                        : "bg-secondary/10 text-secondary/90 hover:bg-secondary/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
