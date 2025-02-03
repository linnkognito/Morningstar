import { useState } from "react";
import Nav from "./Nav";
import UserAction from "./UserAction";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState(null);

  const handleToggle = (id) => {
    setActiveItem((curId) => (curId === id ? null : id));
  };

  return (
    <header className="flex w-full max-w-[1324px] items-center justify-between font-bebas leading-normal text-pearl">
      <div className="flex w-full items-center md:justify-between">
        <Nav activeItem={activeItem} onToggle={handleToggle} />
        {/* <Nav /> */}
        <h1
          className="cursor-pointer text-[2.3rem] hover:text-zest md:text-5xl"
          onClick={() => navigate("/")}
        >
          Morning Star
        </h1>
      </div>

      <UserAction activeItem={activeItem} onToggle={handleToggle} />
      {/* <UserAction /> */}
    </header>
  );
}
