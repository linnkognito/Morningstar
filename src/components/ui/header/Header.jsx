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
    <div className="flex w-full justify-center border-b border-zest/20">
      <header className="flex w-full max-w-[1324px] items-center justify-between font-bebas leading-normal text-pearl">
        <div className="flex w-full items-center gap-2 lg:justify-between">
          <Nav activeItem={activeItem} onToggle={handleToggle} />
          <h1
            className="hover:animate-gradient cursor-pointer text-[2.3rem] transition-all duration-300 hover:bg-gradient-to-r hover:from-zest hover:to-aura hover:bg-[length:200%] hover:bg-clip-text hover:text-transparent md:text-5xl"
            onClick={() => navigate("/")}
          >
            Morning Star
          </h1>
        </div>

        <UserAction activeItem={activeItem} onToggle={handleToggle} />
      </header>{" "}
    </div>
  );
}
