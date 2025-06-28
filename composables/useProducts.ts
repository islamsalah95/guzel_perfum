import { ref, computed, readonly } from 'vue'
import { useApi } from '~/composables/useApi'

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  category: string;
  meta_desc: string;
  best_seller: boolean;
  created_at?: string;
  created_by?: string;
  updated_at?: string;
  updated_by?: string;
}

interface Filter {
  best_seller?: boolean;
  category?: string;
}

export function useProducts(filter: Filter = {}) {
  const { getFirebaseData } = useApi()
  const products = ref<Record<string, Product>>({})
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Load products from Firebase
  const loadProducts = async () => {
    loading.value = true
    error.value = null
    
    try {
      const data = await getFirebaseData<Record<string, Product>>('/products')
      products.value = data || {}
    } catch (err: any) {
      error.value = err.message || 'حدث خطأ أثناء تحميل المنتجات'
      console.error('Error loading products:', err)
    } finally {
      loading.value = false
    }
  }

  // Computed products with filtering
  const filteredProducts = computed(() => {
    if (!products.value) return []
    
    return Object.entries(products.value)
      .map(([key, product]) => ({ ...product, id: key }))
      .filter(product => {
        if (filter.best_seller !== undefined && product.best_seller !== filter.best_seller) return false;
        if (filter.category && product.category !== filter.category) return false;
        return true;
      });
  })

  // Get product by ID
  const getProductById = (id: string): Product | null => {
    if (!products.value || !products.value[id]) return null
    return { ...products.value[id], id }
  }

  // Get best sellers
  const bestSellers = computed(() => {
    return filteredProducts.value.filter(product => product.best_seller === true)
  })

  // Get products by category
  const getProductsByCategory = (category: string) => {
    return filteredProducts.value.filter(product => product.category === category)
  }

  // Get men's products
  const mensProducts = computed(() => {
    return getProductsByCategory('man')
  })

  // Get women's products
  const womensProducts = computed(() => {
    return getProductsByCategory('women')
  })

  return { 
    products: filteredProducts,
    allProducts: products,
    loading: readonly(loading),
    error: readonly(error),
    loadProducts,
    getProductById,
    bestSellers,
    mensProducts,
    womensProducts,
    getProductsByCategory
  }
} 