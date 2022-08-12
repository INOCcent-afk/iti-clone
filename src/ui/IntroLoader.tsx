import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { Debris } from "./Debris";

const MotionDebris = motion(Debris);

export const IntroLoader = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const debrisTransition = {
    type: "spring",
    duration: 2,
    damping: 7,
    stiffness: 15,
  };

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => setIsAnimating(false), 2900);

    if (!isAnimating) {
      document.body.style.overflow = "auto";
    }
  }, [isAnimating]);

  return (
    <motion.div
      className="bg-[#d4e0e6] w-screen h-screen top-0 left-0 z-10 absolute flex items-center justify-center"
      initial={{ top: 0 }}
      animate={{ top: "-100%", originY: 0, transitionEnd: { display: "none" } }}
      transition={{
        duration: 3,
        delay: 1.4,
      }}
    >
      <div className="relative w-[300px] h-[300px] ">
        <MotionDebris
          cn="top-[32%] left-2/4 translate-x-[-50%] translate-y-[-50%]"
          initial={{ left: "-200%" }}
          animate={{ left: "50%" }}
          transition={debrisTransition}
        />
        <MotionDebris
          cn="top-[62%] right-2/4 translate-x-[-50%] translate-y-[-50%]"
          width={40}
          height={80}
          initial={{ right: "-200%" }}
          animate={{ right: "36%" }}
          transition={debrisTransition}
        />
        <MotionDebris
          cn="top-[50%] left-[22%] translate-x-[-50%] translate-y-[-50%]"
          width={40}
          height={150}
          initial={{ top: "-200%" }}
          animate={{ top: "50%" }}
          transition={debrisTransition}
        />
        <MotionDebris
          cn="top-[50%] right-[7%] translate-x-[-50%] translate-y-[-50%]"
          width={40}
          height={150}
          initial={{ top: "200%" }}
          animate={{ top: "50%" }}
          transition={debrisTransition}
        />
      </div>
    </motion.div>
  );
};
