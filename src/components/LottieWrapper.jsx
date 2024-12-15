import React from 'react';
import { Player } from '@lottie-react/player'; // Import from lottie-react

function LottieWrapper({ animationData, loop = true, autoplay = true, style = {} }) {
  return (
    <Player
      autoplay={autoplay}
      loop={loop}
      src={animationData} // Path to your Lottie JSON file
      style={style}
    />
  );
}

export default LottieWrapper;
