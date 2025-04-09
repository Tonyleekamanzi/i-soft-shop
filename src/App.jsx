import "./App.css";
import AllProducts from "./components/products";
import data from "./data/products.js";
import Header from "./components/Header";

export default function App() {
  const productElement = data.map((product) => {
    return (
    <AllProducts 
    key={product.id} 
    {...product} 
    />
  )
  })

  return (
    <>
      <Header />
      <div className="container">{productElement}</div>
    </>
  );
}
