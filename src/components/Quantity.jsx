import React, { useContext, useEffect, useState } from "react"
import { backend } from "../../utils/constants"
import axios from "axios"
import CartContext from "../context/CartContext"

const Quantity = () => {
  const [products, setProducts] = useState([])
  const [selectedItem, setSelectedItem] = useState("")
  const [qty, setQty] = useState("")

  const { items, total } = useContext(CartContext)

  useEffect(() => {
    axios({
      url: `${backend}/items`,
      method: "get",
    })
      .then((res) => {
        setProducts(res.data)
        setSelectedItem(res.data[0].id)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleQty = () => {
    items.push({ product, qty })
  }

  return (
    <div>
      <h1>Select Item</h1>
      <select name="product" onChange={(e) => setSelectedItem(e.target.value)}>
        {products.length > 0
          ? products.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))
          : ""}
      </select>
      <div>
        <input
          type="text"
          value={qty}
          onChange={(e) => setQty(+e.target.value)}
          placeholder="Quantity"
        />
      </div>
      <div>
        <button onClick={handleQty}>Add</button>
      </div>
    </div>
  )
}

export default Quantity
