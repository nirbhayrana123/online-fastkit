import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";

export default function ProductDetails({ addToCart }: any) {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);
  const [mainImg, setMainImg] = useState(product?.main_img);
  const [zoomStyle, setZoomStyle] = useState<any>({});
  const handleZoom = (e: any) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      display: "block",
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  if (!product) return <h2>Not found</h2>;
  return (
    <div className="product-details">

      {/* LEFT IMAGE SECTION */}
      <div className="product-details-img">
        <div
          className="zoom-container"
          onMouseMove={handleZoom}
          onMouseLeave={() => setZoomStyle({})}
        >
          <img src={mainImg} className="main-img" />

          {/* ZOOM LAYER */}
          <div
            className="zoom-img"
            style={{
              backgroundImage: `url(${mainImg})`,
              ...zoomStyle,
            }}
          ></div>
        </div>

        {/* THUMBNAILS */}
        <div className="all-img">
          {[product.main_img, product.one_img, product.two_img, product.three_img, product.four_img, product.five_img]
            .filter(Boolean)
            .map((img, i) => (
              <img key={i} src={img} onClick={() => setMainImg(img)} />
            ))}
        </div>
      </div>

      <div className="boder-med"></div>

      {/* RIGHT CONTENT */}
      <div className="product-content">
        <div className="newbarr">
          <Link to="/" className="logo">Home</Link> 
          <span>/</span>
          <span>{product.name}</span>
        </div>
        <h4>{product.name}</h4>
        <p className="declaration">{product.declaration}</p>
        <p className="weight">{product.weight}</p>

        <div className="pricebox">
          <p className="oldprice">₹{product.oldPrice}</p>
          <p className="price">₹{product.newPrice}</p>
        </div>

        <div className="button-row"> 
          <button className="cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>





  );
}