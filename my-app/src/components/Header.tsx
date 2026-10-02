import { Link } from "react-router-dom";

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
  cart?: any[];
  toggleCart: () => void;
}

export default function Header({
  search,
  setSearch,
  cart = [],
  toggleCart,
}: HeaderProps) {
  // Total quantity calculation
  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + (item.qty || 1),
    0
  );

  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <div className="logorow">
            <Link to="/" className="logo">
              <img src="/images/logo.svg" alt="FreshKart Logo" />
            </Link>

            <div className="delivery">
              <p>
                <strong>
                  Delivery within 15 minutes on orders above ₹1K
                </strong>
              </p>
              <span>Select Location</span>
            </div>
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
            <a className="login" href="#">
              Login
            </a>

            <button className="cart-btn my-cart" onClick={toggleCart}>
              <i className="fa-solid fa-cart-shopping"></i>

              {totalItems === 0 ? (
                <span className="cart-text">My Cart</span>
              ) : (
                <span>
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}