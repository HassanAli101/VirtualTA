import { motion } from "framer-motion";
import { AnimationTextType, AnimationImageType } from "./types";

const TextAnimation = ({ delay, children }: AnimationTextType) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
    >
      {children}
    </motion.div>
  );
};

const ImageAnimation = ({ delay, source }: AnimationImageType) => {
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: delay }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
      >
      <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
      <img
          src={source}
          alt="An Image Goes here"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      </motion.div>
    );
};

const SideTextAnimation = ({ delay, children }: AnimationTextType) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
            {children}
        </motion.div>
        );
};

export { TextAnimation, ImageAnimation, SideTextAnimation };

export default TextAnimation;
