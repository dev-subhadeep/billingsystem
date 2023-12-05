import React, { useContext, useEffect, useState } from "react"
import CartContext from "../context/CartContext"
import axios from "axios"
import { backend } from "../../utils/constants"

const AddToCart = () => {
  const { addProducts, total } = useContext(CartContext)
  const [productList, setProductList] = useState([])
  const [qty, setQty] = useState("")
  const [selectedProduct, setSelectedProduct] = useState("")

  const handleAddToCart = () => {
    addProducts({
      selectedProduct: productList.filter(
        (product) => product.id === selectedProduct
      ),
      qty,
    })
  }

  useEffect(() => {
    axios
      .get(`${backend}/items`)
      .then((res) => {
        setProductList(res.data)
        setSelectedProduct(res.data[0])
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div>
      <h2>Select Item</h2>
      <select
        value={selectedProduct}
        onClick={(e) => setSelectedProduct(+e.target.value)}
      >
        {productList.length
          ? productList.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))
          : null}
      </select>
      <div>
        <input
          type="text"
          onChange={(e) =>
            !isNaN(+e.target.value)
              ? setQty(+e.target.value)
              : alert("must be a number")
          }
          placeholder="Quantity"
          value={qty}
        />
      </div>
      <div>
        <button onClick={handleAddToCart}>Add</button>
      </div>
    </div>
  )
}

export default AddToCart
