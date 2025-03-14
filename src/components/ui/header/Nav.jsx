import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import NavItem from "./NavItem";
import Icon from "../../common/Icon";

const navItems = [
  { id: "home", text: "Home", path: "/" },
  { id: "womens", text: "Her", path: "/products/category/womens" },
  { id: "mens", text: "Him", path: "/products/category/mens" },
  { id: "unisex", text: "Uni", path: "/products/category/unisex" },
  { id: "new", text: "New", path: "/products/category/new" },
  { id: "all", text: "All", path: "/products" },
];
const dropdownNavItems = [
  { id: "womens", text: "Womens", path: "/products/category/womens" },
  { id: "mens", text: "Mens", path: "/products/category/mens" },
  { id: "unisex", text: "Unisex", path: "/products/category/unisex" },
  { id: "new", text: "New in", path: "/products/category/new" },
  { id: "all", text: "Show all", path: "/products" },
];

function Nav({ onToggle, activeItem }) {
  const navigate = useNavigate();
  const dropdownRef = useRef();
  const [showDropdownNav, setShowDropdownNav] = useState(false);

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setShowDropdownNav(false);
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav className="relative h-full cursor-pointer">
      {/* Smaller screens (dropdown menu) */}
      <NavItem
        id="dropdown"
        className={`xl:hidden ${showDropdownNav && "bg-zest text-offblack"}`}
        isActive={activeItem === "dropdown"}
        onToggle={onToggle}
        onClick={(e) => {
          e.stopPropagation();
          setShowDropdownNav((show) => !show);
        }}
      >
        <Icon name="menu" />
      </NavItem>

      {/* Dropdown menu */}
      {showDropdownNav && (
        <nav
          ref={dropdownRef}
          className="absolute z-[9999] w-[250px] rounded rounded-tl-none border-2 border-zest bg-offblack bg-pearl/70 text-offblack backdrop-blur-sm xl:hidden"
        >
          {dropdownNavItems.map((li) => (
            <NavItem
              key={li.id}
              id={li.id}
              onToggle={onToggle}
              isActive={activeItem === li.id}
              onClick={() => {
                navigate(li.path);
                setShowDropdownNav(false);
              }}
              className="will-change group flex w-full items-center justify-between text-[1.4em] tracking-wider transition-all duration-300 ease-out hover:pl-6 group-hover:inline"
            >
              <span>{li.text}</span>
              <Icon
                name="arrow_forward"
                className="hidden pl-2 text-[1.4em] text-offblack group-hover:inline"
              />
            </NavItem>
          ))}
        </nav>
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
