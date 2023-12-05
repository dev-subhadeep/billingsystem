import React, { useContext } from "react"
import CartContext from "../context/CartContext"

const Billing = () => {
  const { items, total } = useContext(CartContext)
  return (
    <div>
      <h1>New Bill</h1>
      <div>Amount: Rs {total}</div>
      {items?.map((item) => (
        <p>{item.product}</p>
      ))}
    </div>
  )
}

export default Billing
