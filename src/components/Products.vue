//create home component
<script setup>
import { ref, reactive, onBeforeMount } from "vue";
import { cart } from "../store/cart";
import { wishlist } from "../store/wishlist";

import WishListIcon from "./WishListIcon.vue";
import { authStore } from "../store/store";

const products = ref([]);
function getSlug(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}
onBeforeMount(() => {});
</script>
<template>
  <div class="bg-white">
    <div class="mx-auto px-12 py-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-20"
      >
        <div class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1711843250832-404dae8ff71d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link to="/products/1">Product 1</router-link>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">$10</p>
          </div>
          <div class="flex justify-between items-center">
            <button
              class="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
            >
              Add To Cart
            </button>
            <WishListIcon />
          </div>
        </div>
        <div class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1711843250832-404dae8ff71d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link to="/products/1">Product 1</router-link>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">$10</p>
          </div>
          <div class="flex justify-between items-center">
            <button
              class="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
            >
              Add To Cart
            </button>
            <WishListIcon />
          </div>
        </div>
        <div class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1711843250832-404dae8ff71d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link to="/products/1">Product 1</router-link>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">$10</p>
          </div>
          <div class="flex justify-between items-center">
            <button
              class="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
            >
              Add To Cart
            </button>
            <WishListIcon />
          </div>
        </div>
        <div class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1711843250832-404dae8ff71d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link to="/products/1">Product 1</router-link>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">$10</p>
          </div>
          <div class="flex justify-between items-center">
            <button
              class="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
            >
              Add To Cart
            </button>
            <WishListIcon />
          </div>
        </div>
        <div class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1711843250832-404dae8ff71d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link to="/products/1">Product 1</router-link>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">$10</p>
          </div>
          <div class="flex justify-between items-center">
            <button
              class="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
            >
              Add To Cart
            </button>
            <WishListIcon />
          </div>
        </div>
        <div class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1711843250832-404dae8ff71d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link to="/products/1">Product 1</router-link>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">$10</p>
          </div>
          <div class="flex justify-between items-center">
            <button
              class="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
            >
              Add To Cart
            </button>
            <WishListIcon />
          </div>
        </div>
        <div class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1711843250832-404dae8ff71d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link to="/products/1">Product 1</router-link>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">$10</p>
          </div>
          <div class="flex justify-between items-center">
            <button
              class="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
            >
              Add To Cart
            </button>
            <WishListIcon />
          </div>
        </div>
        <div class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              src="https://images.unsplash.com/photo-1711843250832-404dae8ff71d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <router-link to="/products/1">Product 1</router-link>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">$10</p>
          </div>
          <div class="flex justify-between items-center">
            <button
              class="mt-2 bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded"
            >
              Add To Cart
            </button>
            <WishListIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>