import Skeleton from "@/ui/Skeleton.tsx";

const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col w-[350px] gap-4">
      <Skeleton h={250} />
      <Skeleton h={32} />
      <Skeleton h={32} />
    </div>
  );
};

export default ProductCardSkeleton;
