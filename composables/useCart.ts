import { ref } from 'vue'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export const useCart = () => {
  const cart = ref<CartItem[]>([])
  const cartCount = ref(0)

  const addToCart = (item: CartItem) => {
    const existingItem = cart.value.find(i => i.id === item.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({ ...item, quantity: 1 })
    }
    updateCartCount()
  }

  const removeFromCart = (itemId: string) => {
    const index = cart.value.findIndex(i => i.id === itemId)
    if (index !== -1) {
      cart.value.splice(index, 1)
      updateCartCount()
    }
  }

  const updateCartCount = () => {
    cartCount.value = cart.value.reduce((total, item) => total + item.quantity, 0)
  }

  return {
    cart,
    cartCount,
    addToCart,
    removeFromCart
  }
}