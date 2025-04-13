import "./App.css";
import AllProducts from "./components/products";
import data from "./data/products.js";
import Header from "./components/Header";
import Men from "./components/Men.jsx";

export default function App() {
  const productElement = data.map((product) => {
    return <AllProducts key={product.id} {...product} />;
  });

  const menProducts = data
    .filter((product) => product.keywords.includes("mens"))
    .map((product) => <Men key={product.id} {...product} />);

  return (
    <>
      <Header />
      <h1>Mens</h1>
      <div className="container">{menProducts}</div>  
      <h1>All Products</h1>
      <div className="container">{productElement}</div>
    </>
  );
}
