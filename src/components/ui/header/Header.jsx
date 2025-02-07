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
    <div className="flex w-full justify-center border-b border-aura/50 bg-pearl">
      <header className="flex w-full max-w-[1324px] items-center justify-between gap-2 bg-pearl font-bebas leading-normal text-pearl">
        <Nav activeItem={activeItem} onToggle={handleToggle} />

        <h1
          className="w-full cursor-pointer text-[2.3rem] text-black transition-all duration-300 hover:animate-gradient hover:bg-gradient-to-r hover:from-zest hover:to-aura hover:bg-[length:200%] hover:bg-clip-text hover:text-transparent md:text-5xl xl:text-center"
          onClick={() => navigate("/")}
        >
          Morning Star
        </h1>

        <UserAction activeItem={activeItem} onToggle={handleToggle} />
      </header>
    </div>
  );
}
