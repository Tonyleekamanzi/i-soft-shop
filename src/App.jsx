import "./App.css";
import data from "./data/products.js";
import Header from "./components/Header";
import AllProducts from "./components/products";
import Men from "./components/Men.jsx";
import WomenProduct from "./components/Women.jsx";

export default function App() {
  const getFilteredProducts = (keyword) =>
    data
      .filter((product) => product.keywords.includes(keyword))
      .map((product) => <AllProducts key={product.id} {...product} />);

  const mostViewedElement = data
    .filter((product) => product.rating.count > 1000)
    .map((product) => <AllProducts key={product.id} {...product} />);

  const allProducts = data.map((product) => (
    <AllProducts key={product.id} {...product} />
  ));

  return (
    <>
      <Header />
      <section>
        <h1 className="section-title">🔥 Most Viewed Products</h1>
        <div className="container">{mostViewedElement}</div>
      </section>

      <section>
        <h1 className="section-title">🧔‍♂️ Men’s Collection</h1>
        <div className="container">{getFilteredProducts("mens")}</div>
      </section>

      <section>
        <h1 className="section-title">👩 Women’s Collection</h1>
        <div className="container">{getFilteredProducts("womens")}</div>
      </section>

      <section>
        <h1 className="section-title">🛍️ All Products</h1>
        <div className="container">{allProducts}</div>
      </section>
    </>
  );
}
