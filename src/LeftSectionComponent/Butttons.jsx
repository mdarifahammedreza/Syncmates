import { useEffect, useState } from "react";
import Button from "./Button/Button";

const Butttons = () => {
  const [Menu, SetMenu] = useState([]);
  useEffect(() => {
    fetch("leftmenu.json")
      .then((res) => res.json())
      .then((data) => SetMenu(data));
  }, []);
  console.log(Menu);
  return (
    <div>
      {Menu.map((item) => (
        <Button key={item.id} button={item}></Button>
      ))}
    </div>
  );
};

export default Butttons;
