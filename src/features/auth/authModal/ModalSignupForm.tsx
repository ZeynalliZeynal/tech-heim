import InputBox from "@/ui/form/InputBox.tsx";
import { EmailIcon, KeyIcon, UserIcon } from "@/ui/svgs/icons.tsx";
import { REGEX_PATTERNS } from "@/utils/constants.ts";
import Checkbox from "@/ui/form/Checkbox.tsx";
import Button from "@/ui/Button.tsx";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { FieldValues, useForm } from "react-hook-form";
import { useInputContext } from "@/context/InputContext.tsx";
import { useState } from "react";
import { FormTabType } from "@/features/auth/authModal/AuthPanel.tsx";
import { Link } from "react-router-dom";

const ModalSignupForm = ({ toggleTab }: FormTabType) => {
  const { handleSubmit, getValues, formState, register } =
    useForm<FieldValues>();

  const { isShown } = useInputContext();

  const [checked, setChecked] = useState(false);

  const { errors } = formState;

  const onSubmit = (data: FieldValues) => {
    console.log(getValues());
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputBox
        icon={<UserIcon />}
        label="Full Name"
        error={errors?.email?.message}
      >
        <input
          className="default-input"
          type="text"
          autoComplete="name"
          placeholder=""
          {...register("fullName", {
            required: "Full name is required",
          })}
        />
      </InputBox>
      <InputBox
        icon={<EmailIcon />}
        label="e-mail"
        error={errors?.email?.message}
      >
        <input
          className="default-input"
          type="email"
          autoComplete="email"
          placeholder=""
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: new RegExp(REGEX_PATTERNS.email),
              message: "Please enter a valid email",
            },
          })}
        />
      </InputBox>
      <InputBox
        type="signup"
        icon={<KeyIcon />}
        label="password"
        error={errors?.password?.message}
      >
        <input
          className="default-input"
          type={isShown ? "text" : "password"}
          autoComplete="current-password"
          placeholder=""
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: new RegExp(REGEX_PATTERNS.password),
              message: "Please enter at least 6 characters",
            },
          })}
        />
      </InputBox>
      <Checkbox
        checked={checked}
        onChange={() => setChecked((prevState) => !prevState)}
        color="dark"
      >
        I agree to all{" "}
        <Link to="/" className="underline text-primary">
          Terms & Conditions
        </Link>
      </Checkbox>
      <Button style="primary-regular" type="submit">
        Sign up
      </Button>
      <div className="flex justify-center relative after:absolute after:w-full after:h-0.5 after:bg-neutral-gray-500 after:top-1/2 after:-translate-y-1/2 after:z-[2]">
        <p className="px-2 bg-white relative z-[3]">or sign up with</p>
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
      <div className="flex justify-center items-center gap-4">
        <p>Have an account?</p>
        <button type="button" className="text-primary" onClick={toggleTab}>
          login
        </button>
      </div>
    </form>
  );
};

export default ModalSignupForm;
