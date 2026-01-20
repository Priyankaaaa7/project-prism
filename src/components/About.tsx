import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Code } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-card/50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a curious developer who loves turning complex problems into elegant solutions. 
                Currently pursuing my B.Tech in Electronics and Communication Engineering at VIT Chennai, 
                I've found my true passion in software development.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                From building AI-powered grocery assistants to healthcare platforms, 
                I enjoy working on projects that make a real difference. When I'm not coding, 
                you'll find me organizing hackathons or mentoring fellow students.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-soft"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-medium text-lg">Education</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    VIT Chennai • B.Tech ECE
                  </p>
                  <p className="font-body text-muted-foreground text-sm">
                    CGPA: 7.7 • Expected 2027
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-soft"
              >
                <div className="p-2 bg-accent rounded-lg">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-medium text-lg">Location</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Chennai, India
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-soft"
              >
                <div className="p-2 bg-secondary rounded-lg">
                  <Code className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-medium text-lg">Focus Areas</h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Backend Development • APIs • AI/ML
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
