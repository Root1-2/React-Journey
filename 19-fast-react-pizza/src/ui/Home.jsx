import { useSelector } from "react-redux";
import CreateUser from "../features/users/CreateUser";
import Button from "./Button";

export default function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="text-center text-xl font-semibold text-yellow-500">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="./menu" type="primary">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}
