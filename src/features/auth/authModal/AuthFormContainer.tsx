import ModalLoginForm from "@/features/auth/authModal/ModalLoginForm.tsx";
import { FormTabType } from "@/features/auth/authModal/AuthPanel.tsx";
import classNames from "classnames";
import ModalSignupForm from "@/features/auth/authModal/ModalSignupForm.tsx";

const AuthFormContainer = ({ activeTab, toggleTab }: FormTabType) => {
  return (
    <div className="overflow-hidden">
      <div
        className={classNames(
          "w-[440px] mt-14 flex shrink-0 transition-transform duration-500",
          {
            "translate-x-0": activeTab === "login",
            "-translate-x-full": activeTab === "signup",
          },
        )}
      >
        <div
          className={classNames(
            "flex flex-col gap-6 items-center min-w-[440px] transition-all",
            {
              "opacity-100 scale-100": activeTab === "login",
              "opacity-50 scale-[0.7]": activeTab === "signup",
            },
          )}
        >
          <h3>Log in to Tech Heim</h3>
          <ModalLoginForm toggleTab={toggleTab} />
        </div>
        <div
          className={classNames(
            "flex flex-col gap-6 items-center min-w-[440px] transition-all",
            {
              "opacity-50 scale-[0.7]": activeTab === "login",
              "opacity-100 scale-100": activeTab === "signup",
            },
          )}
        >
          <h3>Sign up to Tech Heim</h3>
          <ModalSignupForm toggleTab={toggleTab} />
        </div>
      </div>
    </div>
  );
};

export default AuthFormContainer;
