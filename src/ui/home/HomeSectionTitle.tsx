import { ReactNode } from "react";

const HomeSectionTitle = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div className="w-full flex justify-between h-16 items-center border-b-2 border-neutral-gray-500">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default HomeSectionTitle;
