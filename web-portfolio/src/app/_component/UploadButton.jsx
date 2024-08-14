import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import resumeFile from '../../../public/assets/KellyPhan_Resume_2024.pdf';

const iconVariants = {
  from: { y: 0 },
  to: async (next) => {
    while (true) {
      await next({ y: -2 });
      await next({ y: 0 });
      await next({ y: 2 });
      await next({ y: 0 });
    }
  }
};

const UploadButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const uploadControls = useSpring({
    zIndex: isAnimating ? 0 : 1,
    top: isAnimating ? '0%' : '0%',
    config: { duration: 300 }
  });

  const loadingControls = useSpring({
    top: isAnimating ? '0%' : '-100%',
    config: { duration: 300, delay: isAnimating ? 0 : 1500 }
  });

  const doneControls = useSpring({
    top: isAnimating ? '100%' : '-100%',
    config: { duration: 300 },
    delay: isAnimating ? 0 : 1900 // Delay after loading animation completes
  });

  const loaderControls = useSpring({
    opacity: isAnimating ? 1 : 0,
    config: { duration: 300, delay: isAnimating ? 0 : 1500 }
  });

  const loadingBarControls = useSpring({
    width: isAnimating ? '100%' : '0%',
    config: { duration: 1350 }
  });

  const animate = async () => {
    setIsAnimating(true);
    // Perform your animation logic here
    // For example, you can wait for a timeout to simulate an animation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsAnimating(false);
  };

  return (
    <div className="upload-button">
      <div className="wrapper" onClick={() => !isAnimating && animate()}>
        <animated.div 
          className="upload"
          style={uploadControls}
        >
          <animated.div 
            style={iconVariants}
          />
          <div>
            <a className="font-satoshi" href={resumeFile} download="KellyPhan_Resume_2024.pdf" target="_blank" rel="noopener noreferrer">my resume</a>
          </div>
        </animated.div>

        <animated.div 
          className="loading"
          style={loadingControls}
        >
          <animated.div style={loaderControls} />
          <div>loading</div>
          <animated.div className="loading-bar font-satoshi" style={loadingBarControls} />
        </animated.div>
        
        <animated.div  
          className="done font-satoshi"
          style={doneControls}
        >
          <div> done</div>
        </animated.div>
      </div>
    </div>
  )
}

export default UploadButton;




