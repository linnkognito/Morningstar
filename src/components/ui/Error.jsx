import { useNavigate, useRouteError } from "react-router";
import ActionButton from "./buttons/ActionButton";
import Header from "./header/Header";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <>
      <Header />

      <div className="bg-blur-sm mx-auto mt-6 flex h-full w-4/5 flex-col items-center rounded border-2 border-zest bg-pearl px-0 pb-4 pt-10 shadow-sm">
        <h2 className="mb-2 font-bebas text-3xl">Something went wrong</h2>
        <p className="text-md mb-4 font-semibold">
          {error.data || error.message}
        </p>

        <ActionButton color="bg-mint" onClick={() => navigate(-1)}>
          Go back
        </ActionButton>
      </div>
    </>
  );
}

export default Error;
