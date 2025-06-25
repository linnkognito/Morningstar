import { NavLink } from "react-router";

import WrapperScreenGradient from "../ui/containers/WrapperScreenGradient";
import ContainerSimple from "../ui/containers/ContainerSimple";
import Form from "../ui/Form";
import FormElement from "../ui/FormElement";
import ActionButton from "../ui/buttons/ActionButton";
import AuthRedirect from "../ui/AuthRedirect";

function Login() {
  return (
    <WrapperScreenGradient>
      <ContainerSimple
        width="w-fit max-w-[700px]"
        bg="bg-white/80"
        className="px-20 pb-10 pt-6"
      >
        <h2 className="w-full border-b border-aura/30 pb-4 text-center font-bebas text-4xl">
          Login
        </h2>

        <Form
          options={{
            action: "login",
            className: "max-w-1/2 flex flex-col gap-4",
          }}
        >
          <FormElement
            label="Email"
            input={{ type: "text", placeholder: "123@email.com" }}
          />
          <FormElement
            label="Password"
            input={{ type: "password", placeholder: "●●●●●●●" }}
          >
            <p className="text-xs text-gray-400">
              Forgot password?{" "}
              <NavLink
                to="/user/login/restore-password"
                className="text-aura hover:underline"
              >
                Restore
              </NavLink>
            </p>
          </FormElement>

          <ActionButton type="submit" color="bg-aura/50">
            Login
          </ActionButton>

          <AuthRedirect
            text="No account yet?"
            path="/user/signup"
            linkText="Sign up!"
          />
        </Form>
      </ContainerSimple>
    </WrapperScreenGradient>
  );
}

export default Login;
