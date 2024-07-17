import ModalForm from "@/features/auth/authModal/ModalForm.tsx";
import classNames from "classnames";
import { useModalFormTabContext } from "@/context/useModalFormTabContext.ts";

const ModalFormContainer = ({ closeModal }: { closeModal: () => void }) => {
  const { activeTab } = useModalFormTabContext();
  return (
    <div className="overflow-hidden">
      <div
        className={classNames(
          "w-[440px] mt-14 flex gap-16 shrink-0 transition-transform duration-500",
          {
            "translate-x-0": activeTab === "login",
            "-translate-x-[calc(100%+64px)]": activeTab === "signup",
          },
        )}
      >
        <div
          className={classNames(
            "flex flex-col gap-6 items-center min-w-[440px] transition-all",
          )}
        >
          <h3>Log in to Tech Heim</h3>
          <ModalForm closeModal={closeModal} />
        </div>

        <div
          className={classNames(
            "flex flex-col gap-6 items-center min-w-[440px] transition-all",
          )}
        >
          <h3>Sign up to Tech Heim</h3>
          <ModalForm closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default ModalFormContainer;
