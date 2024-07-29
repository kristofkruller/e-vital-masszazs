export function eventDataCollector(event) {
  event.preventDefault()

  const date = document.getElementById("datePicker").value
  const beginTime = document.getElementById("startTime").value
  const massage = document.getElementById("massage").value

  const email = document.getElementById("email").value
  const name = document.getElementById("name").value
  const phone = document.getElementById("phone").value

  const begin = new Date(`${date}T${beginTime}:00Z`)
  const end = new Date(begin.getTime() + 90 * 60 * 1000)
  const cdate = new Date().toISOString()

  const eventData = {
    date,
    begin,
    end,
    cdate,
    email,
    name,
    phone,
    massage,
  }

  return eventData
}

export async function bookEvent(eventData) {
  const response = await fetch("/.netlify/functions/letsBook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  })

  const result = await response.json()
  if (!response.ok) {
    throw new Error(result.message)
  }

  return result
}
