import { motion, useTransform, useScroll } from "framer-motion";
import Image1 from "../assets/chrome-gallery1.webp";
import Image3 from "../assets/chrome-gallery3.webp";
import Image0 from "../assets/chrome-gallery0.webp";
import Image4 from "../assets/chrome-gallery-1.webp";
import React from "react";

function Slice() {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: scrollRef });
    
    // Define a direction or range for the transformation
    const xTransform = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <>
            <motion.div
                ref={scrollRef}
                style={{
                    maxHeight: "700px",
                    zIndex: 6,
                    position: "relative",
                    translateX: xTransform,
                }}
            >
                <motion.div
                    animate={{
                        y: -80,
                        x: -805,
                        scale: 1
                    }}
                    initial={{
                        y: 40,
                        x: -900,
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <img src={Image3} alt="Image 3" />
                </motion.div>

                <motion.div
                    initial={{
                        y: -400,
                        x: 250,
                    }}
                    animate={{
                        y: -590,
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <img src={Image1} alt="Image 1" />
                </motion.div>

                <motion.div
                    initial={{
                        y: -1190,
                        x: 1400,
                    }}
                    animate={{
                        y: -1290,
                        x: 1300,
                    }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <img className="image0" src={Image0} alt="Image 0" />
                </motion.div>

                <motion.div
                    initial={{
                        y: -1790,
                        x: 1610,
                    }}
                    // animate={{
                    //     y: -1290,
                    //     x: 1300,
                    // }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <img className="image0" src={Image4} alt="Image 4" />
                </motion.div>
            </motion.div>
        </>
    );
}

export default Slice;
