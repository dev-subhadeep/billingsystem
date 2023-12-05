import { createContext, useState } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState()
  const [total, setTotal] = useState(0)

  return (
    <CartContext.Provider value={{ items, setItems, total, setTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
