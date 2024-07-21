import { useCart } from "@/features/cart/useCart.ts";
import Lottie from "lottie-react";
import emptyList from "@/assets/animation/empty-list.json";
import Button from "@/ui/Button.tsx";
import { RxCross2 } from "react-icons/rx";
import {
  CartIcon,
  TrashIcon,
  TruckIcon,
  VerifyIcon,
} from "@/ui/svgs/icons.tsx";
import { formatCurrency } from "@/helpers/converters.ts";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useUpdateQuantity } from "@/features/cart/useUpdateQuantity.ts";
import Spinner from "@/ui/Spinner.tsx";
import { useDeleteItem } from "@/features/cart/useDeleteItem.ts";

const CartMenu = () => {
  const { cart, cartSize } = useCart();

  const { update, isUpdating } = useUpdateQuantity();
  const { deleteItem, isDeleting } = useDeleteItem();

  const handleUpdateQuantity = (id: number, value: number) => {
    update({ id, value });
  };

  if (!cartSize)
    return (
      <div className="w-[200px] flex items-center flex-col">
        <h4>No item added</h4>
        <Lottie animationData={emptyList} />
        <Button full size="sm" style="primary-outline">
          Add items
        </Button>
      </div>
    );

  return (
    <div className="flex flex-col gap-3 w-[500px]">
      <p className="text-body-lg sticky top-0 bg-white">
        {cartSize > 1 ? `${cartSize} items` : `${cartSize} item`}
      </p>
      <ul className="flex-col gap-3 max-h-[600px] overflow-auto justify-start">
        {cart?.map((item) => (
          <li
            key={item.id}
            className="p-2.5 w-full shadow-sm hover:shadow-md transition-shadow rounded-md grid grid-cols-[170px_1fr] gap-1.5"
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
                    className="hover:bg-error/10"
                    onClick={() => deleteItem(item.id)}
                  >
                    {isDeleting ? (
                      <Spinner color="error" />
                    ) : (
                      <span className="size-4 text-error">
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
      <div className="grid grid-cols-[100px_1fr] pt-4">
        <p className="text-neutral-gray-dark">
          <span className="font-light text-body-md">Grand total</span>
          <p className="font-medium">
            {isUpdating
              ? "Loading..."
              : formatCurrency(
                  cart?.reduce(
                    (acc, cur) =>
                      acc +
                      (cur.products.price -
                        (cur.products.price * cur.products.discount_percent) /
                          100) *
                        cur.quantity,
                    0,
                  ),
                )}
          </p>
        </p>
        <Button style="primary-regular">
          Proceed to Cart{" "}
          <span className="size-6">
            <CartIcon />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default CartMenu;
