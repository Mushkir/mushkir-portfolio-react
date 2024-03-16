import { motion, useScroll } from "framer-motion";

const TheHeaderProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="rounded-full fixed z-50 top-[115px] left-0 right-0 h-[5px] bg-aqua-color origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default TheHeaderProgressBar;
