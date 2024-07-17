import classNames from "classnames";
import ModalFormContainer from "@/features/auth/authModal/ModalFormContainer.tsx";
import { useModalFormTabContext } from "@/context/useModalFormTabContext.ts";

const ModalAuthPanel = ({ closeModal }: { closeModal: () => void }) => {
  const { toggleTab, activeTab } = useModalFormTabContext();
  return (
    <div className="text-body-lg px-8">
      <div
        className={classNames(
          "grid grid-cols-2 before:rounded-xl after:rounded-xl relative after:absolute after:content-[''] after:w-full after:h-0.5 after:-bottom-2 after:bg-neutral-gray-400 after:z-10 before:absolute before:content-[''] before:-bottom-2 before:w-1/2 before:z-20 before:bg-primary before:h-0.5 before:transition-transform before:duration-300",
          {
            "before:translate-x-0": activeTab === "login",
            "before:translate-x-full": activeTab === "signup",
          },
        )}
      >
        <button onClick={toggleTab}>Log in</button>
        <button onClick={toggleTab}>Create Account</button>
      </div>
      <ModalFormContainer closeModal={closeModal} />
    </div>
  );
};

export default ModalAuthPanel;
