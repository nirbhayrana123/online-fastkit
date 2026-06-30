import products from "../data/products";
import { useNavigate } from "react-router-dom";
  const handleScroll = () => {
    document.getElementById("shopnow")?.scrollIntoView({ behavior: "smooth" });
  };

export default function Home({ addToCart, search, cart, decreaseQty }: any) {
  const navigate = useNavigate();

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main mb-6">

      <section>
        <div className="hero">
          <div className="contnt">
            <h1>Fresh Groceries Delivered to Your Doorstep</h1>
            <p>Best quality fruits, vegetables, and daily essentials at affordable prices. Shop now and get fast delivery with great discounts</p>
            <button onClick={handleScroll} className="cart-btn">Shop Now</button>
          </div>
          <img src="./images/mainbanner.png" />
        </div>
      </section>

      <h2  id="shopnow">Bestsellers</h2>
      <div className="product-row">
        {filtered.map((p) => (
          <div className="product-card">
            {p.discount && (
              <span className="discount">{p.discount}</span>
            )}
            <div className="imgbox" key={p.id} onClick={() => navigate(`/product/${p.id}`)} >
              <img src={p.main_img} />
            </div>
            <div className="bottom">
              <div className="productname">
                <h4>{p.name}</h4>
              </div>
              <p>{p.weight}</p>
              <div className="pricebox">
                <p className="oldprice">₹{p.oldPrice}</p>
                <p className="price">₹{p.newPrice}</p>
              </div>


              {(() => {
                const item = cart.find((i: any) => i.id === p.id);

                return item ? (
                  <div className="qty-box" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => decreaseQty(p)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => addToCart(p)}>+</button>
                  </div>
                ) : (
                  <button
                    className="add-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(p);
                    }}
                  >
                    Add
                  </button>
                );
              })()}



            </div>

          </div>
        ))}
      </div> 
    </div>
  );
}