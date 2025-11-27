import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg glass">
      <button
        onClick={() => setLanguage("en")}
        className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          language === "en" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {language === "en" && (
          <motion.div
            layoutId="lang-indicator"
            className="absolute inset-0 gradient-bg rounded-md"
            transition={{ type: "spring", duration: 0.3 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      <button
        onClick={() => setLanguage("fr")}
        className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
          language === "fr" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {language === "fr" && (
          <motion.div
            layoutId="lang-indicator"
            className="absolute inset-0 gradient-bg rounded-md"
            transition={{ type: "spring", duration: 0.3 }}
          />
        )}
        <span className="relative z-10">FR</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
