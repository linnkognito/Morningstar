import { useNavigate } from "react-router";
import NavItem from "./NavItem";
import Icon from "../../common/Icon";

const navItems = [
  { id: "home", text: "Home", path: "/" },
  { id: "womens", text: "Her", path: "/products/category/womens" },
  { id: "mens", text: "Him", path: "/products/category/mens" },
  { id: "unisex", text: "Uni", path: "/products/category/unisex" },
  { id: "new", text: "New", path: "/products/category/new-in" },
  { id: "all", text: "All", path: "/products" },
];

function Nav({ onToggle, activeItem }) {
  const navigate = useNavigate();

  return (
    <nav className="h-full cursor-pointer">
      <NavItem className="xl:hidden">
        <Icon name="menu" />
      </NavItem>

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
