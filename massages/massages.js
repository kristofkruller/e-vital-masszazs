  import { fadeIn } from "../script.js"
  
  document.addEventListener('DOMContentLoaded', () => {
    //EFFECTS
    const fadeLeft = fadeIn("fadeInLeft")
    document
      .querySelectorAll(".massage-container")
      .forEach((block) => fadeLeft.observe(block))
  })