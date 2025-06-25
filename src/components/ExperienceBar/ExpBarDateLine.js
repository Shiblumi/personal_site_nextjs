// import { motion } from 'motion/react';
// import { useNavbarContext } from '@/components/Navbar/NavbarContext';

// export default function DateLine({ positionLeft, delay }) {
//   const { activeSection } = useNavbarContext();
//   const shouldAnimate = activeSection === 2;

//   const dateLineVariants = {
//     hidden: { opacity: 0, scale: 0.9, height: 0 },
//     visible: { opacity: 1, scale: 1, height: 28 },
//   };

//   return (
//     <motion.div
//       style={{
//         position: 'absolute',
//         left: positionLeft,
//         width: '2px',
//         height: '28px',
//         borderRadius: '3px',
//         background: 'rgba(148, 200, 255, 1)',
//         filter: 'blur(1px)',
//       }}
//       variants={dateLineVariants}
//       initial="hidden"
//       animate={shouldAnimate ? 'visible' : 'hidden'}
//       transition={{
//         duration: 0.3,
//         delay: shouldAnimate ? delay : 0,
//         ease: 'easeOut',
//       }}
//     />
//   );
// }
