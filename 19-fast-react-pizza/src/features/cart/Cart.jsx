import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getUser } from "./cartSlice";

function Cart() {
  const username = useSelector(getUser);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back To Menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="border-bottom mt-3 divide-y divide-stone-300 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-3">
        <Button to="/order/new" type="primary">
          Order Pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
