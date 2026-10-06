import { useNavigate } from "react-router-dom";
import products from "../data/api";

interface HomeProps {
  addToCart: (product: any) => void;
  search: string;
  cart: any[];
  decreaseQty: (product: any) => void;
}

export default function Home({
  addToCart,
  search,
  cart,
  decreaseQty,
}: HomeProps) {
  const navigate = useNavigate();

  // Search filter logic
  const filteredProducts = products.filter((p: any) => {
    const searchTerm = search.toLowerCase();

    const matchesName = p.name ? p.name.toLowerCase().includes(searchTerm) : false;
    const matchesKeyword = p.keyword ? p.keyword.toLowerCase().includes(searchTerm) : false;

    return matchesName || matchesKeyword;
  });
  return (
    <div className="home-page main mb-6">
      <section><div className="hero"><div className="contnt"><h1>Fresh Groceries Delivered to Your Doorstep</h1><p>Best quality fruits, vegetables, and daily essentials at affordable prices. Shop now and get fast delivery with great discounts</p><button className="cart-btn">Shop Now</button></div></div></section>
      <h2 id="shopnow">Bestsellers</h2>

      <section className="category-section">
        <div className="category-wrapper">
          <div className="cat-card" style={{ backgroundColor: "rgb(242, 252, 228)" }}>
            <div className="img-holder">
              <img alt="Cake & Milk" src="https://cdn-icons-png.flaticon.com/512/3081/3081949.png" />
            </div>
            <h3>Cake &amp; Milk</h3>
            <span>26 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: "rgb(255, 252, 235)" }}>
            <div className="img-holder">
              <img alt="Oganic Kiwi" src="https://cdn-icons-png.flaticon.com/512/888/888634.png" />
            </div>
            <h3>Oganic Kiwi</h3>
            <span>28 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: "rgb(236, 255, 236)" }}>
            <div className="img-holder">
              <img alt="Peach" src="https://cdn-icons-png.flaticon.com/512/3137/3137044.png" />
            </div>
            <h3>Peach</h3>
            <span>14 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: "rgb(254, 239, 234)" }}>
            <div className="img-holder">
              <img alt="Red Apple" src="https://cdn-icons-png.flaticon.com/512/415/415733.png" />
            </div>
            <h3>Red Apple</h3>
            <span>54 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: "rgb(255, 243, 235)" }}>
            <div className="img-holder">
              <img alt="Snack" src="https://cdn-icons-png.flaticon.com/512/2553/2553691.png" />
            </div>
            <h3>Snack</h3>
            <span>56 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: "rgb(255, 243, 255)" }}>
            <div className="img-holder">
              <img alt="Vegetables" src="https://cdn-icons-png.flaticon.com/512/2347/2347019.png" />
            </div>
            <h3>Vegetables</h3>
            <span>72 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: "rgb(237, 249, 238)" }}>
            <div className="img-holder">
              <img alt="Strawberry" src="https://cdn-icons-png.flaticon.com/512/590/590685.png" />
            </div>
            <h3>Strawberry</h3>
            <span>36 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: "rgb(253, 238, 221)" }}>
            <div className="img-holder">
              <img alt="Black plum" src="https://cdn-icons-png.flaticon.com/512/3137/3137024.png" />
            </div>
            <h3>Black plum</h3>
            <span>123 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: "rgb(255, 252, 235)" }}>
            <div className="img-holder">
              <img alt="Custard apple" src="https://cdn-icons-png.flaticon.com/512/1147/1147822.png" />
            </div>
            <h3>Custard apple</h3>
            <span>34 items</span>
          </div>

          <div className="cat-card" style={{ backgroundColor: "rgb(254, 239, 234)" }}>
            <div className="img-holder">
              <img alt="Coffe & Tea" src="https://cdn-icons-png.flaticon.com/512/2935/2935307.png" />
            </div>
            <h3>Coffe &amp; Tea</h3>
            <span>89 items</span>
          </div>
        </div>
      </section>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "50px 0" }}>
          <h3>No products found!</h3>
        </div>
      ) : (
        <div className="product-row">
          {filteredProducts.map((p: any) => {
            const item = cart?.find(
              (i: any) => String(i.id) === String(p.id)
            );

            return (
              <div className="product-card" key={p.id}>
                {p.discount && <span className="discount">{p.discount}</span>}

                <div
                  className="imgbox"
                  onClick={() => navigate(`/product/${p.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={p.main_img} alt={p.name} />
                </div>

                <div className="bottom">
                  <div className="productname" >
                    <h4>{p.name}</h4>
                  </div>

                  <p>{p.weight}</p>

                  <div className="price-row">
                    <div className="pricebox">
                      {p.oldPrice && <p className="oldprice">₹{p.oldPrice}</p>}
                      <p className="price">₹{p.newPrice}</p>
                    </div>

                    {item ? (
                      <div
                        className="qty-box"
                        onClick={(e) => e.stopPropagation()}
                      >
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
                        <i className="fa-solid fa-cart-shopping"></i> Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}