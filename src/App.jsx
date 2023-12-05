import AddItems from "./components/AddItems"
import Billing from "./components/Billing"
import Quantity from "./components/Quantity"
import { CartProvider } from "./context/CartContext"

function App() {
  return (
    <>
      <CartProvider>
        <Quantity />
        <AddItems />
        <Billing />
      </CartProvider>
    </>
  )
}

export default App
