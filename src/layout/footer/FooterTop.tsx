import { FOOTER_LINKS } from "../../utils/variables.tsx";
import { Link } from "react-router-dom";
import { UserIcon } from "../../ui/svgs/icons.tsx";
import { LuChevronRight } from "react-icons/lu";
import { ADMIN_INFO } from "../../data/adminInfo.tsx";

const FooterTop = () => {
  return (
    <div className="grid grid-cols-[7fr_5fr] w-full py-12 text-white relative z-20">
      <div className="flex">
        <ul className="items-stretch w-full gap-[100px] justify-start">
          {FOOTER_LINKS.map((item, i) => (
            <li className="gap-2 flex-col items-start" key={i}>
              <h6>{item.title}</h6>
              <ul className="flex-col gap-2 text-neutral-gray-400 text-body-md items-start">
                {item.list.map((l, i) => (
                  <li key={i}>
                    <Link
                      to={l.link}
                      className="hover:scale-105 hover:text-neutral-gray-200 gap-1"
                    >
                      {l.context}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-4 flex-col">
          <h6>Sign up for news and updates</h6>
          <div className="h-12 rounded-md border-2 border-white w-[300px] px-3 flex items-center">
            <div className="flex gap-2">
              <UserIcon />
              <span className="h-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail Address"
                />
              </span>
              <span className="size-6">
                <LuChevronRight />
              </span>
            </div>
          </div>
          <ul className="justify-start gap-4">
            {ADMIN_INFO.socials.map((s, i) => (
              <Link to={s.link} key={i} title={s.name}>
                <span className="size-8">{s.icon}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
