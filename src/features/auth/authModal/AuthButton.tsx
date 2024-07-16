import Button from "@/ui/Button.tsx";
import { EnterIcon } from "@/ui/svgs/icons.tsx";
import Modal from "@/ui/Modal.tsx";
import AuthForm from "@/features/auth/authModal/AuthForm.tsx";

const AuthButton = () => {
  return (
    <div>
      <Modal>
        <Modal.Open name="auth">
          <Button size="sm" type="primary-none" className="md:hidden">
            <span className="size-6">
              <EnterIcon />
            </span>{" "}
            Login
          </Button>
        </Modal.Open>
        <Modal.Open name="auth">
          <Button size="sm" type="primary-regular" className="md:flex hidden">
            Login / Register
          </Button>
        </Modal.Open>
        <Modal.Window name="auth">
          <Modal.Panel>
            <AuthForm />
          </Modal.Panel>
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AuthButton;
