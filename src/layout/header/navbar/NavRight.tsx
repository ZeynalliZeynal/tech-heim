import Cart from "@/features/cart/Cart";
import Button from "@/ui/Button";
import Modal from "@/ui/Modal";
import { SearchIcon } from "@/ui/svgs/icons";
import AuthButton from "@/features/auth/authModal/AuthButton.tsx";
import { useUser } from "@/features/auth/useUser.ts";

const NavRight = () => {
  const { isAuthenticated } = useUser();
  return (
    <div className="flex items-center gap-2">
      <>
        <Modal>
          <Modal.Open name="search-window">
            <Button size="icon">
              <span className="size-6">
                <SearchIcon />
              </span>
            </Button>
          </Modal.Open>
          <Modal.Window name="search-window">
            <Modal.Head>
              <h5>Search</h5>
            </Modal.Head>
            <Modal.Panel>
              <div>hello</div>
            </Modal.Panel>
          </Modal.Window>
        </Modal>{" "}
        {isAuthenticated && <Cart />} <AuthButton />
      </>
    </div>
  );
};

export default NavRight;
