//create home component
<script setup>
import { useRoute } from "vue-router";
import { ref, reactive, onBeforeMount } from "vue";
import axios from "axios";
import { cart } from "../store/cart";
const route = useRoute();
const id = route.params.id;
const product = reactive({});
const comments = ref([]);
onBeforeMount(() => {});
</script>
<template>
  <article class="mb-10">
    <h1 class="text-xl mb-2">
      {{ product.title }}
    </h1>
    <p>
      <img
        class="w-60"
        src="https://images.unsplash.com/photo-1711843250832-404dae8ff71d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi
      reprehenderit cum, voluptate temporibus aliquid vero nesciunt iste culpa
      architecto. Ullam quisquam totam dolore pariatur repudiandae dignissimos
      eum earum voluptas.
    </p>
    <p>Price: $10</p>
    <p>
      <button
        class="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add To Cart
      </button>
    </p>
  </article>
</template>

<style></style>