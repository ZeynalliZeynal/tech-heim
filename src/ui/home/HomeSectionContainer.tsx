import { ReactNode } from "react";

const HomeSectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex text-black w-full flex-col gap-8">{children}</div>
  );
};

export default HomeSectionContainer;
