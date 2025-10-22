// Lottie Animation Library
// Usage: include this JS with a <script src="/includes/lottie-animations.js"></script>
// and add data-lottie attributes to any container div.

// Ensure the dotlottie webcomponent is loaded on the page before this script runs.
const lottieAnimations = {
  // Hero / Homepage - Abstract hero animation
  "hero-abstract": {
    src: "https://lottie.host/ef1d7d85-dde0-4c27-a810-839b07a7524a/wI6JcFwH1y.lottie",
    width: "300px",
    height: "300px",
  },

  // Services - Feature / services illustration
  "services-feature": {
    src: "https://lottie.host/d6ca2f15-5f11-4a30-a93f-66410897345a/eExdWk7hWe.lottie",
    width: "300px",
    height: "300px",
  },

  // Icon / Accent - small looping icon
  "icon-accent": {
    src: "https://lottie.host/f8bb28da-727b-4136-bb42-fdb443e14506/jL6mOPg2bK.lottie",
    width: "300px",
    height: "300px",
  },

  // Contact / CTA - handshake / connect animation
  "contact-connect": {
    src: "https://lottie.host/8d9a8d8a-8b77-4c07-ab09-a6001c90fd5e/EFZQyaOAzd.lottie",
    width: "300px",
    height: "300px",
  },

  // Legal Documents
  "legal-documents": {
    src: "https://lottie.host/a9d1932b-a76e-4018-ac59-2cea2224c812/g6AAJ5F0wu.lottie",
    width: "300px",
    height: "300px",
  },

  // Business Growth / Metrics
  "business-growth": {
    src: "https://lottie.host/bbe018c8-4581-41d6-abc5-1ce8fd8cc3c5/0qlZ2tqGl9.lottie",
    width: "300px",
    height: "300px",
  },

  // Legal Consultation
  "legal-consultation": {
    src: "https://lottie.host/c195821a-b69d-4b7d-b98d-7ed787ceb0f0/ulNalBOVgu.lottie",
    width: "300px",
    height: "300px",
  },

  // Company Registration / Onboarding
  "company-registration": {
    src: "https://lottie.host/608bb0ee-75d0-4c06-bbc6-fffd96c00e3a/6TWHywiLM0.lottie",
    width: "300px",
    height: "300px",
  },

  // Legal Services
  "legal-services": {
    src: "https://lottie.host/3c3cb7ee-7106-430f-9451-202c033965c9/drWrh1bZhB.lottie",
    width: "300px",
    height: "300px",
  },

  // Business Analytics
  "business-analytics": {
    src: "https://lottie.host/aa67c09e-32f8-473b-9255-419e321b484b/9BXu5Bhfyw.lottie",
    width: "300px",
    height: "300px",
  },

  // World Trade / Global
  "global-trade": {
    src: "https://lottie.host/297c24ce-8977-4a9a-97c0-2cc005016993/4KX0MA0YAd.lottie",
    width: "300px",
    height: "300px",
  },

  // Investment Growth
  "investment-growth": {
    src: "https://lottie.host/4c07e908-ca58-44c5-92bb-1ac770adc086/F0TEajCvsT.lottie",
    width: "300px",
    height: "300px",
  },

  // Business Team / People
  "team-collaboration": {
    src: "https://lottie.host/e22c2746-b465-41f9-9f1c-b8e0dc0d5ec2/PDjV3Pgj0u.lottie",
    width: "300px",
    height: "300px",
  },

  // New animations from Drafts folder
  "business-analytics": {
    src: "/assets/Drafts/Business analytics animation.json",
    width: "300px",
    height: "300px",
  },

  "business-team": {
    src: "/assets/Drafts/Business team.json",
    width: "300px",
    height: "300px",
  },

  "business": {
    src: "/assets/Drafts/Business.json",
    width: "300px",
    height: "300px",
  },

  "faq-web-page": {
    src: "/assets/Drafts/FAQ web page.json",
    width: "300px",
    height: "300px",
  },

  "investment": {
    src: "/assets/Drafts/Investment.json",
    width: "300px",
    height: "300px",
  },

  "light-bulb": {
    src: "/assets/Drafts/light bulb.json",
    width: "300px",
    height: "300px",
  },

  "world-map": {
    src: "/assets/Drafts/World map, Tallinn.json",
    width: "300px",
    height: "300px",
  },

  "registration": {
    src: "/assets/Drafts/registration.json",
    width: "300px",
    height: "300px",
  },

  "man-robot-workplace": {
    src: "/assets/Drafts/Man and robot with computers sitting together in workplace.json",
    width: "300px",
    height: "300px",
  },
};

function loadLottieAnimation(
  animationName,
  targetElementId,
  customWidth = null,
  customHeight = null,
) {
  const animation = lottieAnimations[animationName];
  if (!animation) {
    console.error(`Lottie animation "${animationName}" not found!`);
    return;
  }
  const targetElement = document.getElementById(targetElementId);
  if (!targetElement) {
    console.error(`Target element with ID "${targetElementId}" not found!`);
    return;
  }
  const width = customWidth || animation.width;
  const height = customHeight || animation.height;
  targetElement.innerHTML = `\n        <dotlottie-wc src="${animation.src}" style="width: ${width}; height: ${height};" autoplay loop></dotlottie-wc>\n    `;
}

function initLottieAnimations() {
  document.querySelectorAll("[data-lottie]").forEach((element) => {
    const animationName = element.getAttribute("data-lottie");
    const customWidth = element.getAttribute("data-lottie-width");
    const customHeight = element.getAttribute("data-lottie-height");
    const animation = lottieAnimations[animationName];
    if (!animation) {
      console.error(`Lottie animation "${animationName}" not found!`);
      return;
    }
    const width = customWidth || animation.width;
    const height = customHeight || animation.height;
    element.innerHTML = `\n            <dotlottie-wc src="${animation.src}" style="width: ${width}; height: ${height};" autoplay loop></dotlottie-wc>\n        `;
  });
}

// Wait for dotlottie component to be defined and DOM ready
function whenReady(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      // Ensure dotlottie webcomponent has been registered
      setTimeout(callback, 50);
    });
  } else {
    setTimeout(callback, 50);
  }
}

whenReady(initLottieAnimations);

// Expose for manual use
window.loadLottieAnimation = loadLottieAnimation;
window.lottieAnimations = lottieAnimations;
