import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../data/api";

interface ProductDetailsProps {
  addToCart: (product: any) => void;
  cart?: any[];
  decreaseQty: (product: any) => void;
}

export default function ProductDetails({
  addToCart,
  cart = [],
  decreaseQty,
}: ProductDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find product with String conversion
  const product = products.find(
    (p: any) => String(p.id) === String(id)
  );

  const [mainImg, setMainImg] = useState<string>("");
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});

  // Route URL change hone par automatic top scroll
  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setMainImg(product.main_img || "");
    }
  }, [id, product]);

  const handleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      display: "block",
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  // Agar product na mile
  if (!product) {
    return (
      <div className="product-not-found" style={{ padding: "50px", textAlign: "center" }}>
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  // Thumbnails Array
  const productImages: string[] = [
    product?.main_img,
    product?.one_img,
    product?.two_img,
    product?.three_img,
    product?.four_img,
    product?.five_img,
    product?.six_img,
  ].filter((img): img is string => Boolean(img));

  // Current product in cart
  const currentInCart = cart?.find((i: any) => String(i.id) === String(product.id));

  return (
    <>
      <div id="product" className="product-details">
        {/* LEFT IMAGE SECTION */}
        <div className="product-details-img">
          <div
            className="zoom-container"
            onMouseMove={handleZoom}
            onMouseLeave={() => setZoomStyle({})}
          >
            <img src={mainImg} className="main-img" alt={product.name} />
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
            {productImages.map((img: string, index: number) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                onClick={() => setMainImg(img)}
              />
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
            <Link to="" className="logo">Product ID :</Link>
            <span>{product.id}</span>
          </div>

          <h4>{product.name}</h4>

          {(product as any).declaration && (
            <p className="declaration">{(product as any).declaration}</p>
          )}

          {product.weight && <p className="weight">{product.weight}</p>}

          <div className="pricebox mb-2">
            {product.oldPrice && <p className="oldprice">₹{product.oldPrice}</p>}
            <p className="price">₹{product.newPrice}</p>
          </div>

          {/* ADD TO CART / QTY COUNTER */}
          <div className="button-row">
            {currentInCart ? (
              <div className="qty-box" style={{ display: "inline-flex", gap: "10px", alignItems: "center" }}>
                <button onClick={() => decreaseQty(product)}>-</button>
                <span>{currentInCart.qty}</span>
                <button onClick={() => addToCart(product)}>+</button>
              </div>
            ) : (
              <button className="cart-btn" onClick={() => addToCart(product)}>
                <i className="fa-solid fa-cart-shopping"></i> Add to Cart
              </button>
            )}

          <button className="cart-btn order">Order Now</button>

          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS BOTTOM GRID */}
      <div className="product-row">
        {products.map((p: any) => {
          const item = cart?.find((i: any) => String(i.id) === String(p.id));

          return (
            <div className="product-card" key={p.id}>
              {p.discount && <span className="discount">{p.discount}</span>}

              <div
                className="imgbox"
                onClick={() => {
                  navigate(`/product/${p.id}`);
                  window.scrollTo(0, 0);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={p.main_img} alt={p.name} />
              </div>

              <div className="bottom">
                <div
                  className="productname"
                  onClick={() => {
                    navigate(`/product/${p.id}`);
                    window.scrollTo(0, 0);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <h4>{p.name}</h4>
                </div>

                <p>{p.weight}</p>

                <div className="price-row">
                  <div className="pricebox">
                    {p.oldPrice && <p className="oldprice">₹{p.oldPrice}</p>}
                    <p className="price">₹{p.newPrice}</p>
                  </div>

                  {item ? (
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
                      <i className="fa-solid fa-cart-shopping"></i> Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}