import { useState } from "react";

export const HooksUpdateArray = () => {
  const [item, setItem] = useState([]);

  const addItemHandler = () => {
    // setItem([
    //   ...item,
    //   { id: item.length, number: Math.floor(Math.random() * 10) },
    // ]);
    const addedItem = {
      id: item.length,
      number: Math.floor(Math.random() * 10),
    };

    const updatedItem = [...item, addedItem];
    setItem(updatedItem);
  };

  return (
    <div>
      <button onClick={addItemHandler}>add items</button>
      {item.map((e) => {
        return <li key={e.id}>{e.number}</li>;
      })}
    </div>
  );
};
