import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset and Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
    padding-top: 85px;
  }

  /* CSS Variables */
  :root {
    --primary-gold: #D4AF37;
    --light-gold: #F4E9C1;
    --primary-color: #1C2951;
    --secondary-color: #D4AF37;
    --gradient-primary: linear-gradient(135deg, #1C2951 0%, #2B3F6B 100%);
    --gradient-secondary: linear-gradient(135deg, #E6C57F 0%, #D4AF37 100%);
  }

  /* Typography */
  .playfair {
    font-family: 'Playfair Display', serif;
  }

  .inter {
    font-family: 'Inter', sans-serif;
  }

  /* Common Section Styles */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }
  }

  .section {
    padding: 5rem 0;

    @media (max-width: 768px) {
      padding: 3rem 0;
    }
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .section-tag {
    display: inline-block;
    background: var(--secondary-color);
    color: var(--primary-color);
    padding: 0.6rem 1.8rem;
    border-radius: 2rem;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: clamp(2rem, 5vw, 2.5rem);
    color: var(--primary-color);
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .text-highlight {
    color: var(--secondary-color);
  }

  .section-description {
    font-size: 1.1rem;
    color: #64748b;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Button Styles */
  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--gradient-secondary);
    color: var(--primary-color);
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 700;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(230, 197, 127, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(230, 197, 127, 0.5);
      text-decoration: none;
      color: var(--primary-color);
    }
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    color: var(--secondary-color);
    padding: 0.8rem 2rem;
    border: 2px solid var(--secondary-color);
    border-radius: 50px;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: var(--secondary-color);
      color: var(--primary-color);
      transform: translateY(-2px);
      text-decoration: none;
    }
  }

  /* Animation Keyframes */
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  @keyframes glow {
    0%, 100% {
      text-shadow: 0 0 30px rgba(230, 197, 127, 0.8), 0 0 60px rgba(230, 197, 127, 0.5), 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 10px #fff;
    }
    50% {
      text-shadow: 0 0 40px rgba(230, 197, 127, 1), 0 0 80px rgba(230, 197, 127, 0.7), 0 4px 20px rgba(0, 0, 0, 0.8), 0 0 15px #fff;
    }
  }

  @keyframes scroll-logos {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.33%);
    }
  }

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #C5982D;
  }

  /* Selection Styles */
  ::selection {
    background: var(--secondary-color);
    color: white;
  }

  ::-moz-selection {
    background: var(--secondary-color);
    color: white;
  }

  /* Focus Styles */
  button:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--secondary-color);
    outline-offset: 2px;
  }

  /* Utility Classes */
  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .d-flex {
    display: flex;
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .gap-1 {
    gap: 1rem;
  }

  .gap-2 {
    gap: 2rem;
  }

  .mb-1 {
    margin-bottom: 1rem;
  }

  .mb-2 {
    margin-bottom: 2rem;
  }

  .mt-1 {
    margin-top: 1rem;
  }

  .mt-2 {
    margin-top: 2rem;
  }

  /* Back to Top Button */
  .back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--gradient-secondary);
    color: var(--primary-color);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(230, 197, 127, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);

    &.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(230, 197, 127, 0.5);
    }

    i {
      font-size: 1.2rem;
    }
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    body {
      padding-top: 75px;
    }
  }

  @media (max-width: 768px) {
    body {
      padding-top: 65px;
    }

    .container {
      padding: 0 1rem;
    }

    .section {
      padding: 3rem 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-description {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    body {
      padding-top: 60px;
    }

    .container {
      padding: 0 0.75rem;
    }

    .section {
      padding: 2rem 0;
    }

    .section-title {
      font-size: 1.8rem;
    }

    .btn-primary,
    .btn-secondary {
      padding: 0.7rem 1.5rem;
      font-size: 0.9rem;
    }
  }
`;

export default GlobalStyles;
