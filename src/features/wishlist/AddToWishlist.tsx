import Button from "@/ui/Button.tsx";
import { useWishlist } from "@/features/wishlist/useWishlist.ts";
import { HeartFillIcon, HeartIcon } from "@/ui/svgs/icons.tsx";
import { useAddToWishlist } from "@/features/wishlist/useAddToWishlist.ts";
import { useDeleteFromWishlist } from "@/features/wishlist/useDeleteFromWishlist.ts";
import Spinner from "@/ui/Spinner.tsx";
import { useUser } from "@/features/auth/useUser.ts";

const AddToWishlist = ({ productId }: { productId: number }) => {
  const { user } = useUser();
  const { wishlist, isPending } = useWishlist();
  const { addItem, isAdding } = useAddToWishlist();
  const { deleteItem, isDeleting } = useDeleteFromWishlist();
  const alreadyInWishlist = wishlist?.find(
    (item) => item.product_id === productId,
  );

  const handleClick = () => {
    if (alreadyInWishlist) deleteItem(alreadyInWishlist?.id);
    else
      addItem({
        product_id: productId,
        user_id: user?.id,
      });
  };

  return (
    <Button size="icon" className="text-primary" onClick={handleClick}>
      {isPending || isAdding || isDeleting ? (
        <Spinner color="primary" />
      ) : alreadyInWishlist ? (
        <HeartFillIcon />
      ) : (
        <HeartIcon />
      )}
    </Button>
  );
};

export default AddToWishlist;
