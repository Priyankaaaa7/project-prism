import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="font-body text-muted-foreground mb-12 text-lg">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or simply chat about technology and ideas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:Psoni250305@gmail.com"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-body font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Psoni250305@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/Priyanka250305"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <span className="w-px h-5 bg-border" />
            <a
              href="https://www.linkedin.com/in/priyanka-soni-588437253/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <span className="w-px h-5 bg-border" />
            <a
              href="https://g.dev/Priyanka7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              <ExternalLink className="w-5 h-5" />
              Google Dev
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
