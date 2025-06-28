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
    
    if (isAuthenticated.value) {
      // Redirect admin users to CRUD page, others to home
      if (isAdmin.value) {
        return navigateTo('/crud')
      } else {
        return navigateTo('/')
      }
    }
  } catch (error) {
    console.error('Error in guest middleware:', error)
    // If there's an error, allow the route to proceed
    return
  }
}) 