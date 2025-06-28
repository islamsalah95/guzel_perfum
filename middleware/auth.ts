export default defineNuxtRouteMiddleware(async (to, from) => {
  // Only run on client side
  if (process.server) {
    return
  }

  try {
    const { isAuthenticated, initAuth, waitForAuth } = useAuth()
    
    // Initialize auth if not already done
    initAuth()
    
    // Wait for auth state to be determined
    await waitForAuth()
    
    if (!isAuthenticated.value) {
      return navigateTo('/login')
    }
  } catch (error) {
    console.error('Error in auth middleware:', error)
    // If there's an error, redirect to login to be safe
    return navigateTo('/login')
  }
}) 