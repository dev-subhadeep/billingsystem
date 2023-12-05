import AddItems from "./components/AddItems"
import AddToCart from "./components/AddToCart"
import ItemManagement from "./components/ItemManagement"
import NewBill from "./components/NewBill"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <>
      <CartProvider>
        <AddItems />
        <AddToCart />
        <ItemManagement />
        <NewBill />
      </CartProvider>
    </>
  )
}

export default App
