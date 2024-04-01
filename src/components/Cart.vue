<script setup>
import { cart } from "../store/cart";
</script>
 
<template>
  <div class="bg-white">
    <div class="mx-auto px-12 py-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Cart</h2>
      <div>
        <div class="flex items-center my-5">
          <p class="w-2/3">
            <router-link to="/products/1"> Product 1 </router-link>
          </p>
          <p class="w-[100px]">$10</p>
          <p>
            <input type="number" value="1" />
          </p>
        </div>
        <div class="flex items-center my-5">
          <p class="w-2/3">
            <router-link to="/products/1"> Product 1 </router-link>
          </p>
          <p class="w-[100px]">$10</p>
          <p>
            <input type="number" value="1" />
          </p>
        </div>

        <div class="flex items-center my-5">
          <p class="w-2/3">Total</p>
          <p class="w-[100px]"></p>
          <p>
            <strong>$20</strong>
          </p>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Cart
        </button>

        <button
          class="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Empty Cart
        </button>

        <button
          class="ml-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>
 
<style scoped></style>