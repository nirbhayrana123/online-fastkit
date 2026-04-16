import { useParams } from "react-router-dom";
import products from "../data/products";
import { Link } from "react-router-dom";

export default function ProductDetails({ addToCart }: any) {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  if (!product) return <h2>Not found</h2>;

  return (
    <div className="product-details">
      <div className="product-details-img">
        <img src={product.main_img} />

        <div className="all-img">
          <img src={product.one_img} />
          <img src={product.two_img} />
          <img src={product.three_img} />
          <img src={product.four_img} />
          <img src={product.five_img} />
        </div>
      </div>
      <div className="boder-med"></div>
      <div className="product-content">
        <h1>{product.name}</h1>
        <p className="declaration">{product.declaration}</p>
        <p className="weight">{product.weight}</p>
        <div className="pricebox">
          <p className="oldprice">₹{product.oldPrice}</p>
          <p className="price">₹{product.newPrice}</p>
        </div>
        <div className="button-row">
          <button className="cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to="/" className="cart-btn"><i className="fa-solid fa-angles-left"></i> Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}