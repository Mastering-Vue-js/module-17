<script setup>
import { onBeforeMount } from "vue";
import { order } from "../store/order";
import { authStore } from "../store/store";

onBeforeMount(() => {
  order.fetchOrders();
});

function toggleProducts() {}
</script>
 
<template>
  <div class="bg-white">
    <div class="mx-auto px-12 py-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Cart</h2>
      <p class="my-10"></p>
    </div>
    <div class="px-12 py-8">
      <div class="my-2" v-for="order in order.orders" :key="order.id">
        <div class="order-info flex justify-between w-full">
          <p class="w-1/3"><strong>Order ID:</strong> {{ order.id }}</p>
          <p class="w-1/3"><strong>Total Amount:</strong> ${{ order.total_amount }}</p>
          <p class="text-right w-1/3">
            <button
              @click="order.toggleProducts = !order.toggleProducts"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {{ order.toggleProducts? 'Hide': 'Show' }} products
            </button>
          </p>
          <hr />
        </div>
        <!-- Show products for the current order when toggled -->
        <div class="border my-5 p-5" v-if="order.toggleProducts">
          <div class="flex items-center my-3" v-for="product in order.products" :key="product.id">
            <p class="w-2/3">{{ product.title }}</p>
            <p class="w-[100px]">${{ product.price }}</p>
            <p>Quantity: {{ product.pivot.quantity }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<style scoped></style>