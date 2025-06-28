import { signInWithEmailAndPassword, signOut, onAuthStateChanged, type User } from 'firebase/auth'
import { ref, computed, readonly } from 'vue'

export const useAuth = () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const authReady = ref(false)

  // Computed properties
  const isAuthenticated = computed(() => !!user.value)
  const isAdmin = computed(() => user.value?.email === 'admin@guzel.com')

  // Initialize auth state listener
  const initAuth = () => {
    // Only run on client side
    if (process.server) {
      return () => {}
    }

    try {
      const { $firebase } = useNuxtApp()
      
      // Check if Firebase is available
      if (!$firebase || !$firebase.auth) {
        console.warn('Firebase not initialized yet')
        return () => {} // Return empty cleanup function
      }

      const unsubscribe = onAuthStateChanged($firebase.auth, async (firebaseUser) => {
        user.value = firebaseUser
        authReady.value = true
        
        if (firebaseUser) {
          try {
            const idToken = await firebaseUser.getIdToken()
            token.value = idToken
            
            // Store token in localStorage for persistence
            if (process.client) {
              localStorage.setItem('authToken', idToken)
              localStorage.setItem('userEmail', firebaseUser.email || '')
            }
          } catch (err) {
            console.error('Error getting token:', err)
          }
        } else {
          token.value = null
          if (process.client) {
            localStorage.removeItem('authToken')
            localStorage.removeItem('userEmail')
          }
        }
      })

      return unsubscribe
    } catch (err) {
      console.error('Error initializing auth:', err)
      authReady.value = true // Mark as ready even if there's an error
      return () => {} // Return empty cleanup function
    }
  }

  // Wait for auth to be ready
  const waitForAuth = async (timeout = 2000): Promise<boolean> => {
    if (authReady.value) {
      return true
    }

    return new Promise((resolve) => {
      const startTime = Date.now()
      
      const checkAuth = () => {
        if (authReady.value) {
          resolve(true)
          return
        }
        
        if (Date.now() - startTime > timeout) {
          console.warn('Auth initialization timeout')
          resolve(false)
          return
        }
        
        setTimeout(checkAuth, 50)
      }
      
      checkAuth()
    })
  }

  // Login function
  const login = async (email: string, password: string) => {
    // Only run on client side
    if (process.server) {
      return { success: false, error: 'Cannot login on server side' }
    }

    loading.value = true
    error.value = null
    
    try {
      const { $firebase } = useNuxtApp()
      
      // Check if Firebase is available
      if (!$firebase || !$firebase.auth) {
        throw new Error('Firebase not initialized')
      }

      const userCredential = await signInWithEmailAndPassword($firebase.auth, email, password)
      const idToken = await userCredential.user.getIdToken()
      
      token.value = idToken
      if (process.client) {
        localStorage.setItem('authToken', idToken)
        localStorage.setItem('userEmail', email)
      }
      
      return { success: true, user: userCredential.user }
    } catch (err: any) {
      // Provide more specific error messages
      let errorMessage = 'حدث خطأ أثناء تسجيل الدخول'
      
      if (err.code) {
        switch (err.code) {
          case 'auth/user-not-found':
            errorMessage = 'البريد الإلكتروني غير مسجل'
            break
          case 'auth/wrong-password':
            errorMessage = 'كلمة المرور غير صحيحة'
            break
          case 'auth/invalid-email':
            errorMessage = 'البريد الإلكتروني غير صحيح'
            break
          case 'auth/too-many-requests':
            errorMessage = 'تم تجاوز عدد المحاولات المسموح، يرجى المحاولة لاحقاً'
            break
          case 'auth/user-disabled':
            errorMessage = 'تم تعطيل هذا الحساب'
            break
          case 'auth/invalid-credential':
            errorMessage = 'بيانات الدخول غير صحيحة'
            break
          case 'auth/network-request-failed':
            errorMessage = 'خطأ في الاتصال بالشبكة'
            break
          default:
            errorMessage = err.message || errorMessage
        }
      } else {
        errorMessage = err.message || errorMessage
      }
      
      error.value = errorMessage
      return { success: false, error: errorMessage }
    } finally {
      loading.value = false
    }
  }

  // Logout function
  const logout = async () => {
    // Only run on client side
    if (process.server) {
      return
    }

    loading.value = true
    try {
      const { $firebase } = useNuxtApp()
      
      // Check if Firebase is available
      if (!$firebase || !$firebase.auth) {
        throw new Error('Firebase not initialized')
      }

      await signOut($firebase.auth)
      user.value = null
      token.value = null
      if (process.client) {
        localStorage.removeItem('authToken')
        localStorage.removeItem('userEmail')
      }
      
      // Navigate to login page
      await navigateTo('/login')
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // Get current token (for API calls)
  const getToken = async (): Promise<string | null> => {
    if (user.value) {
      try {
        const idToken = await user.value.getIdToken(true) // Force refresh
        token.value = idToken
        if (process.client) {
          localStorage.setItem('authToken', idToken)
        }
        return idToken
      } catch (err) {
        console.error('Error refreshing token:', err)
        return null
      }
    }
    return token.value
  }

  // Check if user is authenticated (for route guards)
  const requireAuth = async () => {
    await waitForAuth()
    if (!isAuthenticated.value) {
      await navigateTo('/login')
      return false
    }
    return true
  }

  // Check if user is admin (for admin routes)
  const requireAdmin = async () => {
    await waitForAuth()
    if (!isAuthenticated.value) {
      await navigateTo('/login')
      return false
    }
    
    if (!isAdmin.value) {
      await navigateTo('/')
      return false
    }
    
    return true
  }

  return {
    // State
    user: readonly(user),
    token: readonly(token),
    loading: readonly(loading),
    error: readonly(error),
    authReady: readonly(authReady),
    
    // Computed
    isAuthenticated,
    isAdmin,
    
    // Methods
    login,
    logout,
    getToken,
    requireAuth,
    requireAdmin,
    initAuth,
    waitForAuth
  }
} 