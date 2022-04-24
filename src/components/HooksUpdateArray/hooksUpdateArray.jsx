import { Fragment, useState } from "react";

export const HooksUpdateArray = () => {
  const [item, setItem] = useState([]);

  const addItemHandler = () => {
    /////////////////raveshe aval/////////////
    // setItem([
    //   ...item,
    //   { id: item.length, number: Math.floor(Math.random() * 10) },
    // ]);
    const addedItem = {
      id: item.length,
      number: Math.floor(Math.random() * 10),
    };
    // console.log({ addedItem }, "hi");

    const updatedItem = [...item, addedItem];
    setItem(updatedItem);
  };

  return (
    // <Fragment>
    <div>
      <button onClick={addItemHandler}>add items</button>
      {item.map((e) => {
        return <li key={e.id}>{e.number}</li>;
      })}
    </div>
    // </Fragment>
  );
};
