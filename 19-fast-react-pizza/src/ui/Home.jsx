import CreateUser from "../features/users/CreateUser";

export default function Home() {
  return (
    <div className="text-center text-xl font-semibold text-yellow-500">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}
