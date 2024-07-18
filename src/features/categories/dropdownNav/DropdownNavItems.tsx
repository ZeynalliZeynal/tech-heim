import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import loadingSpinner from "@/assets/animation/loading-spinner.json";
import emptyList from "@/assets/animation/empty-list.json";
import { getSubcategoriesById } from "@/services/apiProducts.ts";
import { memo } from "react";

const DropdownNavItems = memo(({ categoryId }: { categoryId: number }) => {
  const { data: subcategories, isPending } = useQuery({
    queryKey: ["products/categories/subcategoriesById", categoryId],
    queryFn: () => getSubcategoriesById(categoryId),
  });

  return (
    <div className="flex justify-center p-10 bg-neutral-gray-200">
      {isPending ? (
        <Lottie
          animationData={loadingSpinner}
          style={{
            width: "200px",
          }}
        />
      ) : !subcategories?.length || !subcategories ? (
        <div className="flex flex-col justify-center items-center font-bold">
          <h4>No subcategory is available yet</h4>
          <Lottie animationData={emptyList} className="w-[200px]" />
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <ul className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 justify-center items-start max-h-[250px] overflow-y-auto pr-12">
            {subcategories?.map(
              ({
                id,
                name,
                image,
              }: {
                id: number;
                name: string;
                image: string;
              }) => (
                <li
                  key={id}
                  style={{ justifyContent: "center" }}
                  className="rounded-md text-center hover:text-primary"
                >
                  <Link to="/" className="flex-col gap-4">
                    <span
                      className="w-[152px] group overflow-hidden"
                      title={name}
                    >
                      <img
                        src={image}
                        alt={name}
                        className="group-hover:rotate-1 group-hover:scale-105 transition"
                      />
                    </span>
                    <h6>{name}</h6>
                  </Link>
                </li>
              ),
            )}{" "}
          </ul>
          <div className="flex justify-center mx-auto text-body-md text-primary hover:underline group">
            <Link to="/" className="group-hover:scale-105">
              View All
            </Link>
          </div>
        </div>
      )}
    </div>
  );
});

export default DropdownNavItems;
