import { Outlet } from "react-router-dom";
import Header from "../Navbar/Header";
import Body from "../Body/Body";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
