import { UserCircleIcon } from "@/ui/svgs/icons.tsx";
import { USER_DROPDOWN_ITEMS } from "@/utils/variables.tsx";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/features/auth/useUser.ts";
import { useLogout } from "@/features/auth/useLogout.ts";
import Spinner from "@/ui/Spinner.tsx";

const UserDropdownMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const { user } = useUser();
  const { logout, isLoggingOut } = useLogout();
  const navigate = useNavigate();

  return (
    <ul className="flex-col items-start">
      <li className="w-full">
        <button
          onClick={() => navigate("/")}
          className="grid gap-4 w-full text-start grid-cols-[24px_1fr] p-2 rounded-md group hover:bg-primary-25/50"
        >
          <span className="size-6 group-hover:text-primary transition">
            <UserCircleIcon />
          </span>
          <div className="space-y-1 font-light">
            <p className="text-body-lg text-primary">
              {user?.user_metadata.fullName}
            </p>
            <p className="text-body-md">{user?.email}</p>
          </div>
        </button>
      </li>
      {USER_DROPDOWN_ITEMS.map((o, i) => (
        <li className="w-full" key={i}>
          <button
            onClick={() => {
              closeMenu();
              if (o.to) navigate("/blog");
              else logout();
            }}
            className="grid gap-4 w-full text-start grid-cols-[24px_1fr] p-2 rounded-md group hover:bg-primary-25/50"
          >
            {o.label === "Log out" && isLoggingOut ? (
              <Spinner color="black" />
            ) : (
              <span className="size-6 group-hover:text-primary transition">
                {o.icon}
              </span>
            )}
            <div className="font-light">
              <p className="text-body-lg flex gap-2 items-center">{o.label}</p>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserDropdownMenu;
