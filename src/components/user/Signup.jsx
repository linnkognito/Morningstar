import WrapperScreenGradient from "../ui/containers/WrapperScreenGradient";
import FormElement from "../ui/FormElement";
import ContainerSimple from "../ui/containers/ContainerSimple";
import Form from "../ui/Form";
import ActionButton from "../ui/buttons/ActionButton";
import AuthRedirect from "../ui/AuthRedirect";

function Signup() {
  return (
    <WrapperScreenGradient>
      <ContainerSimple bg="bg-white/80">
        <h2 className="w-full border-b border-aura/30 pb-4 text-center font-bebas text-4xl">
          Signup
        </h2>

        <Form
          options={{
            action: "login",
            className: "max-w-1/2 flex flex-col gap-4",
          }}
        >
          <FormElement
            label="Full name"
            input={{ type: "text", placeholder: "Jane Doe" }}
          />
          <FormElement
            label="Email"
            input={{ type: "text", placeholder: "123@email.com" }}
          />
          <FormElement
            label="Password"
            input={{ type: "password", placeholder: "●●●●●●●" }}
          />
          <FormElement
            label="Confirm password"
            input={{ type: "password", placeholder: "●●●●●●●" }}
          />

          <ActionButton type="submit" color="bg-aura/50">
            Signup
          </ActionButton>

          <AuthRedirect
            text="Already have an account?"
            path="/user/login"
            linkText="Login"
          />
        </Form>
      </ContainerSimple>
    </WrapperScreenGradient>
  );
}

export default Signup;
