import { createContext, useEffect, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [total, setTotal] = useState(0)

  const addProducts = (product) => {
    setItems([...items, product])

    setTotal((prevTotal) => {
      let newTotal = prevTotal + product.selectedProduct[0].price * product.qty
      console.log("Total:", newTotal)
      return newTotal
    })

    console.log("Total:", total)
    console.log("items:", items)
    console.log("Product:", product)
  }

  return (
    <CartContext.Provider value={{ items, addProducts, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
