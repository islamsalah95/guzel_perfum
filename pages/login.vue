<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <img src="/logo.png" alt="Güzel Logo" class="logo" />
        <h1 class="login-title">تسجيل الدخول</h1>
        <p class="login-subtitle">مرحباً بك في متجر Güzel للعطور الفاخرة</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email" class="form-label">البريد الإلكتروني</label>
          <div class="input-group">
            <i class="bi bi-envelope input-icon"></i>
            <input
              id="email"
              v-model="email"
              type="email"
              class="form-control"
              placeholder="أدخل بريدك الإلكتروني"
              required
              :disabled="loading"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="password" class="form-label">كلمة المرور</label>
          <div class="input-group">
            <i class="bi bi-lock input-icon"></i>
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="form-control"
              placeholder="أدخل كلمة المرور"
              required
              :disabled="loading"
            />
            <button
              type="button"
              class="password-toggle"
              @click="showPassword = !showPassword"
              :disabled="loading"
            >
              <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
            </button>
          </div>
        </div>

        <div v-if="loginError" class="alert alert-danger">
          <i class="bi bi-exclamation-triangle"></i>
          {{ loginError }}
        </div>

        <button
          type="submit"
          class="btn btn-primary login-btn"
          :disabled="loading"
        >
          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
          <i v-else class="bi bi-box-arrow-in-right me-2"></i>
          {{ loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول' }}
        </button>

        <div class="login-footer">
          <p class="demo-info">
            <i class="bi bi-info-circle me-1"></i>
            بيانات تجريبية: admin@guzel.com / password123
          </p>
        </div>
      </form>

      <div class="login-background">
        <div class="perfume-bottle"></div>
        <div class="floating-particles">
          <div class="particle" v-for="i in 6" :key="i"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: 'guest'
})

const { login, isAuthenticated, error: authError, loading, initAuth, waitForAuth } = useAuth()
const router = useRouter()

// Form data
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loginError = ref('')

// Initialize auth listener
onMounted(async () => {
  try {
    const unsubscribe = initAuth()
    
    // Wait for auth to be ready
    await waitForAuth()
    
    // Cleanup on unmount
    onUnmounted(() => {
      if (unsubscribe) {
        unsubscribe()
      }
    })
  } catch (error) {
    console.error('Error initializing auth in login page:', error)
  }
})

// Handle login
const handleLogin = async () => {
  if (!email.value || !password.value) {
    loginError.value = 'يرجى إدخال البريد الإلكتروني وكلمة المرور'
    return
  }

  // Clear previous errors
  loginError.value = ''

  const result = await login(email.value, password.value)
  
  if (result.success) {
    // Show success message
    showToast('تم تسجيل الدخول بنجاح', 'success')
    
    // Wait for the next tick to ensure auth state is updated
    await nextTick()
    
    // Check if user is admin and redirect accordingly
    if (result.user?.email === 'admin@guzel.com') {
      await router.push('/crud')
    } else {
      await router.push('/')
    }
  } else {
    // Handle different error types
    let errorMessage = 'حدث خطأ أثناء تسجيل الدخول'
    
    if (result.error) {
      if (result.error.includes('user-not-found')) {
        errorMessage = 'البريد الإلكتروني غير مسجل'
      } else if (result.error.includes('wrong-password')) {
        errorMessage = 'كلمة المرور غير صحيحة'
      } else if (result.error.includes('invalid-email')) {
        errorMessage = 'البريد الإلكتروني غير صحيح'
      } else if (result.error.includes('too-many-requests')) {
        errorMessage = 'تم تجاوز عدد المحاولات المسموح، يرجى المحاولة لاحقاً'
      } else if (result.error.includes('user-disabled')) {
        errorMessage = 'تم تعطيل هذا الحساب'
      } else {
        errorMessage = result.error
      }
    }
    
    loginError.value = errorMessage
    showToast(errorMessage, 'error')
  }
}

// Toast notification function
const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  const toast = document.createElement('div')
  toast.className = `toast-${type}`
  toast.innerHTML = `
    <i class="bi bi-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
    ${message}
  `
  document.body.appendChild(toast)
  
  // Remove toast after 4 seconds
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast)
    }
  }, 4000)
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.login-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.logo {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.login-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.login-subtitle {
  color: #666;
  font-size: 1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
}

.input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 15px;
  color: #666;
  z-index: 2;
}

.form-control {
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fff;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.password-toggle {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  transition: color 0.3s ease;
}

.password-toggle:hover {
  color: #667eea;
}

.login-btn {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert {
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
}

.alert-danger {
  background: #fee;
  color: #c53030;
  border: 1px solid #fed7d7;
}

.login-footer {
  text-align: center;
  margin-top: 20px;
}

.demo-info {
  font-size: 0.85rem;
  color: #666;
  background: #f8f9fa;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.login-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
}

.perfume-bottle {
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 200px;
  height: 300px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 20px 20px 0 0;
  opacity: 0.1;
  transform: rotate(-15deg);
}

.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float 6s infinite ease-in-out;
}

.particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { top: 60%; left: 80%; animation-delay: 1s; }
.particle:nth-child(3) { top: 40%; left: 20%; animation-delay: 2s; }
.particle:nth-child(4) { top: 80%; left: 60%; animation-delay: 3s; }
.particle:nth-child(5) { top: 30%; left: 70%; animation-delay: 4s; }
.particle:nth-child(6) { top: 70%; left: 30%; animation-delay: 5s; }

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 1;
  }
}

.toast-success {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #48bb78;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.toast-error {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #f56565;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
  }
  
  .login-title {
    font-size: 1.5rem;
  }
  
  .perfume-bottle {
    width: 150px;
    height: 225px;
  }
}
</style> 