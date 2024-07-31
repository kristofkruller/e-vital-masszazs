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

    // Ellenőrzés, hogy nincs-e ütközés
    const ref = db.ref('events');
    const snapshot = await ref.once('value');
    const events = snapshot.val();
    let isConflict = false;

    if (events) {
      Object.keys(events).forEach(key => {
        const event = events[key];
        if ((newEvent.begin < event.end && newEvent.end > event.begin)) {
          isConflict = true;
        }
      });
    }

    if (isConflict) {
      return {
        statusCode: 409,
        body: JSON.stringify({ message: 'Az időpont már foglalt' })
      };
    }

     // Új esemény mentése
     const newEventRef = ref.push(); // új esemény hivatkozást hoz létre
     newEventRef.set(newEvent); // menti az adatokat
 
     return {
       statusCode: 201,
       body: JSON.stringify({ message: 'Időpont sikeresen lefoglalva', id: newEventRef.key })
     };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    }
  }
}
