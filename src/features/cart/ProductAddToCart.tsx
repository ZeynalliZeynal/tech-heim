import Button from '@/ui/Button.tsx';
import { useAddToCart } from '@/features/cart/useAddToCart.ts';
import { useUser } from '@/features/auth/useUser.ts';
import Spinner from '@/ui/Spinner.tsx';
import { useCart } from '@/features/cart/useCart.ts';
import { useDeleteFromCart } from '@/features/cart/useDeleteFromCart.ts';
import { BasketCheckIcon, CartIcon } from '@/ui/svgs/icons/shopIcons.tsx';
import React from 'react';

const ProductAddToCart = ({
  productId,
  selectedColor,
}: {
  productId: number;
  selectedColor?: string;
}) => {
  const { cart } = useCart();
  const { deleteItem, isDeleting } = useDeleteFromCart();

  const alreadyInCart = Boolean(
    cart?.find(
      (item) => item.color === selectedColor && item.product_id === productId
    )
  );

  const { isAdding, addItem } = useAddToCart();
  const { user } = useUser();
  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    addItem({
      product_id: productId,
      user_id: user?.id,
      quantity: 1,
      color: selectedColor,
    });
  };

  if (alreadyInCart)
    return (
      <Button
        size='sm'
        style='primary-outline'
        onClick={(e) => {
          e.preventDefault();
          deleteItem(cart?.find((item) => item.product_id === productId).id);
        }}
        disabled={isDeleting}
      >
        {isDeleting ? (
          <>
            <Spinner /> Deleting...
          </>
        ) : (
          <>
            <span className='size-6'>
              <BasketCheckIcon />
            </span>
            Already in cart
          </>
        )}
      </Button>
    );

  return (
    <Button size='sm' style='primary-outline' onClick={handleAddItem}>
      {isAdding ? (
        <>
          <Spinner />
          Adding...
        </>
      ) : (
        <>
          <span className='size-6'>
            <CartIcon />
          </span>
          Add to cart
        </>
      )}
    </Button>
  );
};

export default ProductAddToCart;
