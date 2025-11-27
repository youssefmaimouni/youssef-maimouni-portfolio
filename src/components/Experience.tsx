import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Data Science Intern",
    company: "SCInc",
    period: "Summer 2024",
    description:
      "Built a Computer Vision pipeline for retail analytics. Implemented object detection models using YOLOv8 and developed data processing workflows.",
  },
  {
    type: "work",
    title: "Web Developer Intern",
    company: "Webagency Maroc",
    period: "Summer 2023",
    description:
      "Developed full-stack web applications using Laravel and React.js. Collaborated with design teams to implement responsive UI components.",
  },
];

const education = [
  {
    type: "education",
    title: "Master's in Data Science & AI",
    company: "ENSA Khouribga",
    period: "2024 - Present",
    description:
      "Specializing in Machine Learning, Deep Learning, and Big Data technologies. Focus on NLP and Computer Vision applications.",
  },
  {
    type: "education",
    title: "Bachelor's in Mathematics & Computer Science",
    company: "Hassan II University",
    period: "2021 - 2024",
    description:
      "Strong foundation in algorithms, data structures, and mathematical modeling. Graduated with honors.",
  },
];

const Experience = () => {
  const timelineItems = [...experiences, ...education];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through learning and building practical AI solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-border space-y-8">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-primary text-sm">{item.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-border space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                  
                  <div className="glass rounded-xl p-5 hover:border-secondary/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-secondary text-sm">{item.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
