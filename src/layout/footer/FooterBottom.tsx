import { CopyrightIcon } from "../../ui/svgs/icons.tsx";
import { Link } from "react-router-dom";

export const FooterBottom = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="inline-flex items-center gap-2 select-none">
        <CopyrightIcon /> {new Date().getFullYear()} Tech Heim
      </div>
      <ul className="gap-12">
        <li>
          <Link to="/" className="hover:text-neutral-gray-200">
            Cookie settings
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-neutral-gray-200">
            Privacy and Policy
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-neutral-gray-200">
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-neutral-gray-200">
            Imprint
          </Link>
        </li>
      </ul>
    </div>
  );
};
