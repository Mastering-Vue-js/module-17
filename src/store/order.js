import { reactive } from 'vue'
import { authStore } from './store'
const order = reactive({
    orders: [],
    async fetchOrders() {
    },
    async placeOrder(totalPrice, items) {
    }
})

export { order }