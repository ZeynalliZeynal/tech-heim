import {
  ProductBrandTypes,
  ProductDetailTypes,
} from "../../types/productTypes.ts";

const ProductCardImage = ({
  detail,
  brand,
}: {
  detail: ProductDetailTypes;
  brand: ProductBrandTypes;
}) => {
  return (
    <div className="flex flex-col">
      <div className="md:h-[200px] h-[120px] self-center">
        <img
          src={detail?.img_url}
          alt={(brand?.name + detail?.model).toString()}
          className="object-contain"
        />
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-neutral-gray-100 group-hover:from-primary-25 via-black group-hover:via-primary to-neutral-gray-100 group-hover:to-primary-25 rounded-[50%] md:my-4 my-2" />
      <h6 className="line-clamp-2 group-hover:text-primary-500 md:text-h6 text-body-sm">
        <button className="font-semibold inline-flex">{brand?.name}</button>,{" "}
        {detail?.model}
      </h6>
    </div>
  );
};

export default ProductCardImage;
