import Button from "@/ui/Button.tsx";
import { EnterIcon } from "@/ui/svgs/icons.tsx";
import Modal from "@/ui/Modal.tsx";
import AuthPanel from "@/features/auth/authModal/AuthPanel.tsx";
import InputProvider from "@/context/InputContext.tsx";

const AuthButton = () => {
  return (
    <div>
      <Modal>
        <InputProvider>
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
              <AuthPanel />
            </Modal.Panel>
          </Modal.Window>
        </InputProvider>
      </Modal>
    </div>
  );
};

export default AuthButton;
