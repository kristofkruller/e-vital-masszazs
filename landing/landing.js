document.addEventListener("DOMContentLoaded", function() {
  // landing menu
  const menu = document.querySelector("#landing .menu");
  const menuToggle = document.querySelectorAll("#landing .menu, #landing .nav-list, #landing .nav-list-item, #landing .also, #landing .evital, #landing .social, #landing .opening, #landing .adatkezelesi, #landing .hero-text-2, #landing .appointment-btn");

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