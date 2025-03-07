import { useSelector } from "react-redux";
import Container from "../common/Container";
import WrapperScreenGradient from "../ui/containers/WrapperScreenGradient";
import Icon from "../common/Icon";
import ActionButton from "../ui/buttons/ActionButton";
import { useNavigate } from "react-router";
import { getSavedItems } from "./userSlice";

function SavedProducts() {
  const navigate = useNavigate();
  const saved = useSelector(getSavedItems);

  console.log(saved);

  return (
    <WrapperScreenGradient className="">
      {/* Product list */}
      <div className="m mx-auto max-w-[1024px] gap-6 rounded-md bg-pearl/60 p-6 shadow-sm shadow-offblack backdrop-blur-md">
        <Container width="w-full" className="flex flex-col gap-3 px-4 py-4">
          <ActionButton
            color="bg-sea"
            width="w-[90%]"
            onClick={() => navigate(-1)}
          >
            <Icon name="arrow_back" />
            {saved.length > 0 ? "Continue shopping" : "Go back"}
          </ActionButton>
        </Container>
      </div>
    </WrapperScreenGradient>
  );
}

export default SavedProducts;
