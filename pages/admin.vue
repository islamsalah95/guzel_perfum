<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 class="mb-2">لوحة الإدارة</h1>
            <p class="text-muted">مرحباً {{ user?.email }}</p>
          </div>
          <div class="d-flex gap-2">
            <button class="btn btn-outline-secondary" @click="logout">
              <i class="bi bi-box-arrow-right me-1"></i>
              تسجيل الخروج
            </button>
            <NuxtLink to="/crud" class="btn btn-primary">
              <i class="bi bi-gear me-1"></i>
              إدارة المنتجات
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <!-- User Info Card -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <div class="mb-3">
              <i class="bi bi-person-circle" style="font-size: 3rem; color: #667eea;"></i>
            </div>
            <h5 class="card-title">معلومات المستخدم</h5>
            <p class="card-text">
              <strong>البريد الإلكتروني:</strong><br>
              {{ user?.email }}
            </p>
            <p class="card-text">
              <strong>نوع الحساب:</strong><br>
              <span class="badge bg-primary">{{ isAdmin ? 'مدير' : 'مستخدم' }}</span>
            </p>
            <p class="card-text">
              <strong>تاريخ تسجيل الدخول:</strong><br>
              {{ new Date().toLocaleDateString('ar-EG') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Quick Stats Card -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <div class="mb-3">
              <i class="bi bi-graph-up" style="font-size: 3rem; color: #48bb78;"></i>
            </div>
            <h5 class="card-title">إحصائيات سريعة</h5>
            
            <div v-if="loading" class="text-center py-3">
              <div class="spinner-border spinner-border-sm text-primary" role="status">
                <span class="visually-hidden">جار التحميل...</span>
              </div>
              <p class="text-muted mt-2">جاري تحميل الإحصائيات...</p>
            </div>
            
            <div v-else-if="error" class="text-center py-3">
              <i class="bi bi-exclamation-triangle text-danger" style="font-size: 2rem;"></i>
              <p class="text-danger mt-2">خطأ في تحميل البيانات</p>
              <button class="btn btn-sm btn-outline-primary" @click="refreshData">
                <i class="bi bi-arrow-clockwise me-1"></i>
                إعادة المحاولة
              </button>
            </div>
            
            <div v-else>
              <div class="row text-center">
                <div class="col-6">
                  <h4 class="text-primary">{{ productsCount }}</h4>
                  <small class="text-muted">المنتجات</small>
                </div>
                <div class="col-6">
                  <h4 class="text-success">{{ bestSellersCount }}</h4>
                  <small class="text-muted">الأكثر مبيعاً</small>
                </div>
              </div>
              <div class="row text-center mt-3">
                <div class="col-6">
                  <h4 class="text-info">{{ mensCount }}</h4>
                  <small class="text-muted">رجالي</small>
                </div>
                <div class="col-6">
                  <h4 class="text-warning">{{ womensCount }}</h4>
                  <small class="text-muted">نسائي</small>
                </div>
              </div>
              <div class="row text-center mt-3">
                <div class="col-6">
                  <h4 class="text-danger">{{ lapelsCount }}</h4>
                  <small class="text-muted">بلبس</small>
                </div>
                <div class="col-6">
                  <h4 class="text-secondary">{{ productsWithDiscount }}</h4>
                  <small class="text-muted">بخصم</small>
                </div>
              </div>
              <div class="row text-center mt-3">
                <div class="col-12">
                  <h4 class="text-dark">{{ averagePrice }} EGP</h4>
                  <small class="text-muted">متوسط السعر</small>
                </div>
              </div>
              <div class="mt-3" v-if="productsCount > 0">
                <div class="progress" style="height: 8px;">
                  <div class="progress-bar bg-success" 
                       :style="{ width: bestSellersPercentage + '%' }" 
                       :title="'نسبة الأكثر مبيعاً: ' + bestSellersPercentage + '%'">
                  </div>
                </div>
                <small class="text-muted">نسبة الأكثر مبيعاً ({{ bestSellersPercentage }}%)</small>
              </div>
              <div v-else class="mt-3">
                <p class="text-muted">لا توجد منتجات متاحة</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions Card -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <div class="mb-3">
              <i class="bi bi-lightning" style="font-size: 3rem; color: #f56565;"></i>
            </div>
            <h5 class="card-title">إجراءات سريعة</h5>
            <div class="d-grid gap-2">
              <NuxtLink to="/crud" class="btn btn-outline-primary">
                <i class="bi bi-plus-circle me-1"></i>
                إضافة منتج جديد
              </NuxtLink>
              <NuxtLink to="/crud" class="btn btn-outline-success">
                <i class="bi bi-pencil-square me-1"></i>
                تعديل المنتجات
              </NuxtLink>
              <button class="btn btn-outline-info" @click="refreshData">
                <i class="bi bi-arrow-clockwise me-1"></i>
                تحديث البيانات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Products Table -->
    <div class="row mt-5">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-header">
            <h5 class="mb-0">
              <i class="bi bi-clock-history me-2"></i>
              أحدث المنتجات
            </h5>
          </div>
          <div class="card-body">
            <div v-if="loading" class="text-center py-4">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">جار التحميل...</span>
              </div>
            </div>
            <div v-else-if="error" class="text-center py-4 text-danger">
              <i class="bi bi-exclamation-triangle me-2"></i>
              {{ error }}
            </div>
            <div v-else-if="!recentProducts.length" class="text-center py-4 text-muted">
              لا توجد منتجات متاحة
            </div>
            <div v-else class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>الصورة</th>
                    <th>الاسم</th>
                    <th>السعر</th>
                    <th>الفئة</th>
                    <th>الأكثر مبيعاً</th>
                    <th>تاريخ الإنشاء</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in recentProducts" :key="product.id">
                    <td>
                      <img :src="product.image" :alt="product.name" 
                           style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px;"
                           @error="$event.target.src = '/logo.png'">
                    </td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }} EGP</td>
                    <td>
                      <span class="badge" :class="getCategoryBadgeClass(product.category)">
                        {{ getCategoryDisplayName(product.category) }}
                      </span>
                    </td>
                    <td>
                      <span v-if="product.best_seller" class="badge bg-success">
                        <i class="bi bi-check me-1"></i>نعم
                      </span>
                      <span v-else class="badge bg-secondary">
                        <i class="bi bi-x me-1"></i>لا
                      </span>
                    </td>
                    <td>
                      <small class="text-muted">
                        {{ product.created_at ? new Date(product.created_at).toLocaleDateString('ar-EG') : 'غير محدد' }}
                      </small>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'admin'
})

// SEO blocking - prevent indexing
useHead({
  title: 'لوحة الإدارة | Güzel',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'googlebot', content: 'noindex, nofollow' },
    { name: 'description', content: 'لوحة إدارة متجر Güzel - غير مخصصة للفهرسة' }
  ]
})

const { user, isAdmin, logout, initAuth, waitForAuth } = useAuth()
const { products, allProducts, loading, error, loadProducts } = useProducts()

// Computed properties for stats
const productsCount = computed(() => {
  if (!allProducts.value) return 0
  return Object.keys(allProducts.value).length
})

const bestSellersCount = computed(() => {
  if (!allProducts.value) return 0
  return Object.values(allProducts.value).filter(p => p.best_seller === true).length
})

const mensCount = computed(() => {
  if (!allProducts.value) return 0
  return Object.values(allProducts.value).filter(p => p.category === 'man').length
})

const womensCount = computed(() => {
  if (!allProducts.value) return 0
  return Object.values(allProducts.value).filter(p => p.category === 'women').length
})

const lapelsCount = computed(() => {
  if (!allProducts.value) return 0
  return Object.values(allProducts.value).filter(p => p.category === 'lapels').length
})

const productsWithDiscount = computed(() => {
  if (!allProducts.value) return 0
  return Object.values(allProducts.value).filter(p => p.discount > 0).length
})

const averagePrice = computed(() => {
  if (!allProducts.value || Object.keys(allProducts.value).length === 0) return 0
  const totalPrice = Object.values(allProducts.value).reduce((total, p) => total + (p.price || 0), 0)
  return Math.round(totalPrice / Object.keys(allProducts.value).length)
})

const bestSellersPercentage = computed(() => {
  if (!allProducts.value || productsCount.value === 0) return 0
  return Math.round((bestSellersCount.value / productsCount.value) * 100)
})

// Get recent products (last 5)
const recentProducts = computed(() => {
  if (!allProducts.value) return []
  
  const productsArray = Object.entries(allProducts.value).map(([id, product]) => ({
    id,
    ...product
  }))
  
  return productsArray
    .sort((a, b) => {
      const dateA = a.created_at ? new Date(a.created_at).getTime() : 0
      const dateB = b.created_at ? new Date(b.created_at).getTime() : 0
      return dateB - dateA
    })
    .slice(0, 5)
})

// Load data on mount
onMounted(async () => {
  try {
    // Initialize auth listener
    const unsubscribe = initAuth()
    
    // Wait for auth to be ready
    await waitForAuth()
    
    await loadProducts()
    
    // Cleanup on unmount
    onUnmounted(() => {
      if (unsubscribe) {
        unsubscribe()
      }
    })
  } catch (error) {
    console.error('Error initializing admin page:', error)
  }
})

// Refresh data function
const refreshData = async () => {
  await loadProducts()
  // Show success toast
  const toast = document.createElement('div')
  toast.className = 'toast-success'
  toast.innerHTML = `
    <i class="bi bi-check-circle"></i>
    تم تحديث البيانات بنجاح
  `
  document.body.appendChild(toast)
  
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast)
    }
  }, 3000)
}

// Helper functions
const getCategoryBadgeClass = (category) => {
  switch (category) {
    case 'man':
      return 'bg-primary'
    case 'women':
      return 'bg-warning'
    case 'lapels':
      return 'bg-danger'
    default:
      return 'bg-secondary'
  }
}

const getCategoryDisplayName = (category) => {
  switch (category) {
    case 'man':
      return 'رجالي'
    case 'women':
      return 'نسائي'
    case 'lapels':
      return 'بلبس'
    default:
      return 'غير معرف'
  }
}
</script>

<style scoped>
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

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  border-radius: 12px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}

.card-title {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.progress {
  border-radius: 10px;
  background-color: #e2e8f0;
}

.progress-bar {
  border-radius: 10px;
  transition: width 0.6s ease;
}

/* Statistics numbers animation */
.card h4 {
  font-weight: 700;
  margin-bottom: 0.25rem;
  transition: all 0.3s ease;
}

.card:hover h4 {
  transform: scale(1.05);
}

/* Icon animations */
.card .bi {
  transition: all 0.3s ease;
}

.card:hover .bi {
  transform: scale(1.1);
}

/* Loading spinner */
.spinner-border-sm {
  width: 1.5rem;
  height: 1.5rem;
}

/* Error state */
.text-danger {
  color: #e53e3e !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-body {
    padding: 1rem;
  }
  
  .card h4 {
    font-size: 1.5rem;
  }
  
  .card-title {
    font-size: 1rem;
  }
}

/* Make text-muted white for better visibility */
.text-muted {
  color: white !important;
}
</style> 