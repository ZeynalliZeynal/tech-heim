import { ReactNode } from "react";

export type ChildrenProps = {
  name: string;
  icon: ReactNode;
};

export type NavLinksProps = {
  to: string;
  name: string;
  children?: boolean;
};

export type CategoriesIconsProps = Record<string, ReactNode>;

export type ServicesProps = {
  text: string;
  icon: ReactNode;
};
