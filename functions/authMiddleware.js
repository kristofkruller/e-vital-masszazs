const { auth } = require('./firebase.js')

const authenticate = async (event) => {
  const authHeader = event.headers.authorization

  if(!authHeader || !authHeader.startsWith('Bearet ')) {
    throw new Error('Unauthorized')
  }

  const idToken = authHeader.split('Bearer ')[1]

  try {
    const decodedToken = await auth.verifyIdToken(idToken)
    const { email } = decodedToken

    const isAdmin = email === process.env.ADMIN_EMAIL
    return { email, isAdmin }
  } catch (error) {
    throw new Error('Unauthorized')
  }
}

module.exports = { authenticate }