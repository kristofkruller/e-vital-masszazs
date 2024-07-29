const { db } = require("./firebase.js")
const { reqValidator } = require("./utils.js")

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    }
  }

  try {
    const newEvent = JSON.parse(event.body)
    if (!reqValidator(newEvent)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Kötelező mezők nincsenek kitöltve" }),
      }
    }

    const snapshot = await db
      .collection("events")
      .where("begin", "<=", newEvent.end)
      .where("end", ">=", newEvent.begin)
      .get()

    if (!snapshot.empty) {
      return {
        statusCode: 409,
        body: JSON.stringify({
          message:
            "A megadott időintervallum már foglalt egy létező esemény által",
        }),
      }
    }

    await db.collection("events").add(newEvent)

    return {
      statusCode: 201,
      body: JSON.stringify(newEvent),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}
