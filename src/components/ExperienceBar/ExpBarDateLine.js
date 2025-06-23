import { motion } from "motion/react";

export default function DateLine(props) {

    return (
        <motion.div
          style={{
            position: 'absolute',
            left: props.positionLeft,
            width: '2px',
            height: '28px',
            borderRadius: '3px',
            background: 'rgba(148, 200, 255, 1)',
            filter: 'blur(1px)'
          }}
        />
    );
}