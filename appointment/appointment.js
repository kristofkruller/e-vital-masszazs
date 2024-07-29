import { eventDataCollector, bookEvent } from "./letsBook.js"

document.addEventListener("DOMContentLoaded", () => {
  const datePicker = document.getElementById("datePicker")

  // Az aktuális dátum lekérése és formázása YYYY-MM-DD formátumba
  const today = new Date().toISOString().split("T")[0]

  // Az input minimum értékének beállítása
  datePicker.setAttribute("min", today)

  document.getElementById("bookingForm").addEventListener("submit", async (e) => {
    const eventData = eventDataCollector(e)
    const res = await bookEvent(eventData)
    console.info(res)
  })
})



