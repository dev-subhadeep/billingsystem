import React, { useContext, useEffect, useState } from "react"
import CartContext from "../context/CartContext"
import ItemCard from "./ItemCard"
import axios from "axios"
import { backend } from "../../utils/constants"

const ItemManagement = () => {
  const { items } = useContext(CartContext)
  const [productList, setProductList] = useState([])
  useEffect(() => {
    axios
      .get(`${backend}/items`)
      .then((res) => {
        setProductList(res.data)
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div>
      <h2>Items</h2>
      <div>
        {productList.length > 0 &&
          productList.map((product) => (
            <ItemCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  )
}

export default ItemManagement
