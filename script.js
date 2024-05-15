document.addEventListener("DOMContentLoaded", function() {
  // menu
  const menu = document.querySelector(".menu");
  const menuToggle = document.querySelectorAll(".menu, .nav-list, .nav-list-item, .also, .evital, .social, .opening, .adatkezelesi, .hero-text-2, .appointment-btn");

  menu.addEventListener("click", function() {
    menuToggle.forEach(e => {
      if (e.classList.contains("show")) {
        // menu content
        if (e.classList.contains("menu")) e.innerText = e.innerText.replace("x", "Menü");

        // Disable transition for hiding
        e.classList.add("no-transition");
        e.classList.remove("show");

        // Trigger reflow to apply no-transition class immediately
        e.offsetHeight; // This line forces the browser to reflow

        // Re-enable transition for showing
        e.classList.remove("no-transition");
      } else {
        if (e.classList.contains("menu")) e.innerText = e.innerText.replace("Menü", "x");
        e.classList.add("show");
      }
    });
  });
});