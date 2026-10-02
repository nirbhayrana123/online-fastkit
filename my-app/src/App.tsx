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
    setCart((prevCart) => {
      const exist = prevCart.find((i) => String(i.id) === String(product.id));
      if (exist) {
        return prevCart.map((i) =>
          String(i.id) === String(product.id) ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const decreaseQty = (product: any) => {
    setCart((prevCart) =>
      prevCart
        .map((i) =>
          String(i.id) === String(product.id) ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        cart={cart}
        toggleCart={toggleCart}
      />

      {/* MAIN CONTAINER WRAPPER */}
      <main className="main-content container" style={{ minHeight: "70vh" }}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                search={search}
                cart={cart}
                decreaseQty={decreaseQty}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                addToCart={addToCart}
                cart={cart}
                decreaseQty={decreaseQty}
              />
            }
          />
        </Routes>

        {/* CART SIDEBAR */}
        <div className={`cart-sidebar ${cartOpen ? "active" : ""}`}>
          <CartSidebar cart={cart} closeCart={() => setCartOpen(false)} />
        </div>
      </main>

      <Footer />
    </Router>
  );
}