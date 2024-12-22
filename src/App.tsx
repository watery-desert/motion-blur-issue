import { motion, useAnimation } from 'motion/react';
import { useEffect, useState } from 'react';

function App() {

  const scaleOpacityMenuControl = useAnimation();

  const [isOpened, setOpen] = useState(false);

  const handleEnterHover = () => {
    setOpen(true);
  };

  const handleLeaveHover = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (isOpened) {
      scaleOpacityMenuControl.start({
        scale: 1,
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          type: 'spring',
          bounce: 0.6,
          stiffness: 300,
          damping: 20,
          mass: 1,
          filter: {},     // just adding empty `filter` fixes the Invalid keyframe issue
          delay: 0.3     // change this value to see in effect, the higher delay less blur visible.
        },
      });
    } else {
      scaleOpacityMenuControl.start({
        scale: 0.4,
        opacity: 0,
        y: -25,
        filter: 'blur(10px)',
        transition: {
          duration: 0.8,
          // filter: {},
          type: 'easeIn',
        },
      });
    }
  }, [isOpened, scaleOpacityMenuControl]);

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full ">
        <div
          className="bg-slate-700 rounded-lg flex items-center justify-center w-80 h-60"
          onMouseEnter={handleEnterHover}
          onMouseLeave={handleLeaveHover}
        >
          <motion.div
            className="rounded-lg flex items-center justify-center"
            style={{ opacity: 0 }}
            animate={scaleOpacityMenuControl}
          >
            <p className="text-white font-bold text-xl">Animated Text</p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
