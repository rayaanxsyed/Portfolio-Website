import React from 'react';
import { motion } from 'framer-motion';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles"; // Ensure you have the styles imported

const Tech = () => {
  const mainControls = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={mainControls}
      >
        <p className={`${styles.sectionSubText} text-center`}>Tools & Frameworks</p>
      </motion.div>
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={mainControls}
      >
        <h3 className={`${styles.sectionHeadText} text-center`}>Skills</h3>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");