import { useNavigate } from "react-router";
import NavItem from "./NavItem";
import Icon from "../../common/Icon";
import { useState } from "react";

const navItems = [
  { id: "home", text: "Home", path: "/" },
  { id: "womens", text: "Her", path: "/products/category/womens" },
  { id: "mens", text: "Him", path: "/products/category/mens" },
  { id: "unisex", text: "Uni", path: "/products/category/unisex" },
  { id: "new", text: "New", path: "/products/category/new" },
  { id: "all", text: "All", path: "/products" },
];

function Nav({ onToggle, activeItem }) {
  const navigate = useNavigate();
  const [showDropdownNav, setShowDropdownNav] = useState(false);

  return (
    <nav className="relative h-full cursor-pointer">
      {/* Smaller screens (dropdown menu) */}
      <NavItem
        id="dropdown"
        className={`xl:hidden`}
        isActive={activeItem === "dropdown"}
        onToggle={onToggle}
        onClick={() => setShowDropdownNav((show) => !show)}
      >
        <Icon name="menu" />
      </NavItem>

      {/* Dropdown menu */}
      {showDropdownNav && (
        <div className="absolute w-[20vw] rounded rounded-tl-none border bg-offblack">
          {navItems.map((li) => (
            <NavItem
              key={li.id}
              id={li.id}
              onToggle={onToggle}
              isActive={activeItem === li.id}
              onClick={() => navigate(li.path)}
              className="w-full text-xl tracking-wider"
            >
              {li.text}
            </NavItem>
          ))}
        </div>
      )}

      {/* Larger screens (individual buttons) */}
      <ul className="xl:text-1xl hidden h-full items-center text-2xl xl:flex">
        {navItems.map((li) => (
          <NavItem
            key={li.id}
            id={li.id}
            onToggle={onToggle}
            isActive={activeItem === li.id}
            onClick={() => navigate(li.path)}
          >
            {li.text}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
