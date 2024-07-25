import InputBox from "@/ui/form/InputBox";
import { REGEX_PATTERNS } from "@/utils/constants";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ModalFormAuthButtons from "@/features/auth/authModal/ModalFormAuthButtons";
import { useModalFormTabContext } from "@/context/useModalFormTabContext";
import ModalFormBottom from "@/features/auth/authModal/ModalFormBottom";
import ModalFormCheckbox from "@/features/auth/authModal/ModalFormCheckbox";
import { useSignup } from "@/features/auth/useSignup";
import { useLogin } from "@/features/auth/useLogin";
import { UserIcon } from "@/ui/svgs/icons/userIcons";
import { EmailIcon } from "@/ui/svgs/icons/emailIcons";
import { KeyIcon } from "@/ui/svgs/icons/securityIcons";

const ModalForm = ({ closeModal }: { closeModal: () => void }) => {
  const { activeTab } = useModalFormTabContext();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const { handleSubmit, reset, formState, register } = useForm<FieldValues>();
  const { errors } = formState;

  const { signup, isSigningUp } = useSignup();
  const { login, isLoggingIn } = useLogin();

  const onSubmit: SubmitHandler<FieldValues> = ({
    fullName,
    password,
    email,
  }) => {
    if (activeTab === "signup" && checked) {
      signup(
        {
          fullName,
          password,
          email,
        },
        {
          onSettled: () => {
            reset();
            closeModal();
          },
        },
      );
    } else if (activeTab === "login") {
      login(
        { email, password },
        {
          onSettled: () => {
            reset();
            closeModal();
          },
        },
      );
    }
  };

  return (
    <form
      noValidate
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      {activeTab === "signup" && (
        <InputBox
          icon={<UserIcon />}
          label="Full Name"
          error={errors?.fullName?.message}
          disabled={isSigningUp || isLoggingIn}
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
      )}{" "}
      <InputBox
        icon={<EmailIcon />}
        label="e-mail"
        error={errors?.email?.message}
        disabled={isSigningUp || isLoggingIn}
      >
        <input
          className="default-input"
          type="email"
          defaultValue="zzeynalli446@gmail.com"
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
        type={activeTab}
        togglePassword={() => setShowPassword((prevState) => !prevState)}
        showPassword={showPassword}
        icon={<KeyIcon />}
        label="password"
        error={errors?.password?.message}
        disabled={isSigningUp || isLoggingIn}
      >
        <input
          type={showPassword ? "text" : "password"}
          className="default-input"
          defaultValue="zeynal"
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
      <ModalFormCheckbox checked={checked} setChecked={setChecked} />
      <ModalFormAuthButtons
        checked={checked}
        isLoading={isSigningUp || isLoggingIn}
      />
      <ModalFormBottom />
    </form>
  );
};

export default ModalForm;
