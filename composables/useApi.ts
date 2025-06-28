import { ref, readonly } from 'vue'
import { useAuth } from '~/composables/useAuth'

export const useApi = () => {
  const { getToken } = useAuth()
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Helper function to get headers with auth token
  const getAuthHeaders = async () => {
    const token = await getToken()
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    }
  }

  // Generic API call function
  const apiCall = async <T>(
    url: string, 
    options: RequestInit = {}
  ): Promise<T> => {
    loading.value = true
    error.value = null

    try {
      const headers = await getAuthHeaders()
      
      const response = await $fetch<T>(url, {
        ...options,
        headers: {
          ...headers,
          ...options.headers
        }
      })

      return response
    } catch (err: any) {
      error.value = err.message || 'An error occurred'
      throw err
    } finally {
      loading.value = false
    }
  }

  // GET request
  const get = <T>(url: string, params?: Record<string, any>): Promise<T> => {
    return apiCall<T>(url, {
      method: 'GET',
      params
    })
  }

  // POST request
  const post = <T>(url: string, data?: any): Promise<T> => {
    return apiCall<T>(url, {
      method: 'POST',
      body: data
    })
  }

  // PUT request
  const put = <T>(url: string, data?: any): Promise<T> => {
    return apiCall<T>(url, {
      method: 'PUT',
      body: data
    })
  }

  // PATCH request
  const patch = <T>(url: string, data?: any): Promise<T> => {
    return apiCall<T>(url, {
      method: 'PATCH',
      body: data
    })
  }

  // DELETE request
  const del = <T>(url: string): Promise<T> => {
    return apiCall<T>(url, {
      method: 'DELETE'
    })
  }

  // Firebase Database operations
  const { $firebase } = useNuxtApp()
  
  // Get data from Firebase
  const getFirebaseData = async <T>(path: string): Promise<T | null> => {
    try {
      const { ref, get } = await import('firebase/database')
      const dbRef = ref($firebase.database, path)
      const snapshot = await get(dbRef)
      return snapshot.val()
    } catch (err) {
      console.error('Firebase get error:', err)
      throw err
    }
  }

  // Set data in Firebase
  const setFirebaseData = async <T>(path: string, data: T): Promise<void> => {
    try {
      const { ref, set } = await import('firebase/database')
      const dbRef = ref($firebase.database, path)
      await set(dbRef, data)
    } catch (err) {
      console.error('Firebase set error:', err)
      throw err
    }
  }

  // Update data in Firebase
  const updateFirebaseData = async <T>(path: string, data: Partial<T>): Promise<void> => {
    try {
      const { ref, update } = await import('firebase/database')
      const dbRef = ref($firebase.database, path)
      await update(dbRef, data)
    } catch (err) {
      console.error('Firebase update error:', err)
      throw err
    }
  }

  // Remove data from Firebase
  const removeFirebaseData = async (path: string): Promise<void> => {
    try {
      const { ref, remove } = await import('firebase/database')
      const dbRef = ref($firebase.database, path)
      await remove(dbRef)
    } catch (err) {
      console.error('Firebase remove error:', err)
      throw err
    }
  }

  return {
    // State
    loading: readonly(loading),
    error: readonly(error),
    
    // HTTP methods
    get,
    post,
    put,
    patch,
    delete: del,
    
    // Firebase methods
    getFirebaseData,
    setFirebaseData,
    updateFirebaseData,
    removeFirebaseData,
    
    // Utility
    getAuthHeaders
  }
} 