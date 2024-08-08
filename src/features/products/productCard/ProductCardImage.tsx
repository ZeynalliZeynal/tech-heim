import { Link, useNavigate } from "react-router-dom";

interface IProductCartImage {
  image: string | undefined;
  model: string | undefined | null;
  brand: DBrands;
}

const ProductCardImage = ({
  image = "",
  model = "",
  brand,
}: IProductCartImage) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <Link to="/" className="md:h-[200px] h-[120px] self-center">
        <img
          src={image}
          alt={(brand?.name + model).toString()}
          className="object-contain"
        />
      </Link>
      <div className="w-full h-[1px] bg-gradient-to-r from-neutral-gray-100 group-hover:from-primary-25 via-black group-hover:via-primary to-neutral-gray-100 group-hover:to-primary-25 rounded-[50%] md:my-4 my-2" />
      <h6 className="line-clamp-2 group-hover:text-primary-500 md:text-h6 text-body-sm">
        <button
          className="font-semibold inline-flex"
          onClick={() => navigate(`/products?brand=${brand?.name}`)}
        >
          {brand?.name}
        </button>
        , {model}
      </h6>
    </div>
  );
};

export default ProductCardImage;
