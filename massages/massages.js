function toggler (trigger, collection) {
  trigger.addEventListener("click", function() {
    collection.forEach(element => {
      element.classList.toggle("show");
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.querySelector(".toggle-button");
  const elements = document.querySelectorAll(".nav-list, .nav-list-item, .also, .evital, .social, .opening, .adatkezelesi");

  toggler(toggleButton, elements);
});