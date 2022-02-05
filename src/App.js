import "./App.css";
import { useState } from "react";
// import { Products } from "./components/Products-component";
import CounterClass from "./components/ClassCounter/ClassCounter";
import { Products } from "./components/Products-component";
import { HookObject } from "./components/HookUpdateObject/HookObjectUpdate";

// const App = () => {
//   const [products, setProducts] = useState([
//     { title: "react js", price: "$99", d: "15%" },
//     { title: "vue js", price: "$89", d: "15%" },
//     { title: "JavaScript", price: "$79", d: "15%" },
//   ]);
//   const clickHandler = () => {

/////////////////////////////////////////////////////////
// const x = products.price
//  const y = x ==20%
///////////////////////////////////////////////////////////

// setProducts([
//   { title: "react js", price:y, d: "12%" },
//   { title: "vue js", price: "$49", d: "10%" },
//   { title: "JavaScript", price: "$39", d: "5%" },
// ]);
//   };
//   return (
//     <div>
//       {products.map((e) => {
//         return <Products name={e.title} gheymat={e.price} takhfif={e.d} />;
//       })}

//       <button onClick={clickHandler}>change the price</button>
//     </div>
//   );
// };
////////////////////////////////////////////////////////////////////////////
// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const plus = () => {
//     // setCounter(counter + 1);
//     setCounter((prevCount) => prevCount + 1);
//   };

//   const plus2 = () => {
//     // setCounter(counter + 2);
//     setCounter((prevCount) => prevCount + 2);
//   };

//   const plus3 = () => {
//     // setCounter(counter + 3);
//     for (let i = 0; i < 3; i++) {
//       // setCounter(counter + 3);
//       setCounter((prevCount) => prevCount + 1);
//     }
//   };

//   return (
//     <div>
//       {/* {counter.map((e) => (
//         <Products name={e.title} counter={e.counter} />
//       ))} */}
//       <p>count - {counter}</p>
//       <button onClick={plus}>add one</button>
//       <button onClick={plus2}>add 2</button>
//       <button onClick={plus3}>add 3</button>
//       <button onClick={() => setCounter(counter + 5)}>add 5</button>
//     </div>
//   );
// };

// export default App;
//////////////////////////////////////////////////////////////////////////
// const App = () => {
//   return (
//     <div>
//       <CounterClass />
//     </div>
//   );
// };

// export default App;
///////////////////////////////////////////////////////////////////+const App = () => {
const App = () => {
  return (
    <div>
      <HookObject />
    </div>
  );
};

export default App;
