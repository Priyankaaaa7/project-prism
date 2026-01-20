import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users } from "lucide-react";

const experiences = [
  {
    title: "VLSI Design and Verification Intern",
    company: "Ethnus",
    period: "May 2025 – July 2025",
    description: [
      "Designed and simulated Verilog HDL modules for FSMs and digital logic circuits",
      "Performed functional verification with Icarus Verilog and GTKWave on Linux",
      "Strengthened debugging discipline and systematic testing practices",
    ],
    icon: Briefcase,
  },
  {
    title: "Artificial Intelligence Club",
    company: "VIT Chennai",
    period: "Jan 2024 – Oct 2024",
    description: [
      "Contributed to AI/ML projects with focus on model correctness and testing",
      "Organized university-level hackathon with 100+ participants",
      "Mentored juniors on Git-based collaboration workflows",
    ],
    icon: Users,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 text-center">
            <span className="text-primary">Experience</span> & Leadership
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Learning through doing, leading through example.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex gap-6"
                >
                  {/* Icon */}
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0 z-10 hidden md:flex items-center justify-center">
                    <exp.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-xl p-6 shadow-soft">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display text-xl font-medium">
                          {exp.title}
                        </h3>
                        <p className="font-body text-primary text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="font-body text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item) => (
                        <li
                          key={item}
                          className="font-body text-muted-foreground text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
