import { NavLink } from "react-router";

function AuthRedirect({ text = "", path = "/", linkText = "Click here" }) {
  return (
    <p className="text-center text-sm">
      {text}{" "}
      <NavLink
        to={path}
        className="will-change text-aura underline transition-all duration-200 ease-in-out hover:bg-zest hover:text-offblack"
      >
        {linkText}
      </NavLink>
    </p>
  );
}

export default AuthRedirect;
