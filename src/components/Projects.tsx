import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ShoppingCart, Heart } from "lucide-react";

const projects = [
  {
    title: "SmartKart",
    subtitle: "AI-Powered Grocery Assistant",
    description:
      "A Chrome extension with a full-stack Flask backend for grocery inventory management, expiry tracking, and AI-powered recipe recommendations using Spoonacular API.",
    tech: ["Python", "Flask", "REST APIs", "SQL", "CI/CD"],
    highlights: [
      "Real-time expiry monitoring reducing food wastage by ~30%",
      "Dynamic budget tracking module",
      "Integration & unit testing with CI pipelines",
    ],
    github: "https://github.com/Priyankaaaa7/SmartKart.git",
    icon: ShoppingCart,
    featured: true,
  },
  {
    title: "Expecting Ease",
    subtitle: "Healthcare Web Portal",
    description:
      "A healthcare platform providing appointment scheduling, chatbot support, and pregnancy care resources. Built during MEDITHON Hackathon where we advanced to finals.",
    tech: ["Python", "JavaScript", "HTML/CSS", "REST APIs"],
    highlights: [
      "Real-time user interactions via REST APIs",
      "Hackathon finalist project",
      "Focus on usability and accessibility",
    ],
    demo: "https://priyankaaaa7.github.io/MEDITHON_PANS/index.html",
    icon: Heart,
    featured: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-card/50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Building practical solutions that solve real-world problems.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl shrink-0 hidden sm:block">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-medium mb-1">
                        {project.title}
                      </h3>
                      <p className="font-body text-primary text-sm font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border hover:bg-card transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border hover:bg-card transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="font-body text-sm text-foreground/80 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
