import { useNavigate } from "react-router-dom";
import { useUser } from "../useUser";
import InputBox from "@/ui/form/InputBox";
import { UserIcon } from "@/ui/svgs/icons/userIcons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { DirectIcon } from "@/ui/svgs/icons/emailIcons";
import { REGEX_PATTERNS } from "@/utils/constants";
import { HouseIcon } from "@/ui/svgs/icons/buildingIcons";
import { useUpdateUser } from "@/features/auth/useUpdateUser.ts";
import { PiFile } from "react-icons/pi";
import { useState } from "react";

const PersonalData = () => {
  const { user, isAuthenticated } = useUser();
  const { updateUser, isPending } = useUpdateUser();
  const [avatar, setAvatar] = useState<File | undefined>(undefined);

  const { register, formState, getValues, reset, handleSubmit } = useForm();
  const { errors } = formState;

  const navigate = useNavigate();

  if (!isAuthenticated) navigate("/");

  const handleForm: SubmitHandler<FieldValues> = ({
    email,
    address,
    fullName,
  }) => {
    if (
      user?.email !== email &&
      user?.user_metadata.fullName !== fullName &&
      user?.user_metadata.address !== address
    ) {
      updateUser({
        email,
        data: { address, fullName, avatar },
      });
    }
    setAvatar(undefined);
  };

  return (
    <section className="p-6 text-neutral-gray-700">
      <div className="space-y-2">
        <h5 className="text-black">Identification</h5>
        <p className="text-body-xl">Verify your identity</p>
      </div>
      <form
        className="grid grid-cols-2 mt-6 gap-6"
        onBlur={handleSubmit(handleForm)}
      >
        <InputBox
          icon={<UserIcon />}
          label="Full Name"
          error={errors?.fullName?.message}
          edit
          disabled={isPending}
        >
          <input
            className="default-input"
            type="text"
            placeholder=""
            defaultValue={user?.user_metadata.fullName}
            {...register("fullName")}
          />
        </InputBox>
        <InputBox
          icon={<DirectIcon />}
          label="Email"
          error={errors?.email?.message}
          edit
          disabled={isPending}
        >
          <input
            className="default-input"
            type="email"
            placeholder=""
            defaultValue={user?.email}
            {...register("email", {
              pattern: {
                value: new RegExp(REGEX_PATTERNS.email),
                message: "Please enter a valid email",
              },
            })}
          />
        </InputBox>
        <InputBox
          icon={<HouseIcon />}
          label="Address"
          edit
          disabled={isPending}
          error={errors?.address?.message}
        >
          <input
            className="default-input"
            type="text"
            placeholder=""
            defaultValue={user?.user_metadata.address}
            {...register("address")}
          />
        </InputBox>
        <InputBox icon={<PiFile />}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files && setAvatar(e.target.files[0])}
          />
        </InputBox>
      </form>
    </section>
  );
};

export default PersonalData;
