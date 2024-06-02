document.addEventListener("DOMContentLoaded", function() {
  // landing menu
  const menu = document.querySelector(".menuOpener");
  // console.log(menu);
  const menuToggle = document.querySelectorAll(".menuOpener, .nav-list, .nav-list-item, .also, .evital, .social, .opening, .adatkezelesi, .hero-text-2, .appointment-btn");

  menu.addEventListener("click", function() {
    menuToggle.forEach(e => {
      if (e.classList.contains("show")) {
        // landing menu content
        if (e.classList.contains("menuOpener") && e.classList.contains("landing")) e.innerText = e.innerText.replace("x", "Menü");

        // Disable transition for hiding
        e.classList.add("no-transition");
        e.classList.remove("show");
        if (e.classList.contains("toggle-button")) e.classList.add("close");
        // Trigger reflow to apply no-transition class immediately
        e.offsetHeight; // This line forces the browser to reflow

        // Re-enable transition for showing
        e.classList.remove("no-transition");
      } else {
        // landing menu content
        if (e.classList.contains("menuOpener") && e.classList.contains("landing")) e.innerText = e.innerText.replace("Menü", "x");
        if (e.classList.contains("toggle-button")) e.classList.remove("close");
        e.classList.add("show");
      }
    });
  });
});