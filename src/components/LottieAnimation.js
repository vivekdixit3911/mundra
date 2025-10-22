import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const AnimationContainer = styled.div`
  width: ${props => props.width || "300px"};
  height: ${props => props.height || "300px"};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LottieAnimation = ({ src, width, height, autoplay = true, loop = true }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !src) return;

    // Load the Lottie library if not already loaded
    const loadLottieScript = () => {
      return new Promise((resolve) => {
        if (window.lottie) {
          resolve();
          return;
        }

        // Check if script is already being loaded
        if (document.querySelector('script[src*="lottie-web"]')) {
          const checkLottie = setInterval(() => {
            if (window.lottie) {
              clearInterval(checkLottie);
              resolve();
            }
          }, 100);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    const loadAnimation = async () => {
      try {
        await loadLottieScript();
        
        if (window.lottie && containerRef.current) {
          // Fetch the JSON file
          const response = await fetch(src);
          if (!response.ok) {
            throw new Error(`Failed to fetch animation: ${response.status}`);
          }
          const animationData = await response.json();
          
          const anim = window.lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: loop,
            autoplay: autoplay,
            animationData: animationData,
          });

          return anim;
        }
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
        // Show a simple fallback instead of error state
        if (containerRef.current) {
          containerRef.current.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 2rem;">🎨</div>';
        }
      }
    };

    let anim = null;
    loadAnimation().then((animation) => {
      anim = animation;
    });

    return () => {
      if (anim) {
        anim.destroy();
      }
    };
  }, [src, autoplay, loop]);

  return (
    <AnimationContainer 
      ref={containerRef} 
      width={width} 
      height={height}
    />
  );
};

export default LottieAnimation;