import { CategoriesIconsProps, NavLinksProps } from '../types/variableTypes.ts';
import {
  AccessoryIcon,
  CameraIcon,
  ConsoleIcon,
  HeadphoneIcon,
  MobileIcon,
  MonitorIcon,
  NetworkIcon,
  TabletIcon,
  TVIcon,
  WatchIcon,
} from '../ui/svgs/icons.tsx';

export const NAV_LINKS: NavLinksProps[] = [
  {
    to: '/',
    name: 'Home',
  },
  {
    to: '/products',
    name: 'Products',
    children: true,
  },
  {
    to: '/blog',
    name: 'Blog',
  },
  {
    to: '/faq',
    name: 'FAQ',
  },
  {
    to: '/contact',
    name: 'Contact Us',
  },
];

export const CATEGORIES_ICONS: CategoriesIconsProps = {
  'Mobile Phones': <MobileIcon />,
  'Laptops & Computers': <MonitorIcon />,
  Wearables: <WatchIcon />,
  Audio: <HeadphoneIcon />,
  Cameras: <CameraIcon />,
  Gaming: <ConsoleIcon />,
  Networking: <NetworkIcon />,
  Accessories: <AccessoryIcon />,
  'Household Appliances': <TVIcon />,
};
