import { motion } from "framer-motion";
import { Trophy, Medal, Award } from "lucide-react";

const awards = [
  {
    title: "1st Place – DevJam Hackathon",
    event: "DevJam 2025",
    description: "Smart Water Leak Detection System using IoT and Machine Learning",
    icon: Trophy,
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-500",
  },
  {
    title: "2nd Place – Problem Solving",
    event: "Open Source Days 2024",
    description: "Competitive programming and algorithmic problem solving",
    icon: Medal,
    color: "from-slate-300 to-slate-400",
    bgColor: "bg-slate-400/10",
    textColor: "text-slate-300",
  },
  {
    title: "3rd Place – Hackathon",
    event: "Open Source Days 2024",
    description: "Innovative solution development under time constraints",
    icon: Award,
    color: "from-amber-700 to-amber-800",
    bgColor: "bg-amber-700/10",
    textColor: "text-amber-700",
  },
];

const Awards = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="awards" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />
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
            Awards & <span className="gradient-text">Distinctions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition for innovation and technical excellence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 text-center h-full border border-border/50 hover:border-primary/30 transition-all duration-300">
                {/* Icon with gradient */}
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

                {/* Content */}
                <h3 className="font-semibold text-lg mb-2">{award.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{award.event}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
