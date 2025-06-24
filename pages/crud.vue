<template>
  <div class="container py-5">
    <h1 class="text-center mb-5">إدارة منتجات العطور</h1>

    <div class="d-flex justify-content-between mb-4">
      <h2>قائمة المنتجات</h2>
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
        <i class="fas fa-plus"></i> إضافة منتج جديد
      </button>
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
          <tr v-if="pending">
            <td colspan="6" class="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">جار التحميل...</span>
              </div>
            </td>
          </tr>
          <tr v-else-if="!products || Object.keys(products).length === 0">
            <td colspan="6" class="text-center">لا توجد منتجات متاحة</td>
          </tr>
          <tr v-else v-for="(product, key) in products" :key="key">
            <td>
              <img :src="product.image" :alt="product.name" style="width: 50px; height: 50px; object-fit: cover;" 
                   @error="$event.target.src = '/logo.png'">
            </td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }} EGP</td>
            <td>{{ product.category === 'man' ? 'رجالي' : 'نسائي' }}</td>
            <td>
              <span v-if="product.best_seller === true" class="badge bg-success">
                <i class="fas fa-check me-1"></i>نعم
              </span>
              <span v-else class="badge bg-secondary">
                <i class="fas fa-times me-1"></i>لا
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
// SEO blocking - prevent indexing
useHead({
  title: 'إدارة منتجات العطور',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'googlebot', content: 'noindex, nofollow' },
    { name: 'description', content: 'صفحة إدارة المنتجات - غير مخصصة للفهرسة' }
  ]
})

// Firebase REST API URL
const FIREBASE_URL = 'https://guzel-1f032-default-rtdb.firebaseio.com/products'

// Reactive data with proper error handling
const { data: products, pending, error, refresh } = await useFetch(`${FIREBASE_URL}.json`, {
  default: () => ({}),
  onResponseError({ response }) {
    console.error('Error fetching products:', response._data)
  }
})

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
    const response = await $fetch(`${FIREBASE_URL}.json`, {
      method: 'POST',
      body: {
        name: newProduct.value.name,
        description: newProduct.value.description,
        price: parseFloat(newProduct.value.price),
        discount: parseInt(newProduct.value.discount) || 0,
        image: newProduct.value.image,
        category: newProduct.value.category,
        meta_desc: newProduct.value.meta_desc,
        best_seller: newProduct.value.best_seller === true
      }
    })
    
    if (response) {
      alert('تمت إضافة المنتج بنجاح')
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
      await refresh()
    }
  } catch (error) {
    console.error('Error adding product:', error)
    alert('حدث خطأ أثناء إضافة المنتج')
  } finally {
    adding.value = false
  }
}

async function updateProduct() {
  updating.value = true
  try {
    const response = await $fetch(`${FIREBASE_URL}/${editingProduct.value.id}.json`, {
      method: 'PATCH',
      body: {
        name: editingProduct.value.name,
        description: editingProduct.value.description,
        price: parseFloat(editingProduct.value.price),
        discount: parseInt(editingProduct.value.discount) || 0,
        image: editingProduct.value.image,
        category: editingProduct.value.category,
        meta_desc: editingProduct.value.meta_desc,
        best_seller: editingProduct.value.best_seller === true
      }
    })
    
    if (response) {
      alert('تم تحديث المنتج بنجاح')
      // Close modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('editProductModal'))
      modal.hide()
      // Refresh data
      await refresh()
    }
  } catch (error) {
    console.error('Error updating product:', error)
    alert('حدث خطأ أثناء تحديث المنتج')
  } finally {
    updating.value = false
  }
}

async function confirmDelete() {
  deleting.value = true
  try {
    const response = await $fetch(`${FIREBASE_URL}/${deletingProductId.value}.json`, {
      method: 'DELETE'
    })
    
    if (response === null) {
      alert('تم حذف المنتج بنجاح')
      // Close modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('deleteProductModal'))
      modal.hide()
      // Refresh data
      await refresh()
    }
  } catch (error) {
    console.error('Error deleting product:', error)
    alert('حدث خطأ أثناء حذف المنتج')
  } finally {
    deleting.value = false
    deletingProductId.value = null
  }
}

// Load Bootstrap on mount
onMounted(() => {
  // Load Bootstrap JS if not already loaded
  if (typeof bootstrap === 'undefined') {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'
    document.head.appendChild(script)
  }
})
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
</style> 