import * as motion from "motion/react-client";
import React, {RefObject} from "react";
import {fadeIn} from "../../variants.tsx";
import "./About.css";
import {Stack} from "@mui/joy";
import Chip from '@mui/material/Chip';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import SchoolIcon from '@mui/icons-material/School';

interface AboutProps {
    scrollHandler: (eleRef: React.RefObject<HTMLDivElement>) => void;
    connect: RefObject<HTMLDivElement>;
}

export const About = ({scrollHandler, connect}: AboutProps) => {
    return (
        <div className="container">
            <motion.div
                variants={fadeIn("up", 1.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.7}}
                className="glass-div"
            >
                {/* Upper Text Animation */}
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.7}}
                >
                    EMPOWERING SPECIAL CHILDREN ONE STEP AT A TIME
                </motion.div>

                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.7}}
                >
                    <p className="subheader">AT MENTORSHEEP WE PROVIDE</p>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.7}}
                >
                    <Stack direction="row" spacing={1} className="stack">
                        <Chip icon={<SchoolIcon/>} label="Guidance" color="success" className="chip" />
                        <Chip icon={<ChildCareIcon/>} label="CARE" color="success" className="chip" />
                        <Chip icon={<ForkRightIcon/>} label="POSSIBILITY" color="success" className="chip" />
                    </Stack>
                </motion.div>

                {/* Register Button Animation */}
                <motion.button
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{delay: 1, duration: 0.3}}
                    className="register-button"
                    onClick={() => {
                        scrollHandler(connect);
                    }}
                >
                    Register
                </motion.button>
            </motion.div>
        </div>
    );
};
