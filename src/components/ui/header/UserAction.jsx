import { useNavigate } from "react-router";
import Searchbar from "./SearchBar";
import Icon from "../../common/Icon";
import NavItem from "./NavItem";
import { useState } from "react";

const icons = [
  { id: "icon-person", name: "person", path: "/profile" },
  { id: "icon-fav", name: "favorite", path: "/profile/favorites" },
  { id: "icon-cart", name: "shopping_cart", path: "/cart" },
];

function UserAction({ activeItem, onToggle }) {
  const navigate = useNavigate();
  const [buttonIsHovered, setButtonIsHovered] = useState(null);

  return (
    <>
      <div className="sm:hidden">
        <Searchbar />
      </div>

      <nav className="hidden h-full w-full cursor-pointer justify-end sm:flex">
        <Searchbar />

        <ul className="hidden h-full items-center text-2xl sm:flex">
          {icons.map((icon) => (
            <NavItem
              key={icon.id}
              isActive={activeItem === icon.id}
              onToggle={() => onToggle(icon.id)}
              onClick={() => navigate(icon.path)}
            >
              <Icon name={icon.name} al={icon.name} />
            </NavItem>
          ))}
        </ul>
      </nav>

      <nav className="fixed bottom-0 z-[9999] w-full cursor-pointer bg-pearl shadow-[2px_-2px_4px_rgba(15,15,15,0.2)] sm:hidden">
        <ul className="flex h-full items-center text-2xl">
          {icons.map((icon) => (
            <NavItem
              key={icon.id}
              isActive={activeItem === icon.id}
              onToggle={() => onToggle(icon.id)}
              onClick={() => navigate(icon.path)}
              onMouseEnter={() => setButtonIsHovered(icon.id)}
              onMouseLeave={() => setButtonIsHovered(null)}
              className="w-full justify-center"
            >
              <Icon
                name={icon.name}
                al={icon.name}
                className={
                  buttonIsHovered === icon.id ? "once animate-bounce" : ""
                }
              />
            </NavItem>
          ))}
        </ul>
      </nav>
    </>
  );
}
export default UserAction;
