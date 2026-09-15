import products from "../data/api";
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
        </div>
      </section>

      <h2 id="shopnow">Bestsellers</h2>
      <section className="category-section">
        <div className="category-wrapper">

          <div className="cat-card" style={{ backgroundColor: '#f2fce4' }}>
            <div className="img-holder">
              <img src="https://cdn-icons-png.flaticon.com/512/3081/3081949.png" alt="Cake & Milk" />
            </div>
            <h3>Cake & Milk</h3>
            <span>26 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: '#fffceb' }}>
            <div className="img-holder">
              <img src="https://cdn-icons-png.flaticon.com/512/888/888634.png" alt="Oganic Kiwi" />
            </div>
            <h3>Oganic Kiwi</h3>
            <span>28 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: '#ecffec' }}>
            <div className="img-holder">
              <img src="https://cdn-icons-png.flaticon.com/512/3137/3137044.png" alt="Peach" />
            </div>
            <h3>Peach</h3>
            <span>14 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: '#feefea' }}>
            <div className="img-holder">
              <img src="https://cdn-icons-png.flaticon.com/512/415/415733.png" alt="Red Apple" />
            </div>
            <h3>Red Apple</h3>
            <span>54 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: '#fff3eb' }}>
            <div className="img-holder">
              <img src="https://cdn-icons-png.flaticon.com/512/2553/2553691.png" alt="Snack" />
            </div>
            <h3>Snack</h3>
            <span>56 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: '#fff3ff' }}>
            <div className="img-holder">
              <img src="https://cdn-icons-png.flaticon.com/512/2347/2347019.png" alt="Vegetables" />
            </div>
            <h3>Vegetables</h3>
            <span>72 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: '#edf9ee' }}>
            <div className="img-holder">
              <img src="https://cdn-icons-png.flaticon.com/512/590/590685.png" alt="Strawberry" />
            </div>
            <h3>Strawberry</h3>
            <span>36 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: '#fdeedd' }}>
            <div className="img-holder">
              <img src="https://cdn-icons-png.flaticon.com/512/3137/3137024.png" alt="Black plum" />
            </div>
            <h3>Black plum</h3>
            <span>123 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: '#fffceb' }}>
            <div className="img-holder">
              <img src="https://cdn-icons-png.flaticon.com/512/1147/1147822.png" alt="Custard apple" />
            </div>
            <h3>Custard apple</h3>
            <span>34 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: '#feefea' }}>
            <div className="img-holder">
              <img src="https://cdn-icons-png.flaticon.com/512/2935/2935307.png" alt="Coffe & Tea" />
            </div>
            <h3>Coffe & Tea</h3>
            <span>89 items</span>
          </div>

        </div>
      </section>
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
              <div className="price-row">
              <div className="pricebox">
                <p className="price">₹{p.newPrice}</p>
                <p className="oldprice">₹{p.oldPrice}</p> 
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
                  <button className="add-btn"onClick={(e) => {e.stopPropagation();addToCart(p); }}><i className="fa-solid fa-cart-shopping"></i> Add</button>
                  
                );
              })()}



            </div>

          </div>
          </div>
        ))}
      </div>
    </div>
  );
}