import classNames from "classnames";
import Input from "@/ui/form/Input.tsx";
import { EmailIcon, KeyIcon } from "@/ui/svgs/icons.tsx";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Button from "@/ui/Button.tsx";

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState<string>("login");

  const { handleSubmit, getValues, formState, register } = useForm();
  const { errors } = formState;

  const onSubmit = (data: FieldValues) => {
    console.log(getValues());
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
        <button onClick={() => setActiveTab("login")}>Log in</button>
        <button onClick={() => setActiveTab("signup")}>Create Account</button>
      </div>
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
                "opacity-0 scale-[0.7]": activeTab === "signup",
              },
            )}
          >
            <h3>Log in to Tech Heim</h3>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                icon={<EmailIcon />}
                label="e-mail"
                hasValue={getValues()?.email}
                error={errors?.email?.message}
              >
                <input
                  id="userEmail"
                  type="email"
                  autoComplete="email"
                  {...register("email", { required: "Email is required" })}
                />
              </Input>
              <Input
                icon={<KeyIcon />}
                label="password"
                hasValue={getValues()?.password}
                error={errors?.password?.message}
              >
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </Input>
              <Button type="primary-regular">Submit</Button>
            </form>
          </div>
          <div
            className={classNames(
              "flex flex-col items-center min-w-[440px] transition-all duration-500",
              {
                "opacity-100 scale-100": activeTab === "signup",
                "opacity-0 scale-[0.7]": activeTab === "login",
              },
            )}
          >
            <h3>Sign up to Tech Heim</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
