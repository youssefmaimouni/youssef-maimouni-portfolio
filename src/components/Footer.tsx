import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Nav */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link to="/" className="text-xl font-bold">
              <span className="gradient-text">YM</span>
            </Link>
            <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-primary transition-colors">{t("nav.about")}</Link>
              <Link to="/skills" className="hover:text-primary transition-colors">{t("nav.skills")}</Link>
              <Link to="/projects" className="hover:text-primary transition-colors">{t("nav.projects")}</Link>
              <Link to="/experience" className="hover:text-primary transition-colors">{t("nav.experience")}</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">{t("nav.contact")}</Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/youssefmaimouni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/maimouni-youssef/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:youssefmaimouni03@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>{t("footer.builtWith")}</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
            <span>{t("footer.by")}</span>
            <span className="font-semibold text-foreground">Youssef Maimouni</span>
          </div>
          <p>© {currentYear} {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
