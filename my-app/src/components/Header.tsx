export default function Header({ search, setSearch, cart, toggleCart }: any) {
  return (
    <header className="header">

      <div className="logo">
        <h3>Home <span>Kit</span></h3>
      </div>

      <div className="delivery">
        <p><strong>Delivery in 5 minutes</strong></p>
        <p>Select Location</p>
      </div>

      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="header-right">
        <a href="#">Login</a>

        <button className="cart-btn my-cart" onClick={toggleCart}>
          <i className="fa-solid fa-cart-shopping"></i>

          {cart.length === 0 && " My Cart"}

          {cart.length > 0 && (
            <span>
              {cart.reduce((sum: number, item: any) => sum + item.qty, 0)}{" "}
              {cart.reduce((sum: number, item: any) => sum + item.qty, 0) === 1
                ? "item"
                : "items"}
            </span>
          )}
        </button>

      </div>

    </header>
  );
}