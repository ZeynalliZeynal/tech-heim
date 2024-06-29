import {
  CategoriesIconsProps,
  NavLinksProps,
  ServicesProps,
} from "../types/variableTypes.ts";
import {
  AccessoryIcon,
  CameraIcon,
  ConsoleIcon,
  HeadphoneIcon,
  MobileIcon,
  MonitorIcon,
  NetworkIcon,
  ServiceCargoIcon,
  ServiceComputerIcon,
  ServiceShieldIcon,
  TVIcon,
  WatchIcon,
} from "../ui/svgs/icons.tsx";

export const NAV_LINKS: NavLinksProps[] = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/products",
    name: "Products",
    children: true,
  },
  {
    to: "/blog",
    name: "Blog",
  },
  {
    to: "/faq",
    name: "FAQ",
  },
  {
    to: "/contact",
    name: "Contact Us",
  },
];

export const CATEGORIES_ICONS: CategoriesIconsProps = {
  "Mobile Phones": <MobileIcon />,
  "Laptops & Computers": <MonitorIcon />,
  Wearables: <WatchIcon />,
  Audio: <HeadphoneIcon />,
  Cameras: <CameraIcon />,
  Gaming: <ConsoleIcon />,
  Networking: <NetworkIcon />,
  Accessories: <AccessoryIcon />,
  "Household Appliances": <TVIcon />,
};

export const SERVICES: Array<ServicesProps> = [
  {
    text: "Latest and Greatest Tech",
    icon: <ServiceComputerIcon w={40} h={34} />,
  },
  {
    text: "Guarantee",
    icon: <ServiceShieldIcon w={41} h={44} />,
  },
  {
    text: "Free Shipping over 1000$",
    icon: <ServiceCargoIcon w={62} h={31} />,
  },
  {
    text: "24/7 Support",
    icon: <ServiceComputerIcon w={40} h={46} />,
  },
];
