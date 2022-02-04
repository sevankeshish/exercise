import React from "react";

// export const Product = (props) => {
//   return (
//     <div>
//       <p>product name : {props.name} course</p>
//       <p>product price: {props.gheymat} </p>
//       {props.children}
//     </div>
//   );
// };

export const Products = (props) => {
  return (
    <div>
      <p>Products Name : {props.name} course</p>
      <p>Products price {props.gheymat}</p>
      <p>DISCOUNT IS : {props.takhfif}</p>
    </div>
  );
};
