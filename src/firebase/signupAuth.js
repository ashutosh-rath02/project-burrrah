import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ref, set } from 'firebase/database'

import { auth, database } from './firebase'

export const signUpWithEmailAndPassword = async (email, password, name) => {
  try {
    // Creating user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // adding name to db
    const userRef = ref(database, `users/${user.uid}`)
    await set(userRef, {
      name: name,
      email: user.email
    })

    return user
  } catch (error) {
    //console.error('Error signing up:', error.message)
    throw error
  }
}

export const signUpWithGoogle = async () => {
  try {
    // Configure Google provider
    const provider = new GoogleAuthProvider()

    // Sign in with Google
    const userCredential = await signInWithPopup(auth, provider)
    const user = userCredential.user

    // Check if user already exists in the database
    const userRef = ref(database, `users/${user.uid}`)
    const snapshot = await get(userRef)

    // If user doesn't exist, add them to the database
    if (!snapshot.exists()) {
      await set(userRef, {
        name: user.displayName,
        email: user.email
      })
    }

    return user
  } catch (error) {
    //console.error('Error signing up with Google:', error.message)
    throw error
  }
}
