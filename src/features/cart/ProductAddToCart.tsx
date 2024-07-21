import Button from "@/ui/Button.tsx";
import { BagCheckIcon, CartIcon } from "@/ui/svgs/icons.tsx";
import { useAddItem } from "@/features/cart/useAddItem.ts";
import { useUser } from "@/features/auth/useUser.ts";
import Spinner from "@/ui/Spinner.tsx";
import { useCart } from "@/features/cart/useCart.ts";
import { useDeleteItem } from "@/features/cart/useDeleteItem.ts";

const ProductAddToCart = ({
  productId,
  selectedColor,
}: {
  productId: number;
  selectedColor?: string;
}) => {
  const { cart } = useCart();
  const { deleteItem, isDeleting } = useDeleteItem();

  const alreadyInCart = Boolean(
    cart?.find(
      (item) => item.color === selectedColor && item.product_id === productId,
    ),
  );

  const { isAdding, addItem } = useAddItem();
  const { user } = useUser();
  const handleAddItem = () => {
    addItem({
      product_id: productId,
      user_id: user?.id,
      added_at: new Date().toISOString(),
      quantity: 1,
      color: selectedColor,
    });
  };

  if (alreadyInCart)
    return (
      <Button
        size="sm"
        style="primary-outline"
        onClick={() =>
          deleteItem(cart?.find((item) => item.product_id === productId).id)
        }
        disabled={isDeleting}
      >
        {isDeleting ? (
          <>
            <Spinner /> Deleting...
          </>
        ) : (
          <>
            <span className="size-6">
              <BagCheckIcon />
            </span>
            Already in cart
          </>
        )}
      </Button>
    );

  return (
    <Button size="sm" style="primary-outline" onClick={handleAddItem}>
      {isAdding ? (
        <>
          <Spinner />
          Adding...
        </>
      ) : (
        <>
          <span className="size-6">
            <CartIcon />
          </span>
          Add to cart
        </>
      )}
    </Button>
  );
};

export default ProductAddToCart;
