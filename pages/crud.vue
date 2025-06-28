<template>
  <div class="container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <h1 class="mb-2">إدارة منتجات العطور</h1>
        <p class="text-muted">مرحباً {{ user?.email }}</p>
      </div>
      <div class="d-flex gap-2">
        <button class="btn btn-outline-secondary" @click="logout">
          <i class="bi bi-box-arrow-right me-1"></i>
          تسجيل الخروج
        </button>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
          <i class="bi bi-plus-circle me-1"></i>
          إضافة منتج جديد
        </button>
      </div>
    </div>

    <!-- Filter Controls -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-body">
            <h6 class="card-title mb-3">
              <i class="bi bi-funnel me-2"></i>
              تصفية المنتجات
            </h6>
            <div class="row g-3">
              <div class="col-md-4">
                <label for="categoryFilter" class="form-label">الفئة</label>
                <select class="form-select" id="categoryFilter" v-model="filters.category">
                  <option value="">جميع الفئات</option>
                  <option value="man">رجالي</option>
                  <option value="women">نسائي</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="bestSellerFilter" class="form-label">الأكثر مبيعاً</label>
                <select class="form-select" id="bestSellerFilter" v-model="filters.bestSeller">
                  <option value="">جميع المنتجات</option>
                  <option value="true">الأكثر مبيعاً فقط</option>
                  <option value="false">غير الأكثر مبيعاً</option>
                </select>
              </div>
              <div class="col-md-4 d-flex align-items-end">
                <button class="btn btn-outline-secondary" @click="clearFilters">
                  <i class="bi bi-x-circle me-1"></i>
                  مسح التصفية
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Results Summary -->
    <div class="row mb-3">
      <div class="col-12">
        <div class="alert alert-info d-flex justify-content-between align-items-center">
          <div>
            <i class="bi bi-info-circle me-2"></i>
            <span v-if="filters.category || filters.bestSeller !== ''">
              تم عرض {{ Object.keys(filteredProducts).length }} منتج من أصل {{ Object.keys(products).length }} منتج
            </span>
            <span v-else>
              إجمالي المنتجات: {{ Object.keys(products).length }} منتج
            </span>
          </div>
          <div v-if="filters.category || filters.bestSeller !== ''">
            <button class="btn btn-sm btn-outline-info" @click="clearFilters">
              <i class="bi bi-x-circle me-1"></i>
              مسح التصفية
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>الصورة</th>
            <th>الاسم</th>
            <th>السعر</th>
            <th>الفئة</th>
            <th>الأكثر مبيعاً</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="6" class="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">جار التحميل...</span>
              </div>
            </td>
          </tr>
          <tr v-else-if="error">
            <td colspan="6" class="text-center text-danger">
              <i class="bi bi-exclamation-triangle me-2"></i>
              {{ error }}
            </td>
          </tr>
          <tr v-else-if="!filteredProducts || Object.keys(filteredProducts).length === 0">
            <td colspan="6" class="text-center">لا توجد منتجات متاحة</td>
          </tr>
          <tr v-else v-for="(product, key) in filteredProducts" :key="key">
            <td>
              <img :src="product.image" :alt="product.name" style="width: 50px; height: 50px; object-fit: cover;" 
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
              <span v-if="product.best_seller === true" class="badge bg-success">
                <i class="bi bi-check me-1"></i>نعم
              </span>
              <span v-else class="badge bg-secondary">
                <i class="bi bi-x me-1"></i>لا
              </span>
            </td>
            <td>
              <button class="btn btn-sm btn-outline-primary me-2" @click="editProduct(key, product)" title="تعديل">
                <i class="bi bi-pencil-square me-1"></i>تعديل
              </button>
              <button class="btn btn-sm btn-outline-danger" @click="deleteProduct(key)" title="حذف">
                <i class="bi bi-trash3 me-1"></i>حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add Product Modal -->
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">إضافة منتج جديد</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form @submit.prevent="addProduct">
            <div class="modal-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="addName" class="form-label">اسم المنتج</label>
                  <input type="text" class="form-control" id="addName" v-model="newProduct.name" required>
                  <div class="invalid-feedback">يرجى إدخال اسم المنتج</div>
                </div>
                <div class="col-md-6">
                  <label for="addPrice" class="form-label">السعر (EGP)</label>
                  <input type="number" class="form-control" id="addPrice" v-model="newProduct.price" min="0" step="0.01" required>
                  <div class="invalid-feedback">يرجى إدخال سعر صحيح</div>
                </div>
                <div class="col-md-6">
                  <label for="addCategory" class="form-label">الفئة</label>
                  <select class="form-select" id="addCategory" v-model="newProduct.category" required>
                    <option value="">اختر الفئة</option>
                    <option value="man">رجالي</option>
                    <option value="women">نسائي</option>
                  </select>
                  <div class="invalid-feedback">يرجى اختيار الفئة</div>
                </div>
                <div class="col-md-6">
                  <label for="addDiscount" class="form-label">الخصم (%)</label>
                  <input type="number" class="form-control" id="addDiscount" v-model="newProduct.discount" min="0" max="100">
                </div>
                <div class="col-md-12">
                  <label for="addDescription" class="form-label">الوصف</label>
                  <textarea class="form-control" id="addDescription" v-model="newProduct.description" rows="3" required></textarea>
                  <div class="invalid-feedback">يرجى إدخال وصف المنتج</div>
                </div>
                <div class="col-md-12">
                  <label for="addImage" class="form-label">رابط الصورة</label>
                  <input type="url" class="form-control" id="addImage" v-model="newProduct.image" required>
                  <div class="invalid-feedback">يرجى إدخال رابط صحيح للصورة</div>
                </div>
                <div class="col-md-12">
                  <label for="addMetaDesc" class="form-label">وصف SEO</label>
                  <textarea class="form-control" id="addMetaDesc" v-model="newProduct.meta_desc" rows="2" required></textarea>
                  <div class="invalid-feedback">يرجى إدخال وصف SEO</div>
                </div>
                <div class="col-md-6">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="addBestSeller" v-model="newProduct.best_seller">
                    <label class="form-check-label" for="addBestSeller">الأكثر مبيعاً</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
              <button type="submit" class="btn btn-primary" :disabled="adding">
                <span v-if="adding" class="spinner-border spinner-border-sm me-2"></span>
                حفظ المنتج
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Edit Product Modal -->
    <div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editProductModalLabel">تعديل المنتج</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <form @submit.prevent="updateProduct">
            <div class="modal-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="editName" class="form-label">اسم المنتج</label>
                  <input type="text" class="form-control" id="editName" v-model="editingProduct.name" required>
                  <div class="invalid-feedback">يرجى إدخال اسم المنتج</div>
                </div>
                <div class="col-md-6">
                  <label for="editPrice" class="form-label">السعر (EGP)</label>
                  <input type="number" class="form-control" id="editPrice" v-model="editingProduct.price" min="0" step="0.01" required>
                  <div class="invalid-feedback">يرجى إدخال سعر صحيح</div>
                </div>
                <div class="col-md-6">
                  <label for="editCategory" class="form-label">الفئة</label>
                  <select class="form-select" id="editCategory" v-model="editingProduct.category" required>
                    <option value="">اختر الفئة</option>
                    <option value="man">رجالي</option>
                    <option value="women">نسائي</option>
                  </select>
                  <div class="invalid-feedback">يرجى اختيار الفئة</div>
                </div>
                <div class="col-md-6">
                  <label for="editDiscount" class="form-label">الخصم (%)</label>
                  <input type="number" class="form-control" id="editDiscount" v-model="editingProduct.discount" min="0" max="100">
                </div>
                <div class="col-md-12">
                  <label for="editDescription" class="form-label">الوصف</label>
                  <textarea class="form-control" id="editDescription" v-model="editingProduct.description" rows="3" required></textarea>
                  <div class="invalid-feedback">يرجى إدخال وصف المنتج</div>
                </div>
                <div class="col-md-12">
                  <label for="editImage" class="form-label">رابط الصورة</label>
                  <input type="url" class="form-control" id="editImage" v-model="editingProduct.image" required>
                  <div class="invalid-feedback">يرجى إدخال رابط صحيح للصورة</div>
                </div>
                <div class="col-md-12">
                  <label for="editMetaDesc" class="form-label">وصف SEO</label>
                  <textarea class="form-control" id="editMetaDesc" v-model="editingProduct.meta_desc" rows="2" required></textarea>
                  <div class="invalid-feedback">يرجى إدخال وصف SEO</div>
                </div>
                <div class="col-md-6">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="editBestSeller" v-model="editingProduct.best_seller">
                    <label class="form-check-label" for="editBestSeller">الأكثر مبيعاً</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
              <button type="submit" class="btn btn-primary" :disabled="updating">
                <span v-if="updating" class="spinner-border spinner-border-sm me-2"></span>
                حفظ التعديلات
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div class="modal fade" id="deleteProductModal" tabindex="-1" aria-labelledby="deleteProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteProductModalLabel">تأكيد الحذف</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>هل أنت متأكد أنك تريد حذف هذا المنتج؟ لا يمكن التراجع عن هذا الإجراء.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
            <button type="button" class="btn btn-danger" @click="confirmDelete" :disabled="deleting">
              <span v-if="deleting" class="spinner-border spinner-border-sm me-2"></span>
              حذف
            </button>
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
  title: 'إدارة منتجات العطور',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'googlebot', content: 'noindex, nofollow' },
    { name: 'description', content: 'صفحة إدارة المنتجات - غير مخصصة للفهرسة' }
  ]
})

const { user, logout, initAuth, waitForAuth } = useAuth()
const { 
  getFirebaseData, 
  setFirebaseData, 
  updateFirebaseData, 
  removeFirebaseData,
  loading,
  error
} = useApi()

// Reactive data
const products = ref({})
const adding = ref(false)
const updating = ref(false)
const deleting = ref(false)
const deletingProductId = ref(null)

// Form data
const newProduct = ref({
  name: '',
  description: '',
  price: 0,
  discount: 0,
  image: '',
  category: '',
  meta_desc: '',
  best_seller: false
})

const editingProduct = ref({
  id: '',
  name: '',
  description: '',
  price: 0,
  discount: 0,
  image: '',
  category: '',
  meta_desc: '',
  best_seller: false
})

// Filter data
const filters = ref({
  category: '',
  bestSeller: ''
})

// Computed property for filtered products
const filteredProducts = computed(() => {
  if (!products.value) return {}
  
  let filtered = { ...products.value }
  
  // Filter by category
  if (filters.value.category) {
    filtered = Object.fromEntries(
      Object.entries(filtered).filter(([key, product]) => 
        product.category === filters.value.category
      )
    )
  }
  
  // Filter by best seller
  if (filters.value.bestSeller !== '') {
    const isBestSeller = filters.value.bestSeller === 'true'
    filtered = Object.fromEntries(
      Object.entries(filtered).filter(([key, product]) => 
        product.best_seller === isBestSeller
      )
    )
  }
  
  return filtered
})

// Clear filters function
const clearFilters = () => {
  filters.value.category = ''
  filters.value.bestSeller = ''
}

// Load products on mount
onMounted(async () => {
  try {
    // Initialize auth listener
    const unsubscribe = initAuth()
    
    // Wait for auth to be ready
    await waitForAuth()
    
    await loadProducts()
    
    // Load Bootstrap JS if not already loaded
    if (typeof bootstrap === 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
      document.head.appendChild(script)
    }
    
    // Cleanup on unmount
    onUnmounted(() => {
      if (unsubscribe) {
        unsubscribe()
      }
    })
  } catch (error) {
    console.error('Error initializing CRUD page:', error)
  }
})

// Load products from Firebase
const loadProducts = async () => {
  try {
    const data = await getFirebaseData('/products')
    products.value = data || {}
  } catch (err) {
    console.error('Error loading products:', err)
  }
}

// Methods
function editProduct(id, product) {
  editingProduct.value = {
    id,
    name: product.name || '',
    description: product.description || '',
    price: product.price || 0,
    discount: product.discount || 0,
    image: product.image || '',
    category: product.category || '',
    meta_desc: product.meta_desc || '',
    best_seller: product.best_seller === true
  }
  
  // Show modal using Bootstrap
  const modal = new bootstrap.Modal(document.getElementById('editProductModal'))
  modal.show()
}

function deleteProduct(id) {
  deletingProductId.value = id
  const modal = new bootstrap.Modal(document.getElementById('deleteProductModal'))
  modal.show()
}

async function addProduct() {
  adding.value = true
  try {
    const productData = {
      name: newProduct.value.name,
      description: newProduct.value.description,
      price: parseFloat(newProduct.value.price),
      discount: parseInt(newProduct.value.discount) || 0,
      image: newProduct.value.image,
      category: newProduct.value.category,
      meta_desc: newProduct.value.meta_desc,
      best_seller: newProduct.value.best_seller === true,
      created_at: new Date().toISOString(),
      created_by: user.value?.email || 'unknown'
    }
    
    await setFirebaseData('/products', {
      ...products.value,
      [Date.now().toString()]: productData
    })
    
    // Show success message
    showToast('تمت إضافة المنتج بنجاح', 'success')
    
    // Reset form
    newProduct.value = {
      name: '',
      description: '',
      price: 0,
      discount: 0,
      image: '',
      category: '',
      meta_desc: '',
      best_seller: false
    }
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('addProductModal'))
    modal.hide()
    
    // Refresh data
    await loadProducts()
  } catch (error) {
    console.error('Error adding product:', error)
    showToast('حدث خطأ أثناء إضافة المنتج', 'error')
  } finally {
    adding.value = false
  }
}

async function updateProduct() {
  updating.value = true
  try {
    const productData = {
      name: editingProduct.value.name,
      description: editingProduct.value.description,
      price: parseFloat(editingProduct.value.price),
      discount: parseInt(editingProduct.value.discount) || 0,
      image: editingProduct.value.image,
      category: editingProduct.value.category,
      meta_desc: editingProduct.value.meta_desc,
      best_seller: editingProduct.value.best_seller === true,
      updated_at: new Date().toISOString(),
      updated_by: user.value?.email || 'unknown'
    }
    
    await updateFirebaseData(`/products/${editingProduct.value.id}`, productData)
    
    // Show success message
    showToast('تم تحديث المنتج بنجاح', 'success')
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('editProductModal'))
    modal.hide()
    
    // Refresh data
    await loadProducts()
  } catch (error) {
    console.error('Error updating product:', error)
    showToast('حدث خطأ أثناء تحديث المنتج', 'error')
  } finally {
    updating.value = false
  }
}

async function confirmDelete() {
  deleting.value = true
  try {
    await removeFirebaseData(`/products/${deletingProductId.value}`)
    
    // Show success message
    showToast('تم حذف المنتج بنجاح', 'success')
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('deleteProductModal'))
    modal.hide()
    
    // Refresh data
    await loadProducts()
  } catch (error) {
    console.error('Error deleting product:', error)
    showToast('حدث خطأ أثناء حذف المنتج', 'error')
  } finally {
    deleting.value = false
    deletingProductId.value = null
  }
}

// Toast notification function
function showToast(message, type = 'success') {
  const toast = document.createElement('div')
  toast.className = `toast-${type}`
  toast.innerHTML = `
    <i class="bi bi-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
    ${message}
  `
  document.body.appendChild(toast)
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast)
    }
  }, 3000)
}

// Category helper functions
function getCategoryBadgeClass(category) {
  switch (category) {
    case 'man':
      return 'bg-primary'
    case 'women':
      return 'bg-secondary'
    case 'lapels':
      return 'bg-success'
    default:
      return 'bg-secondary'
  }
}

function getCategoryDisplayName(category) {
  switch (category) {
    case 'man':
      return 'رجالي'
    case 'women':
      return 'نسائي'
    case 'lapels':
      return 'بلبس'
    default:
      return 'غير معروف'
  }
}
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}

.form-control:required:invalid {
  border-color: #dc3545;
}

.form-control:required:valid {
  border-color: #28a745;
}

.badge {
  font-size: 0.8rem;
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

/* Make text-muted white for better visibility */
.text-muted {
  color: white !important;
}
</style> 