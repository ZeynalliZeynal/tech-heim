import Button from "@/ui/Button.tsx";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useModalFormTabContext } from "@/context/useModalFormTabContext.ts";
import Spinner from "@/ui/Spinner.tsx";

const ModalFormAuthButtons = ({
  checked,
  isLoading,
}: {
  checked: boolean;
  isLoading: boolean;
}) => {
  const { activeTab } = useModalFormTabContext();
  return (
    <>
      <Button
        style="primary-regular"
        type="submit"
        disabled={activeTab === "signup" && !checked}
      >
        {isLoading ? (
          <Spinner />
        ) : activeTab === "login" ? (
          "Log in"
        ) : (
          "Create account"
        )}
      </Button>
      <div className="flex justify-center relative after:absolute after:w-full after:h-0.5 after:bg-neutral-gray-500 after:top-1/2 after:-translate-y-1/2 after:z-[2]">
        <p className="px-2 bg-white relative z-[3]">
          or {activeTab === "login" ? "log in" : "sign up"} with
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Button style="primary-outline">
          <span className="size-5">
            <FaGoogle />
          </span>
          Google
        </Button>
        <Button style="primary-outline">
          <span className="size-5">
            <FaFacebook />
          </span>
          Facebook
        </Button>
      </div>
    </>
  );
};

export default ModalFormAuthButtons;
