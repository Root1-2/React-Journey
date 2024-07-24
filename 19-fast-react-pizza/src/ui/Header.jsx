import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/users/Username";

function Header() {
  return (
    <header
      className="bg-yellow-500 uppercase px-4 py-3 font-pizza
      border-b border-stone-300 sm:px-6 flex items-center justify-around"
    >
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
