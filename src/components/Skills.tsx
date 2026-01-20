import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C++", "SQL"],
  },
  {
    title: "Backend & APIs",
    skills: ["Flask", "REST APIs", "Authentication", "JSON"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Data Modeling"],
  },
  {
    title: "CS Fundamentals",
    skills: ["DSA", "OOP", "Operating Systems", "Computer Networks"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Linux", "Docker", "AWS"],
  },
  {
    title: "Python Ecosystem",
    skills: ["Pandas", "NumPy", "Matplotlib", "Data Cleaning"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4 text-center">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-16">
            A diverse toolkit built through coursework, personal projects, and hands-on experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
            >
              <h3 className="font-display text-lg font-medium mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-body rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
