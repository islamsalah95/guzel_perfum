export default defineNuxtRouteMiddleware(async (to, from) => {
  // Only run on client side
  if (process.server) {
    return
  }

  try {
    const { isAuthenticated, isAdmin, initAuth, waitForAuth } = useAuth()
    
    // Initialize auth if not already done
    initAuth()
    
    // Wait for auth state to be determined
    await waitForAuth()
    
    if (!isAuthenticated.value) {
      return navigateTo('/login')
    }
    
    if (!isAdmin.value) {
      return navigateTo('/')
    }
  } catch (error) {
    console.error('Error in admin middleware:', error)
    // If there's an error, redirect to login to be safe
    return navigateTo('/login')
  }
}) 