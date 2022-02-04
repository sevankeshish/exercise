import "./App.css";
import { useState } from "react";
import { Products } from "./components/Products-component";
// import "./App.css";
// import { useState } from "react";
// import { Product } from "./components/Products-component";

export const App = () => {
  const [products, setProducts] = useState([
    { title: "react js", price: "$99", d: "15%" },
    { title: "vue js", price: "$89", d: "15%" },
    { title: "JavaScript", price: "$79", d: "15%" },
  ]);
  const clickHandler = () => {
    setProducts([
      { title: "react js", price: "$59", d: "12%" },
      { title: "vue js", price: "$49", d: "10%" },
      { title: "JavaScript", price: "$39", d: "5%" },
    ]);
  };
  return (
    <div>
      {products.map((e) => {
        return <Products name={e.title} gheymat={e.price} takhfif={e.d} />;
      })}

      <button onClick={clickHandler}>change the price</button>
    </div>
  );
};
// const App = () => {
//   const [products, setProducts] = useState([
//     { title: "react js", price: "$99" },
//     { title: "vue js", proce: "$89" },
//     { title: "JavaScript", price: "$79" },
//   ]);

//   const clickHandler = () => {
//     setProducts([
//       { title: "react js", price: "$59" },
//       { title: "vue js", proce: "$49" },
//       { title: "JavaScript", price: "$39" },
//     ]);
//   };
//   return (
//     <div className="App">
//       {products.map((e) => (
//         <Product name={e.title} gheymat={e.price} />
//       ))}
//       <button onClick={clickHandler}>change price</button>
//     </div>
//   );
// };

export default App;
