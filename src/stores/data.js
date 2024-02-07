import {
    ref
} from 'vue'
import {
    defineStore
} from 'pinia'

export const productStore = defineStore('product', () => {
    const products = ref([])
    const balance = ref({})
    async function fetchData() {
        const response = await fetch('/data.json');
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
    async function generateBalance() {
        let ganancia = 0
        let URL = "https://api.whatsapp.com/send?phone=5491165083760&text="
        products.value.map((prod) => {
            if (!balance.value[prod.brand]) {
                balance.value[prod.brand] = 0
            }
            balance.value[prod.brand] += prod.amount * prod.cost
            ganancia += prod.amount * (prod.final - prod.cost)
        })
        //! BREAK LINE => %0A
        //! SPACE => %20
        for (const [key, value] of Object.entries(balance.value)) {
            URL = URL + `${key.toUpperCase()}%3A%20%24${value}%0A`
        }
        URL = URL + `GANANCIA%3A%20%24${ganancia}%0A`
        window.open(URL, "_blank")
    }

    return {
        products,
        sumAmount,
        fetchData,
        generateBalance
    }
})
