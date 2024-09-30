import Counter from "../_components/Counter";

export const metadata = {
  title: "Cabins",
};

export default async function Page() {
  return (
    <div>
      <h1>Cabin Page</h1>

      <Counter />
    </div>
  );
}
