import Button from "@/ui/Button.tsx";
import { EnterIcon, UserIcon } from "@/ui/svgs/icons.tsx";
import Modal from "@/ui/Modal.tsx";
import ModalAuthPanel from "@/features/auth/authModal/ModalAuthPanel.tsx";
import ModalFormTabContext from "@/context/ModalFormTabContext.tsx";
import { useUser } from "@/features/auth/useUser.ts";

const AuthButton = () => {
  const { user, isAuthenticated } = useUser();
  return (
    <div>
      {isAuthenticated ? (
        <Button size="icon">
          <span className="size-6" title={user?.user_metadata.fullName}>
            <UserIcon />
          </span>
        </Button>
      ) : (
        <Modal>
          <ModalFormTabContext>
            <Modal.Open name="auth">
              <Button size="sm" style="primary-none" className="md:hidden">
                <span className="size-6">
                  <EnterIcon />
                </span>{" "}
                Login
              </Button>
            </Modal.Open>
            <Modal.Open name="auth">
              <Button
                size="sm"
                style="primary-regular"
                className="md:flex hidden"
              >
                Login / Register
              </Button>
            </Modal.Open>
            <Modal.Window name="auth">
              <Modal.Panel>
                <ModalAuthPanel />
              </Modal.Panel>
            </Modal.Window>
          </ModalFormTabContext>
        </Modal>
      )}
    </div>
  );
};

export default AuthButton;
