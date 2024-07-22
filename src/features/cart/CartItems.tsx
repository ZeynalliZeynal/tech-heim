import { RxCross2 } from "react-icons/rx";
import { TrashIcon, TruckIcon, VerifyIcon } from "@/ui/svgs/icons.tsx";
import { formatCurrency } from "@/helpers/converters.ts";
import Button from "@/ui/Button.tsx";
import Spinner from "@/ui/Spinner.tsx";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useCart } from "@/features/cart/useCart.ts";
import { useDeleteFromCart } from "@/features/cart/useDeleteFromCart.ts";
import { useUpdateQuantityInCart } from "@/features/cart/useUpdateQuantityInCart.ts";

const CartItems = () => {
  const { cart } = useCart();
  const { deleteItem, isDeleting } = useDeleteFromCart();
  const { update, isUpdating } = useUpdateQuantityInCart();

  const handleUpdateQuantity = (id: number, value: number) => {
    update({ id, value });
  };

  return (
    <ul className="flex-col gap-3 max-h-[560px] justify-start">
      {cart?.map((item) => (
        <li
          key={item.id}
          className="p-2.5 w-full shadow-sm hover:shadow-md transition-shadow rounded-md grid sm:grid-cols-[170px_1fr] grid-cols-[100px_1fr] gap-1.5"
        >
          <div className="p-2.5 w-full h-[150px]">
            <img
              src={item.products.image}
              alt={item.products.model}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h6>{item.products.model}</h6>
              <div className="text-body-xs text-neutral-700">
                <p>{item.color}</p>
                <p className="inline-flex items-center gap-0.5">
                  <span className="size-2.5">
                    <RxCross2 />
                  </span>{" "}
                  {item.quantity}
                </p>
              </div>
            </div>
            <div className="text-neutral-gray-700 text-body-xs">
              {item.products.free_delivery && (
                <p className="flex items-center gap-1">
                  <span className="size-4 text-primary">
                    <TruckIcon />
                  </span>
                  Free Delivery
                </p>
              )}{" "}
              {item.products.guaranteed && (
                <p className="flex items-center gap-1">
                  <span className="size-4 text-primary">
                    <VerifyIcon />
                  </span>
                  Guaranteed
                </p>
              )}
            </div>
            <div className="flex justify-between items-center text-neutral-gray-dark">
              <p className="text-body-xs">
                {formatCurrency(
                  item.products.price,
                  item.products.discount_percent,
                )}
              </p>
              <div className="flex gap-2 items-center">
                <Button
                  size="icon"
                  className="hover:bg-error/15 text-error focus-within:border-error"
                  onClick={() => deleteItem(item.id)}
                >
                  {isDeleting ? (
                    <Spinner color="error" />
                  ) : (
                    <span className="size-4">
                      <TrashIcon />
                    </span>
                  )}
                </Button>
                <div className="grid grid-cols-3 place-items-center border-b">
                  <Button
                    size="icon"
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1 || isUpdating}
                  >
                    <span className="size-4">
                      <FiMinus />
                    </span>
                  </Button>
                  <span>
                    {isUpdating ? (
                      <Spinner color="neutral-gray-700" />
                    ) : (
                      item.quantity
                    )}
                  </span>
                  <Button
                    size="icon"
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                    disabled={isUpdating}
                  >
                    <span className="size-4">
                      <FiPlus />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
