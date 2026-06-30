export default function CartSidebar({ cart, closeCart }: any) {

  // Total calculate
  const itemsTotal = cart.reduce(
    (sum: number, item: any) => sum + Number(item.newPrice) * (item.qty || 1),
    0
  );

  const handlingCharge = 2;
  const grandTotal = itemsTotal + handlingCharge;

  return (
    <div>
      <a className="cart-header" onClick={closeCart}>
        <i className="fa-solid fa-angles-left"></i> My Cart
      </a>

      <div className="itemscart">
        {cart.map((item: any) => (
          <div className="cart-item" key={item.id}>
            <img src={item.main_img} />
            <div className="cart-info">
              <h4>{item.name}</h4>
              <div className="pricebox">
                <p className="oldprice">₹{item.oldPrice}</p>
                <p className="cart-price">
                  ₹{item.newPrice} × {item.qty || 1}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Top Total */}
      
      </div>

      <div className="bill-box">
        <h4>Bill details</h4>

        <div className="bill-row">
          <span>
            <i className="fa-solid fa-receipt"></i> Items Total
          </span>
          <span>₹{itemsTotal}</span>
        </div>

        <div className="bill-row">
          <span>
            <i className="fa-solid fa-motorcycle"></i> Delivery charge
          </span>
          <span className="free">FREE</span>
        </div>

        <div className="bill-row">
          <span>
            <i className="fa-solid fa-bag-shopping"></i> Handling charge
          </span>
          <span>₹{handlingCharge}</span>
        </div>

        <div className="bill-row total">
          <span>Grand total</span>
          <span>₹{grandTotal}</span>
        </div>
      </div>

      <div className="bottom-bar">
        <span>₹{grandTotal} TOTAL</span>
        <span>
          Proceed <i className="fa-solid fa-angle-right"></i>
        </span>
      </div>
    </div>
  );
}