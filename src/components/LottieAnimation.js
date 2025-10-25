import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const AnimationContainer = styled.div`
  /* Use the provided width but never overflow the parent. Allow the SVG injected by lottie to scale. */
  width: ${props => props.width || "300px"};
  max-width: 100%;
  height: auto;
  max-height: ${props => props.height || "300px"};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Ensure the injected SVG scales responsively */
  svg {
    width: 100% !important;
    height: auto !important;
    display: block;
  }
`;

const LottieAnimation = ({ src, width, height, autoplay = true, loop = true }) => {
  const containerRef = useRef(null);
  const animRef = useRef(null);

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
          // Ensure previous animation is destroyed and container cleared to avoid duplicate SVGs
          if (animRef.current) {
            try { animRef.current.destroy(); } catch (e) { /* ignore */ }
            animRef.current = null;
          }
          containerRef.current.innerHTML = '';

          // Fetch the JSON file
          const response = await fetch(src);
          if (!response.ok) {
            throw new Error(`Failed to fetch animation: ${response.status}`);
          }
          const animationData = await response.json();

          const anim = window.lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: loop,
            autoplay: autoplay,
            animationData: animationData,
          });

          animRef.current = anim;
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

    loadAnimation();

    return () => {
      if (animRef.current) {
        try { animRef.current.destroy(); } catch (e) { /* ignore */ }
        animRef.current = null;
      }
      if (containerRef.current) containerRef.current.innerHTML = '';
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