import { useDispatch, useSelector } from "react-redux";
import {
  addToSavedItems,
  getSavedItems,
  removeFromSavedItems,
} from "../components/user/userSlice";
import toast from "react-hot-toast";

export function useSaveItem(id, product) {
  const dispatch = useDispatch();

  const savedItems = useSelector(getSavedItems);
  const isSavedItem = savedItems?.some((item) => item._id === id);

  function toggleSave() {
    if (isSavedItem) {
      toast.error("Removed from wishlist");
      dispatch(removeFromSavedItems(id));
    } else {
      toast.success("Added to wishlist");
      dispatch(addToSavedItems(product));
    }
  }

  return { isSavedItem, toggleSave };
}
