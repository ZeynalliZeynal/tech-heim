import Button from "@/ui/Button.tsx";
import { UserIcon } from "@/ui/svgs/icons.tsx";
import { useUser } from "@/features/auth/useUser.ts";
import MenuDropdown from "@/ui/MenuDropdown.tsx";
import UserDropdownMenu from "@/features/auth/authModal/userDropdown/UserDropdownMenu.tsx";

const UserDropdown = () => {
  const { user } = useUser();

  return (
    <MenuDropdown>
      <MenuDropdown.Toggle name="user">
        <Button size="icon">
          <span className="size-6" title={user?.user_metadata.fullName}>
            <UserIcon />
          </span>
        </Button>
      </MenuDropdown.Toggle>
      <MenuDropdown.Menu name="user">
        <UserDropdownMenu />
      </MenuDropdown.Menu>
    </MenuDropdown>
  );
};

export default UserDropdown;
