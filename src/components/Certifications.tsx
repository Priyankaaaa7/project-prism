import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Star, Trophy, Code, Bot } from "lucide-react";

const certifications = [
  {
    title: "Google GenAI Program & Cloud Silver Badge",
    description: "Prompt design, Gemini API, multimodal AI",
    icon: Bot,
  },
  {
    title: "HackerRank Badges",
    description: "4★ Python, 3★ Java, C++, SQL",
    icon: Star,
  },
  {
    title: "BCG GenAI Simulation (Forage)",
    description: "Built AI chatbot prototype for business use case",
    icon: Award,
  },
  {
    title: "Python Certification – IIT Bombay",
    description: "Spoken Tutorial Project",
    icon: Code,
  },
  {
    title: "Hackathon Finalist",
    description: "MEDITHON Healthcare Hackathon",
    icon: Trophy,
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-card/50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 text-center">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Continuous learning and recognition along the journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-5 bg-background rounded-xl shadow-soft hover:shadow-card transition-all flex items-start gap-4"
            >
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <cert.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-medium text-sm leading-tight mb-1">
                  {cert.title}
                </h3>
                <p className="font-body text-muted-foreground text-xs">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
