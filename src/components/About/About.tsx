import * as motion from "motion/react-client";
import React, {RefObject} from "react";
import "./About.css"

interface AboutProps {
    scrollHandler: (eleRef: React.RefObject<HTMLDivElement>) => void;
    connect: RefObject<HTMLDivElement>
}

export const About = ({scrollHandler, connect}: AboutProps) => {
    return (
        <div className="container">
            <motion.p
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
            >
                Empowering children with MR and Autism through
            </motion.p>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {opacity: 0},
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.4,
                        },
                    },
                }}
                className="header-div"
            >
                {["Guidance", "Care", "Possibilities"].map((text, index) => (
                    <motion.p
                        key={index}
                        variants={{
                            hidden: {opacity: 0, y: 20},
                            visible: {opacity: 1, y: 0},
                        }}
                        className="card-div"
                    >
                        {text}
                    </motion.p>
                ))}
            </motion.div>

            <motion.button
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{delay: 1.5, duration: 0.5}}
                className="register-button"
                onClick={() => {
                    scrollHandler(connect)
                }}
            >
                Register
            </motion.button>
        </div>
    );
};