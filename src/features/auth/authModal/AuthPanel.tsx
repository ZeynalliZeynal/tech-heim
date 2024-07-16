import classNames from "classnames";
import { useState } from "react";
import AuthFormContainer from "@/features/auth/authModal/AuthFormContainer.tsx";

export type FormTabType = {
  activeTab?: "login" | "signup";
  toggleTab: () => void;
};

const AuthPanel = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  const toggleTab = () => {
    if (activeTab === "login") setActiveTab("signup");
    else setActiveTab("login");
  };

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
      <AuthFormContainer activeTab={activeTab} toggleTab={toggleTab} />
    </div>
  );
};

export default AuthPanel;
