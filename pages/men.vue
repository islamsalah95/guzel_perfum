<template>
  <section class="container my-5">
    <h2 class="text-center mb-4" style="color: #e0b973">
      أفضل العطور الرجالى
    </h2>
    <div class="row g-4 justify-content-center">
      <template v-if="loading">
        <div class="col-12 text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">جار التحميل...</span>
          </div>
        </div>
      </template>
      <template v-else>
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="col-12 col-sm-6 col-lg-3"
        />
        <div v-if="!products.length" class="col-12 text-center py-5">
          <p class="text-muted">لا توجد منتجات متاحة حالياً</p>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProducts } from '~/composables/useProducts';
import ProductCard from '~/components/ProductCard.vue';
import { useHead } from '#app';
import { onMounted } from 'vue';

const { products, loading, loadProducts } = useProducts({ category: 'man' });

useHead({
  title: 'عطور رجالية فاخرة | Güzel',
  meta: [
    { name: 'description', content: 'اكتشف تشكيلة العطور الرجالية الفاخرة من Güzel. عطور أصلية بروائح مميزة تدوم طويلاً. تسوق الآن مع ضمان الجودة.' },
    { name: 'keywords', content: 'عطور رجالية, عطور رجالي, عطور فاخرة للرجال, عطور مصر رجالي, عطور أصلية رجالي' },
    { property: 'og:title', content: 'عطور رجالية فاخرة | Güzel' },
    { property: 'og:description', content: 'اكتشف تشكيلة العطور الرجالية الفاخرة من Güzel' },
  ],
});

// Load products on mount
onMounted(async () => {
  // Wait a moment for auth to initialize
  await new Promise(resolve => setTimeout(resolve, 100))
  
  await loadProducts()
})
</script> 