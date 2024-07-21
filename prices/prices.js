document.addEventListener("DOMContentLoaded", () => {
  //POPUP
  const popup = document.querySelector(".popup")
  const closePopUp = document.querySelector(".popup-close")
  const popUpContent = document.querySelector(".popup-content")
  let currentIcon = null

  const showPopUp = (e) => {
    const icon = e.target
    const infoContent = icon.getAttribute("data-info")
    if (infoContent) {
      popUpContent.textContent = infoContent
      const x = e.pageX
      const y = e.pageY
      popup.style.top = `${y + 5}px`
      popup.style.left = window.innerWidth > 1024 ? (`${x}px`) : (`${window.innerWidth/2}px`) 
      popup.style.display = "block"
      currentIcon = icon
    }
  }

  const hidePopUp = () => {
    popup.style.display = "none"
    popUpContent.textContent = ""
    currentIcon = null
  }

  // Attach event listeners to all .fa-info icons
  const infoIcons = document.querySelectorAll(".fa-info")
  infoIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      event.stopPropagation() // Prevent the event from reaching the document click handler
      if (currentIcon === icon) {
        hidePopUp()
      } else {
        showPopUp(event)
      }
    })
  })

  // Hide the popup when clicking x || outside
  closePopUp.addEventListener("click", hidePopUp)
  document.addEventListener("click", hidePopUp)
})
