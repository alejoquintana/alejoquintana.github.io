import {
    ref
} from 'vue'
import {
    defineStore
} from 'pinia'

export const orderStore = defineStore('order', () => {
    const products = ref([])
    const balance = ref({})
    async function fetchData() {
        const response = await fetch('/order_products.json');
        const json = await response.json();
        console.log('json', json);
        products.value = json.products
    }
    async function sumAmount(id, sum) {
        products.value.map((prod) => {
            if (id == prod.id) {
                prod.amount += (sum ? 1 : -1)
            }
        })
    }
    async function generateOrder() {
        let ganancia = 0
        let URL = "https://api.whatsapp.com/send?phone=5491165083760&text="
        products.value.map((prod) => {
            if (prod.amount > 0) {
            if (!balance.value[prod.brand]) {
                balance.value[prod.brand] = []
            }
                balance.value[prod.brand].push(`${prod.amount} - ${prod.name}`);
            }
        })
        //! BREAK LINE => %0A
        //! SPACE => %20
        for (const [key, value] of Object.entries(balance.value)) {
            console.log(value);
            URL = URL + `${key.toUpperCase()}%0A`
            value.forEach(item => {
                URL = URL + `${item}%0A`
            });
            // URL = URL + `${key.toUpperCase()}%3A%20%24${value}%0A`
            URL = URL + '%0A'
            console.log("123",123);
        }
        window.open(URL, "_blank")
    }

    return {
        products,
        sumAmount,
        fetchData,
        generateOrder
    }
})
