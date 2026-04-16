export default function CartSidebar({ cart, closeCart }: any) {
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
                <p className="oldprice">₹45</p>
                <p className="cart-price">₹40</p>
              </div>
            </div>
          </div>
        ))}

        <h3> Total: ₹ {cart.reduce((sum: number, i: any) => sum + i.price * i.qty, 0)}</h3>
      </div>

      <div className="bill-box">
        <h3>Bill details</h3>

        <div className="bill-row">
          <span><i className="fa-solid fa-receipt"></i> Items total</span>
          <span>₹<span id="totalPrice">314</span></span>
        </div>

        <div className="bill-row">
          <span><i className="fa-solid fa-motorcycle"></i> Delivery charge</span>
          <span className="free">FREE</span>
        </div>

        <div className="bill-row">
          <span><i className="fa-solid fa-bag-shopping"></i> Handling charge</span>
          <span>₹<span id="handling">2</span></span>
        </div>

        <div className="bill-row total">
          <span>Grand total</span>
          <span>₹<span id="grandTotal">0</span></span>
        </div>
      </div>

      <div className="bottom-bar">
        <span>₹<span id="bottomTotal">314</span>
          TOTAL</span>
        <span>Proceed <i className="fa-solid fa-angle-right"></i></span>
      </div>

    </div>
  );
}