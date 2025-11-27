import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Calendar, Award, Users, Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import profilePicture from "@/assets/profile-picture.jpg";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t("about.yearsLearning"), value: "4+", icon: Calendar },
    { label: t("about.projectsCompleted"), value: "15+", icon: Briefcase },
    { label: t("about.hackathonsWon"), value: "3", icon: Award },
    { label: t("about.techCommunities"), value: "2", icon: Users },
  ];

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
            {t("about.title")} <span className="gradient-text">{t("about.me")}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
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
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h2 className="text-xl font-bold">Youssef Maimouni</h2>
                  <p className="text-primary text-sm">{t("home.role")}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{t("home.location")}</span>
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
                    {t("about.availableForPFE")}
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
                  {t("about.whoIAm")}
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t("about.bio1")}</p>
                  <p>{t("about.bio2")}</p>
                  <p>{t("about.bio3")}</p>
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
                  {t("about.whatIDo")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-muted/30">
                    <h4 className="font-medium mb-2 text-primary">{t("about.ml")}</h4>
                    <p className="text-sm text-muted-foreground">{t("about.mlDesc")}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30">
                    <h4 className="font-medium mb-2 text-secondary">{t("about.nlp")}</h4>
                    <p className="text-sm text-muted-foreground">{t("about.nlpDesc")}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30">
                    <h4 className="font-medium mb-2 text-primary">{t("about.cv")}</h4>
                    <p className="text-sm text-muted-foreground">{t("about.cvDesc")}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30">
                    <h4 className="font-medium mb-2 text-secondary">{t("about.cloud")}</h4>
                    <p className="text-sm text-muted-foreground">{t("about.cloudDesc")}</p>
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div variants={itemVariants} className="glass rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    🌍
                  </span>
                  {t("about.languages")}
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
