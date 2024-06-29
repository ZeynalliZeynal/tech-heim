import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { TbExternalLink } from "react-icons/tb";

const HomeSectionContainer = ({
  title,
  to,
  children,
}: {
  title: string;
  to: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex text-black w-full flex-col gap-8">
      <div className="w-full flex justify-between h-16 items-center border-b-2 border-neutral-gray-500">
        <h3>{title}</h3>
        <Link to={to} className="gap-2 group">
          <span className="group-hover:underline">View All</span>
          <span className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition">
            <TbExternalLink />
          </span>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default HomeSectionContainer;
