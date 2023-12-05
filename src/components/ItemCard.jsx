import React from "react"

const ItemCard = ({ name, price, sold }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <div>
        <div>
          <b>{name}</b>
        </div>
        <div>
          <b>{sold}</b>
        </div>
      </div>
      <div>{price}</div>
    </div>
  )
}

export default ItemCard
