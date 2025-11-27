import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Calendar, Award, Users, Briefcase, GraduationCap } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";

const stats = [
  { label: "Years Learning", value: "4+", icon: Calendar },
  { label: "Projects Completed", value: "15+", icon: Briefcase },
  { label: "Hackathons Won", value: "3", icon: Award },
  { label: "Tech Communities", value: "2", icon: Users },
];

const About = () => {
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
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about turning data into actionable insights and building impactful AI solutions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="glass rounded-2xl p-6 sticky top-28">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/30">
                    <img
                      src={profilePicture}
                      alt="Youssef Maimouni"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold">Youssef Maimouni</h2>
                  <p className="text-primary text-sm">Data Scientist & AI Engineer</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Casablanca, Morocco</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">+212 682419203</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">youssefmaimouni03@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Master's Student, ENSA Khouribga</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Available for PFE Internship starting February 2026
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 space-y-8"
            >
              {/* Bio */}
              <motion.div variants={itemVariants} className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    👨‍💻
                  </span>
                  Who I Am
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a <span className="text-foreground font-medium">Master's student in Computer Science & Mathematics for Data Science</span> at ENSA Khouribga, 
                    passionate about <span className="text-primary">Artificial Intelligence</span>, <span className="text-secondary">Machine Learning</span>, 
                    NLP, and Computer Vision.
                  </p>
                  <p>
                    I love building <span className="text-foreground">AI-powered systems</span> that connect data, algorithms, and real-world impact. 
                    My experience ranges from developing computer vision pipelines for retail analytics to processing 52,000+ Arabic articles 
                    for intelligent clustering.
                  </p>
                  <p>
                    Beyond technical work, I'm actively involved in the tech community as a <span className="text-foreground font-medium">Project Manager at JLM ENSA Khouribga</span> and 
                    <span className="text-foreground font-medium"> Director of Events & Logistics at ResearchX Club</span>.
                  </p>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="glass rounded-xl p-4 text-center hover:border-primary/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* What I Do */}
              <motion.div variants={itemVariants} className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    🎯
                  </span>
                  What I Do
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/30">
                    <h4 className="font-medium mb-2 text-primary">Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Supervised & unsupervised learning, CNN, LSTM, Transformers for real-world applications.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30">
                    <h4 className="font-medium mb-2 text-secondary">NLP & LLMs</h4>
                    <p className="text-sm text-muted-foreground">
                      Text mining, BERT, mT5, TF-IDF, RAG for intelligent text processing and generation.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30">
                    <h4 className="font-medium mb-2 text-primary">Computer Vision</h4>
                    <p className="text-sm text-muted-foreground">
                      YOLOv8, Mask R-CNN, ResNet-50, OpenCV for detection, segmentation, and classification.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30">
                    <h4 className="font-medium mb-2 text-secondary">Cloud & Deployment</h4>
                    <p className="text-sm text-muted-foreground">
                      Azure, AWS, Docker, Flask, FastAPI for scalable AI solutions deployment.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div variants={itemVariants} className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    🌍
                  </span>
                  Languages
                </h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇲🇦</span>
                    <div>
                      <p className="font-medium text-sm">Arabic</p>
                      <p className="text-xs text-muted-foreground">Native</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇫🇷</span>
                    <div>
                      <p className="font-medium text-sm">French</p>
                      <p className="text-xs text-muted-foreground">Fluent</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🇬🇧</span>
                    <div>
                      <p className="font-medium text-sm">English</p>
                      <p className="text-xs text-muted-foreground">Professional</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
