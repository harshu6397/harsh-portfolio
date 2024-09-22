import { animate, motion } from "framer-motion";

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// calculate the  reverse index for the staggered delay
const getReverseIndex = (index) => {
    const totalSteps = 6; // total number of steps in the stairs
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {/* render the 6 motion div, each represents a step in the stairs */}
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: getReverseIndex(index) * 0.1,
                    }}
                    className="h-full w-full bg-white relative"
                />
            ))}
        </>
    );
};

export default Stairs;
