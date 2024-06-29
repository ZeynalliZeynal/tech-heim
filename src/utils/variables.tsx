import { ADMIN_INFO } from '../data/adminInfo';
import {
  CategoriesIconsProps,
  FooterLinksTypes,
  NavLinksProps,
  ServicesProps,
} from '../types/variableTypes.ts';
import {
  AccessoryIcon,
  CallingIcon,
  CameraIcon,
  ConsoleIcon,
  EmailIcon,
  HeadphoneIcon,
  LocationIcon,
  MobileIcon,
  MonitorIcon,
  NetworkIcon,
  ServiceCargoIcon,
  ServiceComputerIcon,
  ServiceShieldIcon,
  TVIcon,
  WatchIcon,
} from '../ui/svgs/icons.tsx';
import Logo from '../ui/svgs/logo.tsx';

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

export const SERVICES: Array<ServicesProps> = [
  {
    text: 'Latest and Greatest Tech',
    icon: <ServiceComputerIcon w={40} h={34} />,
  },
  {
    text: 'Guarantee',
    icon: <ServiceShieldIcon w={41} h={44} />,
  },
  {
    text: 'Free Shipping over 1000$',
    icon: <ServiceCargoIcon w={62} h={31} />,
  },
  {
    text: '24/7 Support',
    icon: <ServiceComputerIcon w={40} h={46} />,
  },
];

export const CONTACT_INFO = {
  title: <Logo />,
  address: <LocationIcon />,
  phone: <CallingIcon />,
  email: <EmailIcon />,
};

export const FOOTER_LINKS: FooterLinksTypes[] = [
  {
    title: 'Company',
    list: [
      { context: 'About us', link: '/' },
      { context: 'Blog', link: '/' },
      { context: 'Returns', link: '/' },
      { context: 'Order status', link: '/' },
    ],
  },
  {
    title: 'Info',
    list: [
      { context: 'How it works?', link: '/' },
      { context: 'Our promises', link: '/' },
      { context: 'FAQ', link: '/' },
    ],
  },
  {
    title: 'Contact us',
    list: [
      {
        context: (
          <>
            {CONTACT_INFO.address} {ADMIN_INFO.address}
          </>
        ),
        link: '/',
      },
      {
        context: (
          <>
            {CONTACT_INFO.phone} {ADMIN_INFO.phone}
          </>
        ),
        link:
          'tel:' +
          ADMIN_INFO.phone
            .replaceAll(' ', '')
            .replaceAll('+', '')
            .replaceAll('(', '')
            .replaceAll(')', ''),
      },
      {
        context: (
          <>
            {CONTACT_INFO.email} {ADMIN_INFO.email}
          </>
        ),
        link: 'mailto:' + ADMIN_INFO.email,
      },
    ],
  },
];
