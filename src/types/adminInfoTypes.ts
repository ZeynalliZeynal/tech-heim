import { ReactNode } from 'react';

export type AdminInfoTypes = {
  title: string;
  address: string;
  phone: string;
  email: string;
  socials: {
    icon: ReactNode;
    name: string;
    link: string;
  }[];
};
