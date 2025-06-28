<template>
  <div>
    <!-- Header / Navigation -->
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark py-3">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center gap-2" href="/">
            <img src="/logo.png" alt="Güzel Logo" style="height: 80px; width: auto; object-fit: contain" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="تبديل القائمة">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/#features">مميزاتنا</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#products">العطور الأكثر مبيعًا</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#reviews">آراء العملاء</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#contact">تواصل معنا</a>
              </li>
              
              <!-- Authentication Links -->
              <li v-if="isAuthenticated" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-person-circle me-1"></i>
                  {{ user?.email }}
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li v-if="isAdmin">
                    <a class="dropdown-item" href="/admin">
                      <i class="bi bi-speedometer2 me-2"></i>
                      لوحة الإدارة
                    </a>
                    <a class="dropdown-item" href="/crud">
                      <i class="bi bi-gear me-2"></i>
                      إدارة المنتجات
                    </a>
                    <div class="dropdown-divider"></div>
                  </li>
                  <li>
                    <button class="dropdown-item" @click="logout">
                      <i class="bi bi-box-arrow-right me-2"></i>
                      تسجيل الخروج
                    </button>
                  </li>
                </ul>
              </li>
              <li v-else class="nav-item">
                <a class="nav-link btn btn-outline-light btn-sm" href="/login">
                  <i class="bi bi-box-arrow-in-right me-1"></i>
                  تسجيل الدخول
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <NuxtPage />

    <!-- Footer -->
    <footer class="footer mt-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4 text-center text-md-end mb-3 mb-md-0">
            <div class="footer-logo">Güzel</div>
          </div>
          <div class="col-md-4 text-center mb-3 mb-md-0">
            <a href="#" class="footer-link">من نحن</a>
            <a href="#" class="footer-link">الشروط</a>
            <a href="#" class="footer-link">سياسة الخصوصية</a>
          </div>
          <div class="col-md-4 text-center text-md-start">
            <a href="#" class="social-icon" aria-label="انستجرام"><i class="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/share/15KYS1fBEv/" class="social-icon" aria-label="فيسبوك"><i class="bi bi-facebook"></i></a>
            <a href="https://wa.me/201125860865" class="social-icon" aria-label="واتساب">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
        <div class="text-center mt-3" style="font-size: 0.95rem">
          &copy; <span id="year"></span> Güzel. جميع الحقوق محفوظة.
          <div class="developer-credit">
            صمم بواسطة
            <a href="https://islamsalah95.github.io/" target="_blank">Islam Salah</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { user, isAuthenticated, isAdmin, logout, initAuth } = useAuth()

// Load Bootstrap JS for dropdown functionality
onMounted(() => {
  // Initialize auth listener
  const unsubscribe = initAuth()
  
  if (typeof bootstrap === 'undefined') {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
    document.head.appendChild(script)
  }
  
  // Set current year in footer
  const yearElement = document.getElementById('year')
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }
  
  // Cleanup on unmount
  onUnmounted(() => {
    if (unsubscribe) {
      unsubscribe()
    }
  })
})
</script>

<style scoped>
.dropdown-menu {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  color: #333;
  transition: all 0.3s ease;
}

.dropdown-item:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.dropdown-divider {
  border-color: rgba(0, 0, 0, 0.1);
}

.btn-outline-light {
  border-color: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.btn-outline-light:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}
</style> 