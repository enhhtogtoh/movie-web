import { motion } from "motion/react";
// import { body } from "motion/react-client";
export const Title = () => {
  return (
    <div className="w-full h-9 flex justify-between px-20 mt-13">
      <h2 className="w-28.5 h-8 font-semibold text-2xl">Upcoming</h2>
      <motion.div
        whileHover={{
          scale: 1.2,
          rotate: 5,
          backgroundColor: "#2BB95D",
          transition: { duration: 0.2 },
        }}
        whileTap={{
          scale: 0.8,
          rotate: -5,
          backgroundColor: "#1A7A3E",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
        className="flex w-30 h-9 rounded-md py-2 px-4 gap-2 justify-center items-center bg-amber-200"
      >
        <button className="text-sm ">See more</button>
        <img src="./arrow-right.png" alt="arrow-right" className="w-4 h-4" />
      </motion.div>
    </div>
  );
};
