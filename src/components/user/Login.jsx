import { NavLink } from "react-router";
import ActionButton from "../ui/buttons/ActionButton";
import Input from "../ui/inputs/Input";

function Login() {
  return (
    <div className="mx-auto h-full w-full origin-center bg-gradient-to-r from-aura/60 via-mint/40 to-zest/30 bg-cover bg-center p-4 backdrop-blur-xl">
      <div className="mx-auto mt-4 flex w-fit max-w-[700px] flex-col items-center gap-6 rounded-md bg-white/70 px-20 pb-10 pt-6 shadow-sm shadow-offblack backdrop-blur-md">
        <h2 className="w-full border-b border-aura/30 pb-4 text-center font-bebas text-4xl">
          Login
        </h2>
        <form action="login" className="max-w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <Input input={{ type: "text", placeholder: "123@email.com" }} />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <Input input={{ type: "password", placeholder: "●●●●●●●" }} />
            <p className="text-xs text-gray-400">
              Forgot password?{" "}
              <NavLink
                to="/user/login/restore-password"
                className="text-aura hover:underline"
              >
                Restore
              </NavLink>
            </p>
          </div>

          <ActionButton type="submit" color="bg-aura/50">
            Login
          </ActionButton>

          <p className="text-center text-sm">
            No account yet?{" "}
            <NavLink
              to="/user/signup"
              className="will-change text-aura underline transition-all duration-200 ease-in-out hover:bg-zest hover:text-offblack"
            >
              Sign up!
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
