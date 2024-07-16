import { ADMIN_INFO } from "../data/adminInfo";
import {
  CategoriesIconsProps,
  FooterLinksTypes,
  NavLinksProps,
  ServicesProps,
} from "../types/variableTypes.ts";
import {
  AccessoryIcon,
  CallingIcon,
  CameraIcon,
  ConsoleIcon,
  EmailEditIcon,
  HeadphoneIcon,
  LocationIcon,
  MobileIcon,
  MonitorIcon,
  NetworkIcon,
  ServiceCargoIcon,
  ServiceComputerIcon,
  ServiceShieldIcon,
  ServiceTimeIcon,
  TVIcon,
  WatchIcon,
} from "../ui/svgs/icons.tsx";
import Logo from "../ui/svgs/logo.tsx";

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
  "Mobile Phones": (
    <span className="size-4 md:size-6">
      <MobileIcon />,
    </span>
  ),
  "Laptops & Computers": (
    <span className="size-4 md:size-6">
      <MonitorIcon />
    </span>
  ),
  Wearables: (
    <span className="size-4 md:size-6">
      <WatchIcon />
    </span>
  ),
  Audio: (
    <span className="size-4 md:size-6">
      <HeadphoneIcon />
    </span>
  ),
  Cameras: (
    <span className="size-4 md:size-6">
      <CameraIcon />
    </span>
  ),
  Gaming: (
    <span className="size-4 md:size-6">
      <ConsoleIcon />
    </span>
  ),
  Networking: (
    <span className="size-4 md:size-6">
      <NetworkIcon />
    </span>
  ),
  Accessories: (
    <span className="size-4 md:size-6">
      <AccessoryIcon />
    </span>
  ),
  "Household Appliances": (
    <span className="size-4 md:size-6">
      <TVIcon />
    </span>
  ),
};

export const SERVICES: Array<ServicesProps> = [
  {
    text: "Latest and Greatest Tech",
    icon: <ServiceComputerIcon />,
  },
  {
    text: "Guarantee",
    icon: <ServiceShieldIcon />,
  },
  {
    text: "Free Shipping over 1000$",
    icon: <ServiceCargoIcon />,
  },
  {
    text: "24/7 Support",
    icon: <ServiceTimeIcon />,
  },
];

export const CONTACT_INFO = {
  title: (
    <span className="size-5">
      <Logo />
    </span>
  ),
  address: (
    <span className="size-5">
      <LocationIcon />
    </span>
  ),
  phone: (
    <span className="size-5">
      <CallingIcon />
    </span>
  ),
  email: (
    <span className="size-5">
      <EmailEditIcon />{" "}
    </span>
  ),
};

export const FOOTER_LINKS: FooterLinksTypes[] = [
  {
    title: "Company",
    list: [
      { context: "About us", link: "/" },
      { context: "Blog", link: "/" },
      { context: "Returns", link: "/" },
      { context: "Order status", link: "/" },
    ],
  },
  {
    title: "Info",
    list: [
      { context: "How it works?", link: "/" },
      { context: "Our promises", link: "/" },
      { context: "FAQ", link: "/" },
    ],
  },
  {
    title: "Contact us",
    list: [
      {
        context: (
          <>
            {CONTACT_INFO.address} {ADMIN_INFO.address}
          </>
        ),
        link: "/",
      },
      {
        context: (
          <>
            {CONTACT_INFO.phone} {ADMIN_INFO.phone}
          </>
        ),
        link:
          "tel:" +
          ADMIN_INFO.phone
            .replaceAll(" ", "")
            .replaceAll("+", "")
            .replaceAll("(", "")
            .replaceAll(")", ""),
      },
      {
        context: (
          <>
            {CONTACT_INFO.email} {ADMIN_INFO.email}
          </>
        ),
        link: "mailto:" + ADMIN_INFO.email,
      },
    ],
  },
];
