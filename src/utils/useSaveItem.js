import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  addToSavedItems,
  getSavedItems,
  removeFromSavedItems,
} from "../components/user/userSlice";
import toast from "react-hot-toast";

export function useSaveItem(id, product) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const savedItems = useSelector(getSavedItems);
  const isSavedItem = savedItems?.some((item) => item._id === id);

  function toggleSave() {
    if (isSavedItem) {
      toast.error((t) => (
        <button
          onClick={() => {
            toast.dismiss(t.id);
            navigate("/user/saved");
          }}
        >
          Removed from wishlist
        </button>
      ));
      dispatch(removeFromSavedItems(id));
    } else {
      toast.success((t) => (
        <button
          onClick={() => {
            toast.dismiss(t.id);
            navigate("/user/saved");
          }}
        >
          Added to wishlist
        </button>
      ));
      dispatch(addToSavedItems(product));
    }
  }

  return { isSavedItem, toggleSave };
}
