import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    { id: 1, value: "All" },
    { id: 2, value: "Gaming" },
    { id: 3, value: "Songs" },
    { id: 4, value: "Live" },
    { id: 5, value: "Cricket" },
    { id: 6, value: "News" },
    { id: 7, value: "Cooking" },
    { id: 8, value: "Cricket" },
    { id: 9, value: "News" },
    { id: 10, value: "Cooking" },
  ];

  return (
    <div className="flex">
      {list.map((item) => (
        <Button key={item.id} name={item.value} />
      ))}
    </div>
  );
};

export default ButtonList;
