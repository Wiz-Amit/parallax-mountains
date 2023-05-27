import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import background from "./assets/background.png";
import blackShadow from "./assets/black_shadow.png";
import fog1 from "./assets/fog_1.png";
import fog2 from "./assets/fog_2.png";
import fog3 from "./assets/fog_3.png";
import fog4 from "./assets/fog_4.png";
import fog5 from "./assets/fog_5.png";
import fog6 from "./assets/fog_6.png";
import fog7 from "./assets/fog_7.png";
import mountain1 from "./assets/mountain_1.png";
import mountain10 from "./assets/mountain_10.png";
import mountain2 from "./assets/mountain_2.png";
import mountain3 from "./assets/mountain_3.png";
import mountain4 from "./assets/mountain_4.png";
import mountain5 from "./assets/mountain_5.png";
import mountain6 from "./assets/mountain_6.png";
import mountain7 from "./assets/mountain_7.png";
import mountain8 from "./assets/mountain_8.png";
import mountain9 from "./assets/mountain_9.png";
import sunRays from "./assets/sun_rays.png";

const s = (shiftBy) => `-${50 + shiftBy}%`;

function App() {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const springX = useSpring(x, { stiffness: 300, damping: 100 });
  const springY = useSpring(y, { stiffness: 300, damping: 100 });

  const { innerWidth: w, innerHeight: h } = window;

  const translateX1 = useTransform(springX, [0, w], [s(-8), s(8)]);
  const translateY1 = useTransform(springY, [0, h], ["-43%", "-55%"]);

  const translateX2 = useTransform(springX, [0, w], [s(-9.5), s(9.5)]);
  const translateY2 = useTransform(springY, [0, h], ["-40.5%", "-59.5%"]);

  const translateX3 = useTransform(springX, [0, w], [s(-9), s(9)]);
  const translateY3 = useTransform(springY, [0, h], [s(-9), s(9)]);

  const translateX4 = useTransform(springX, [0, w], [s(-8.5), s(8.5)]);
  const translateY4 = useTransform(springY, [0, h], [s(-8.5), s(8.5)]);

  const translateX5 = useTransform(springX, [0, w], [s(-8), s(8)]);
  const translateY5 = useTransform(springY, [0, h], [s(-8), s(8)]);

  const translateX6 = useTransform(springX, [0, w], [s(-7.5), s(7.5)]);
  const translateY6 = useTransform(springY, [0, h], [s(-7.5), s(7.5)]);

  const translateX7 = useTransform(springX, [0, w], [s(-7), s(7)]);
  const translateY7 = useTransform(springY, [0, h], [s(-7), s(7)]);

  const translateX8 = useTransform(springX, [0, w], [s(-6.5), s(6.5)]);
  const translateY8 = useTransform(springY, [0, h], [s(-6.5), s(6.5)]);

  const translateX9 = useTransform(springX, [0, w], [s(-6), s(6)]);
  const translateY9 = useTransform(springY, [0, h], [s(-6), s(6)]);

  const translateX10 = useTransform(springX, [0, w], [s(-5.5), s(5.5)]);
  const translateY10 = useTransform(springY, [0, h], [s(-5.5), s(5.5)]);

  const translateX11 = useTransform(springX, [0, w], [s(-5), s(5)]);
  const translateY11 = useTransform(springY, [0, h], [s(-5), s(5)]);

  const translateX12 = useTransform(springX, [0, w], [s(-4.5), s(4.5)]);
  const translateY12 = useTransform(springY, [0, h], [s(-4.5), s(4.5)]);

  const translateX13 = useTransform(springX, [0, w], [s(-4), s(4)]);
  const translateY13 = useTransform(springY, [0, h], [s(-4), s(4)]);

  const translateX14 = useTransform(springX, [0, w], [s(-3.5), s(3.5)]);
  const translateY14 = useTransform(springY, [0, h], [s(-3.5), s(3.5)]);

  const translateX15 = useTransform(springX, [0, w], [s(-3), s(3)]);
  const translateY15 = useTransform(springY, [0, h], [s(-3), s(3)]);

  const translateX16 = useTransform(springX, [0, w], [s(-2.5), s(2.5)]);
  const translateY16 = useTransform(springY, [0, h], [s(-2.5), s(2.5)]);

  const translateX17 = useTransform(springX, [0, w], [s(-2), s(2)]);
  const translateY17 = useTransform(springY, [0, h], [s(-2), s(2)]);

  const translateX18 = useTransform(springX, [0, w], [s(-1.5), s(1.5)]);
  const translateY18 = useTransform(springY, [0, h], [s(-1.5), s(1.5)]);

  const handleMouseMove = (event) => {
    const { pageX, pageY } = event;

    x.set(pageX);
    y.set(pageY);

    console.log(pageX, pageY);
  };

  return (
    <div
      className="relative h-[60vh] md:h-screen w-screen select-none overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.img
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={background}
        className="absolute left-[60%] top-1/4 h-full w-full transform-gpu object-cover"
        style={{
          translateX: translateX1,
          translateY: translateY1,
          scale: 1.6,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={fog7}
        className="absolute left-1/2 top-1/2 h-full w-full transform-gpu object-cover"
        style={{
          translateX: translateX2,
          translateY: translateY2,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={mountain10}
        className="absolute -bottom-[25%] left-[56%] h-1/2 transform-gpu"
        style={{
          translateX: translateX3,
          translateY: translateY3,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={fog6}
        className="absolute left-1/2 top-1/2 h-full w-full transform-gpu object-cover opacity-20"
        style={{
          translateX: translateX4,
          translateY: translateY4,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={mountain9}
        className="absolute -bottom-[25%] left-[15%] h-1/2 transform-gpu"
        style={{
          translateX: translateX5,
          translateY: translateY5,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={mountain8}
        className="absolute -bottom-[15%] left-[28%] h-1/2 transform-gpu"
        style={{
          translateX: translateX6,
          translateY: translateY6,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={fog5}
        className="absolute left-1/2 top-1/2 h-full w-full transform-gpu object-cover opacity-10"
        style={{
          translateX: translateX7,
          translateY: translateY7,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={mountain7}
        className="absolute -bottom-[30%] left-[65%] h-1/2 transform-gpu"
        style={{
          translateX: translateX8,
          translateY: translateY8,
          scale: 1.5,
        }}
      />

      <div className="text-container absolute left-0 top-0 flex h-full w-full select-all flex-col items-center justify-center pb-[25vw] md:pb-[8vw] text-white">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2, delay: 1 }}
          className="text-[10vw] font-[100] uppercase"
        >
          China
        </motion.h2>
        <motion.h1
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2, delay: 1 }}
          className="-mt-[5vw] text-[9vw] font-[700] uppercase tracking-wider"
        >
          Zhangjiajie
        </motion.h1>
      </div>

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={mountain6}
        className="absolute -bottom-[25%] right-[0%] h-[60%] scale-150 transform-gpu"
        style={{
          translateX: translateX9,
          translateY: translateY9,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={fog4}
        className="absolute left-1/2 top-1/2 h-full w-full transform-gpu object-cover opacity-20"
        style={{
          translateX: translateX10,
          translateY: translateY10,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={mountain5}
        className="absolute -bottom-[40%] left-[50%] h-[46%] scale-150 transform-gpu"
        style={{
          translateX: translateX11,
          translateY: translateY11,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={fog3}
        className="absolute left-1/2 top-1/2 h-full w-full transform-gpu object-cover opacity-20"
        style={{
          translateX: translateX12,
          translateY: translateY12,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={mountain4}
        className="absolute -bottom-[35%] left-[20%] h-[46%] scale-150 transform-gpu"
        style={{
          translateX: translateX13,
          translateY: translateY13,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={mountain3}
        className="absolute -bottom-[15%] right-[-12%] h-[46%] scale-150 transform-gpu"
        style={{
          translateX: translateX14,
          translateY: translateY14,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={fog2}
        className="absolute left-1/2 top-1/2 h-full w-full transform-gpu object-cover opacity-10"
        style={{
          translateX: translateX15,
          translateY: translateY15,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={mountain2}
        className="absolute -bottom-[20%] right-[-5%] h-[46%] scale-150 transform-gpu"
        style={{
          translateX: translateX16,
          translateY: translateY16,
          scale: 1.5,
        }}
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={mountain1}
        className="absolute -bottom-[20%] left-[5%] h-[60%] scale-150 transform-gpu"
        style={{
          translateX: translateX17,
          translateY: translateY17,
          scale: 1.8,
        }}
      />

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={sunRays}
        className="absolute top-0 h-full w-full transform-gpu object-cover opacity-70"
      />

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={blackShadow}
        className="absolute top-0 h-full w-full transform-gpu object-cover"
      />

      <motion.img
        initial={{ y: 150, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        src={fog1}
        className="absolute left-1/2 top-1/2 h-full w-full transform-gpu object-cover opacity-20"
        style={{
          translateX: translateX18,
          translateY: translateY18,
          scale: 1.5,
        }}
      />

      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{
          boxShadow: "inset 0px 0px 85px rgba(0,0,0,0.4)",
        }}
      ></div>
    </div>
  );
}

export default App;
