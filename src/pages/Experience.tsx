import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Trophy, Medal, Award, Users } from "lucide-react";

const workExperience = [
  {
    title: "Data Science Intern",
    company: "SCInc.",
    location: "Casablanca (Hybrid)",
    period: "June – Sept 2025",
    description: [
      "Designed a computer vision pipeline for retail shelf analysis",
      "Detection (YOLOv8), segmentation (Mask R-CNN), classification (ResNet-50), validation (ORB + BFMatcher)",
      "Cloud deployment and Agile teamwork on large-scale datasets",
      "Automated retail shelf analysis, reducing manual verification by 40%",
    ],
    tags: ["YOLOv8", "Detectron2", "ResNet-50", "Python", "Agile"],
  },
  {
    title: "Web Developer Intern",
    company: "Webagency Maroc",
    location: "Casablanca",
    period: "June – Aug 2024",
    description: [
      "Developed full-stack applications using Laravel, React.js, and Tailwind CSS",
      "Documented REST APIs with Swagger",
      "Optimized performance through Agile methodology",
      "Reduced stock update errors by 30%",
    ],
    tags: ["Laravel", "React.js", "Tailwind", "REST API", "Swagger"],
  },
];

const education = [
  {
    title: "Master's in Computer Science & Mathematics for Data Science",
    school: "ENSA Khouribga – Sultan Moulay Slimane University",
    period: "2024 – 2026",
    description: "Specializing in Artificial Intelligence, Machine Learning, Big Data, NLP, and Computer Vision.",
  },
  {
    title: "Bachelor's in Mathematical and Computer Sciences – Database Option",
    school: "University Hassan II – Faculty of Sciences Aïn Chock, Casablanca",
    period: "2021 – 2024",
    description: "Strong foundation in algorithms, data structures, databases, and mathematical modeling.",
  },
];

const awards = [
  {
    title: "1st Place – DevJam Hackathon",
    event: "ENSIAS IT Club, 2025",
    description: "Smart Water Leak Detection System – IoT + AI solution using single-sensor ML",
    icon: Trophy,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
  },
  {
    title: "2nd Place – Problem Solving Competition",
    event: "Open Source Days 14.0, ENSA Khouribga, 2024",
    description: "Competitive programming and algorithmic optimization challenges",
    icon: Medal,
    color: "from-slate-300 to-slate-400",
    bgColor: "bg-slate-400/10",
    textColor: "text-slate-300",
  },
  {
    title: "3rd Place – Hackathon",
    event: "Open Source Days 14.0, ENSA Khouribga, 2024",
    description: "AI + Open Source solution for real-world problems",
    icon: Award,
    color: "from-amber-700 to-amber-800",
    bgColor: "bg-amber-700/10",
    textColor: "text-amber-700",
  },
];

const volunteering = [
  {
    title: "Project Manager",
    organization: "JLM ENSA Khouribga",
    period: "2024 – Present",
    description: "Leading project initiatives and coordinating team efforts for student-led tech projects.",
  },
  {
    title: "Director of Events & Logistics",
    organization: "ResearchX Club",
    period: "2025 – Present",
    description: "Organizing tech events, workshops, and managing logistics for research-focused activities.",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through learning, building, and leading impactful AI solutions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Work Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Work Experience</h2>
            </div>

            <div className="relative pl-8 border-l-2 border-border space-y-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <p className="text-primary">{job.company}</p>
                        <p className="text-sm text-muted-foreground">{job.location}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <Calendar className="h-3.5 w-3.5" />
                        {job.period}
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {job.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="relative pl-8 border-l-2 border-border space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                  
                  <div className="glass rounded-xl p-6 hover:border-secondary/30 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{edu.title}</h3>
                        <p className="text-secondary text-sm">{edu.school}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Awards */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                <Trophy className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Awards & Distinctions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all group"
                >
                  <div className="relative mx-auto w-16 h-16 mb-5">
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${award.color} opacity-20 blur-lg group-hover:opacity-40 transition-opacity`}
                    />
                    <div
                      className={`relative w-full h-full rounded-full ${award.bgColor} flex items-center justify-center`}
                    >
                      <award.icon className={`h-7 w-7 ${award.textColor}`} />
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-2">{award.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{award.event}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Volunteering */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Volunteering & Leadership</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {volunteering.map((vol, index) => (
                <motion.div
                  key={vol.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-xl p-6 hover:border-primary/30 transition-all"
                >
                  <h3 className="font-semibold text-lg mb-1">{vol.title}</h3>
                  <p className="text-primary text-sm mb-1">{vol.organization}</p>
                  <p className="text-xs text-muted-foreground mb-3">{vol.period}</p>
                  <p className="text-muted-foreground text-sm">{vol.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
