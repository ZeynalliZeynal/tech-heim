import { ADMIN_INFO } from "../data/adminInfo";
import { ReactNode } from "react";
import Logo from "@/ui/svgs/logo.tsx";
import {
  AccessoryIcon,
  CameraIcon,
  ConsoleIcon,
  HeadphoneIcon,
  MobileIcon,
  MonitorIcon,
  NetworkIcon,
  TVIcon,
  WatchIcon,
} from "@/ui/svgs/icons/deviceIcons.tsx";
import {
  ServiceCargoIcon,
  ServiceComputerIcon,
  ServiceShieldIcon,
  ServiceTimeIcon,
} from "@/ui/svgs/icons/servicesIcons.tsx";
import { BasketIcon } from "@/ui/svgs/icons/shopIcons.tsx";
import { UserEditIcon } from "@/ui/svgs/icons/userIcons.tsx";
import { GiftIcon, HeartIcon } from "@/ui/svgs/icons/supportIcons.tsx";
import { NotificationIcon } from "@/ui/svgs/icons/notificationIcons.tsx";
import { DollarCircleIcon } from "@/ui/svgs/icons/cryptoIcons.tsx";
import { LogoutIcon } from "@/ui/svgs/icons/arrowIcons.tsx";
import { SecuritySafeIcon } from "@/ui/svgs/icons/securityIcons.tsx";
import { LocationIcon } from "@/ui/svgs/icons/locationIcons.tsx";
import { CallingIcon } from "@/ui/svgs/icons/callIcons.tsx";
import { EmailEditIcon } from "@/ui/svgs/icons/emailIcons.tsx";

interface INavLinks {
  to: string;
  name: string;
  children?: boolean;
}

export const NAV_LINKS: INavLinks[] = [
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

export const DASHBOARD_LINKS = [
  {
    to: "/dashboard/personalData",
    name: "Personal data",
    icon: <UserEditIcon />,
  },
  {
    to: "/dashboard/paymentInstallments",
    name: "Payment Installments",
    icon: <DollarCircleIcon />,
  },
  {
    to: "/dashboard/orders",
    name: "Orders",
    icon: <BasketIcon />,
  },
  {
    to: "/dashboard/wishlist",
    name: "Wishlist",
    icon: <HeartIcon />,
  },
  {
    to: "/dashboard/discounts",
    name: "Discounts",
    icon: <GiftIcon />,
  },
  {
    to: "/dashboard/security",
    name: "Security & Access",
    icon: <SecuritySafeIcon />,
  },
  {
    to: "/dashboard/notifications",
    name: "Notifications",
    icon: <NotificationIcon />,
  },
];

export const CATEGORIES_ICONS: Record<string, ReactNode> = {
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

export const SERVICES: Array<{ text: string; icon: ReactNode }> = [
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

export const FOOTER_LINKS: Array<{
  title: string;
  list: { context: string | ReactNode; link: string }[];
}> = [
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

export const USER_DROPDOWN_ITEMS: Array<{
  icon: ReactNode;
  label: string;
  to?: string;
}> = [
  {
    icon: <BasketIcon />,
    label: "Orders",
    to: "/",
  },
  {
    icon: <HeartIcon />,
    label: "Wish List",
    to: "/",
  },
  {
    icon: <DollarCircleIcon />,
    label: "Payments",
    to: "/",
  },
  {
    icon: <LogoutIcon />,
    label: "Log out",
  },
];
