import React, { useContext } from "react"
import CartContext from "../context/CartContext"

const NewBill = () => {
  const { total } = useContext(CartContext)
  return (
    <div>
      <h2>New Bill</h2>
      <div></div>
      <div>
        <div>
          <b>Amount: </b> {total}{" "}
        </div>
        <div>
          <b>Total Item: </b> 1{" "}
        </div>
      </div>
    </div>
  )
}

export default NewBill
