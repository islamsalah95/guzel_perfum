import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

export default defineNuxtPlugin(() => {
  // Only run on client side
  if (process.server) {
    return {
      provide: {
        firebase: null
      }
    }
  }

  try {
    const firebaseConfig = {
      apiKey: "AIzaSyDZ35D_lzSnyA3XjDmFQK2R3exf9MfOhtE",
      authDomain: "guzel-1f032.firebaseapp.com",
      databaseURL: "https://guzel-1f032-default-rtdb.firebaseio.com",
      projectId: "guzel-1f032",
      storageBucket: "guzel-1f032.firebasestorage.app",
      messagingSenderId: "807520094966",
      appId: "1:807520094966:web:6f793f4461f093d48d3ad7",
      measurementId: "G-50HV2FT04R"
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const database = getDatabase(app)

    return {
      provide: {
        firebase: {
          auth,
          database,
          app
        }
      }
    }
  } catch (error) {
    console.error('Error initializing Firebase:', error)
    return {
      provide: {
        firebase: null
      }
    }
  }
}) 