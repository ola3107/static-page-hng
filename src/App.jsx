import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import SingleProduct from "./pages/SingleProduct"

function App() {

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path='/page/SingleProduct/:id' element={<SingleProduct />} />
    </Routes>
     
    </>
  )
}

export default App
