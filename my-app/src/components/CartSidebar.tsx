export default function CartSidebar({ cart, closeCart }: any) {
  
  const itemsTotal = cart.reduce(
    (sum: number, item: any) => sum + Number(item.newPrice) * (item.qty || 1),
    0
  );

  const handlingCharge = 2;
  const grandTotal = itemsTotal + handlingCharge;

  // WhatsApp Send Function
  const sendToWhatsApp = () => {
    const phone = "+919756336325"; // WhatsApp number

  // Current Date & Time
  const now = new Date();
  const date = now.toLocaleDateString("en-IN");
  const time = now.toLocaleTimeString("en-IN");

  let message = `*• Home Kit - New Order*\n`;
     message += `*• Date:* ${date}\n`;
     message += `*• Time:* ${time}\n\n`;

    

    cart.forEach((item: any) => {
      message += `*${item.name}*\n`;
      message += `Qty: ${item.qty || 1}\n`;
      message += `Price: ₹${item.newPrice}\n\n`;
    });

    message += `--------------------------------\n`;
    message += `*Items Total:* ₹${itemsTotal}\n`;
    message += `*Grand Total:* ₹${grandTotal}\n`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <a className="cart-header" onClick={closeCart}>
        <i className="fa-solid fa-angles-left"></i> My Cart
      </a>

      <div className="itemscart">
        {cart.map((item: any) => (
          <div className="cart-item" key={item.id}>
            <img src={item.main_img} alt={item.name} />
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
      </div>

      <div className="bill-box">
        <h4>Bill details</h4>

        <div className="bill-row">
          <span>Items Total</span>
          <span>₹{itemsTotal}</span>
        </div>

        <div className="bill-row">
          <span>Delivery charge</span>
          <span>FREE</span>
        </div>
 
        <div className="bill-row total">
          <span>Grand total</span>
          <span>₹{grandTotal}</span>
        </div>
      </div>

      {/* Proceed Button */}
      <div className="bottom-bar" onClick={sendToWhatsApp}>
        <span>₹{grandTotal} TOTAL</span>
        <span className="pointer">
          Proceed <i className="fa-solid fa-angle-right"></i>
        </span>
      </div>
    </div>
  );
}