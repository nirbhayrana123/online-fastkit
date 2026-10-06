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

  // Zoom function with controlled zoom level
  const handleZoom = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      display: "block",
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "120%",
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

  // Related Products Filtering Logic (Current product ko hata kar Same keyword/Name match karke top par LANA)
  const otherProducts = products.filter((p: any) => String(p.id) !== String(product.id));

  const sortedProducts = [...otherProducts].sort((a: any, b: any) => {
    const targetkeyword = (product.keyword || "").toLowerCase();
    const targetKeyword = (product.keyword || "").toLowerCase();

    const matchA =
      (a.keyword && a.keyword.toLowerCase() === targetkeyword) ||
      (a.name && targetkeyword && a.name.toLowerCase().includes(targetkeyword)) ||
      (a.keyword && targetKeyword && a.keyword.toLowerCase().includes(targetKeyword));

    const matchB =
      (b.keyword && b.keyword.toLowerCase() === targetkeyword) ||
      (b.name && targetkeyword && b.name.toLowerCase().includes(targetkeyword)) ||
      (b.keyword && targetKeyword && b.keyword.toLowerCase().includes(targetKeyword));

    if (matchA && !matchB) return -1;
    if (!matchA && matchB) return 1;
    return 0;
  });

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

          <h5>{product.name}</h5>

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

          <section className="why-choose-section">
            <h5>Why shop from FreshKart?</h5>

            <div className="features-grid">
              <div className="feature-card">
                <div className="icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                </div>
                <div className="feature-text">
                  <h6>Lightning Fast Express Delivery</h6>
                  <p>Get fresh groceries delivered right to your doorstep within 15 minutes.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l5.58-5.58c.94-.94.94-2.48 0-3.42L12 2Z" /><path d="M7 7h.01" /></svg>
                </div>
                <div className="feature-text">
                  <h6>Best Price Guarantee & Deals</h6>
                  <p>Enjoy direct wholesale prices and unbeatable daily discounts across products.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <div className="feature-text">
                  <h6>100% Quality & Freshness Assured</h6>
                  <p>Sourced straight from local farms and verified brands with strict quality control.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                </div>
                <div className="feature-text">
                  <h6>30,000+ Wide Product Assortment</h6>
                  <p>Explore thousands of products across daily staples, personal care, and household needs.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* RELATED PRODUCTS BOTTOM GRID (FILTERED) */}
      <div className="product-row">
        {sortedProducts.map((p: any) => {
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
                <div className="productname">
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