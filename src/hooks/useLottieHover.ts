import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import create from "@lottiefiles/lottie-interactivity";

export const useLottieHover = (animationData: never) => {
  const lottieRef = useRef(null);
  useEffect(() => {
    let player = null;

    if (lottieRef.current) {
      player = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      create({
        player: player,
        mode: "cursor",
        actions: [
          {
            type: "hover",
            forceFlag: false,
          },
        ],
      });
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [animationData]);

  return [lottieRef];
};
