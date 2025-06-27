import { useDispatch, useSelector } from 'react-redux';
import {
  addToSavedItems,
  getSavedItems,
  removeFromSavedItems,
} from '@/app/_redux/slices/userSlice';
import toast from 'react-hot-toast';
import Link from 'next/link';

export function useSaveItem(id, product) {
  const dispatch = useDispatch();
  const savedItems = useSelector(getSavedItems);
  const isSavedItem = savedItems?.some((item) => item.id === id);

  function toggleSave() {
    if (isSavedItem) {
      toast.error((t) => (
        <Link href='/user/saved' onClick={() => toast.dismiss(t.id)}>
          Removed from wishlist
        </Link>
      ));
      dispatch(removeFromSavedItems(id));
    } else {
      toast.success((t) => (
        <Link href='/user/saved' onClick={() => toast.dismiss(t.id)}>
          Added to wishlist
        </Link>
      ));
      dispatch(addToSavedItems(product));
    }
  }

  return { isSavedItem, toggleSave };
}
