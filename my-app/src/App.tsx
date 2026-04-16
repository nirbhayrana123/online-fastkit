import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./components/pages/ProductDetails";
import CartSidebar from "./components/CartSidebar";

export default function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: any) => {
    const exist = cart.find((i) => i.id === product.id);

    if (exist) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // 🔥 NEW (for - button)
  const decreaseQty = (product: any) => {
    setCart(
      cart
        .map((i) =>
          i.id === product.id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <Router>

      {/* HEADER */}
      <Header
        search={search}
        setSearch={setSearch}
        cart={cart}
        toggleCart={toggleCart}
      />

      <div className="container">

        {/* LEFT */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                search={search}
                cart={cart}              // ✅ IMPORTANT
                decreaseQty={decreaseQty} // ✅ IMPORTANT
              />
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
        </Routes>

        {/* RIGHT CART */}
        <div className={`cart-sidebar ${cartOpen ? "active" : ""}`}>
          <CartSidebar
            cart={cart}
            closeCart={() => setCartOpen(false)}
          />
        </div>

      </div>

      <Footer />
    </Router>
  );
}