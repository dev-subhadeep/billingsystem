import React, { useEffect, useState } from "react"
import { backend } from "../../utils/constants"
import axios from "axios"

const AddItems = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handlePrice = (e) => {
    if (+e >= 1) {
      setPrice(+e.target.value)
    } else {
      alert("Item price needs to be greater than 1")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      url: `${backend}/items`,
      method: "post",
      data: { name, price },
    })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error))
  }
  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input type="text" placeholder="Price" onChange={handlePrice} />
        </div>
        <div>
          <button>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddItems
