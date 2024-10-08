import { LiaFacebookSquare, LiaInstagram } from "react-icons/lia";
import { PiYoutubeLogo } from "react-icons/pi";
import { TfiTwitter } from "react-icons/tfi";
import { ReactNode } from "react";

interface IAdminInfo {
  title: string;
  address: string;
  phone: string;
  email: string;
  socials: {
    icon: ReactNode;
    name: string;
    link: string;
  }[];
}

export const ADMIN_INFO: IAdminInfo = {
  title: "Tech Heim",
  address: "Baku, 28 May, 28 Mall",
  phone: "+994 (51) 458-6806",
  email: "zzeynalli446@gmail.com",
  socials: [
    { icon: <LiaFacebookSquare />, name: "Facebook", link: "facebook.com" },
    { icon: <PiYoutubeLogo />, name: "Youtube", link: "youtube.com" },
    { icon: <LiaInstagram />, name: "Instagram", link: "instagram.com" },
    { icon: <TfiTwitter />, name: "Twitter", link: "twitter.com" },
  ],
};
