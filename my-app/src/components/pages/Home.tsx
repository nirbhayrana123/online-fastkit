import products from "../data/products";
import { useNavigate } from "react-router-dom";

export default function Home({ addToCart, search, cart, decreaseQty }: any) {
  const navigate = useNavigate();

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main">

      <section>
        <div className="banner">
          <img src="./images/mainbanner.jpg" />
        </div>
      </section>

      <h2>Bestsellers</h2>
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
              <p className="weight">{p.weight}</p>
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