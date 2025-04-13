import "./App.css";
import data from "./data/products.js";
import Header from "./components/Header";
import AllProducts from "./components/products";
import Men from "./components/Men.jsx";
import WomenProduct from "./components/Women.jsx";

export default function App() {
  const productElement = data.map((product) => {
    return <AllProducts key={product.id} {...product} />;
  });

  const menProducts = data
    .filter((product) => product.keywords.includes("mens"))
    .map((product) => <Men key={product.id} {...product} />);

    const womenProducts = data
    .filter((product) => product.keywords.includes("womens"))
    .map((product) => <WomenProduct key={product.id} {...product} />);

  return (
    <>
      <Header />
      <h1>Mens</h1>
      <div className="container">{menProducts}</div>
      <h1>Womens</h1>
      <div className="container">{womenProducts}</div>
      <h1>All Products</h1>
      <div className="container">{productElement}</div>
    </>
  );
}
