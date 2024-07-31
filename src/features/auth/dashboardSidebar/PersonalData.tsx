import { useNavigate } from "react-router-dom";
import { useUser } from "../useUser";
import InputBox from "@/ui/form/InputBox";
import { UserIcon } from "@/ui/svgs/icons/userIcons";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { DirectIcon } from "@/ui/svgs/icons/emailIcons";
import { REGEX_PATTERNS } from "@/utils/constants";
import { HouseIcon } from "@/ui/svgs/icons/buildingIcons";
import { useUpdateUser } from "@/features/auth/useUpdateUser.ts";
import { useEffect, useState } from "react";
import { FolderCloudIcon } from "@/ui/svgs/icons/fileIcons.tsx";
import { useRemoveAvatar } from "../useRemoveAvatar";
import { TrashIcon } from "@/ui/svgs/icons/essentialIcons";
import Button from "@/ui/Button";
import Spinner from "@/ui/Spinner";

interface IUserInfo {
  email: string;
  address: string;
  fullName: string;
}

const PersonalData = () => {
  const { user, isAuthenticated } = useUser();
  const { mutate, isRemoving } = useRemoveAvatar();
  const { updateUser, isUpdating } = useUpdateUser();
  const [avatar, setAvatar] = useState<File | undefined>(undefined);
  const [initialValues, setInitialValues] = useState<IUserInfo>({
    email: "",
    address: "",
    fullName: "",
  });

  const { register, formState, reset, handleSubmit } = useForm();
  const { errors } = formState;

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/");

    // Set initial form values
    setInitialValues({
      email: user?.email || "",
      address: user?.user_metadata.address || "",
      fullName: user?.user_metadata.fullName || "",
    });

    // Reset form values to initial values
    reset({
      email: user?.email,
      address: user?.user_metadata.address,
      fullName: user?.user_metadata.fullName,
    });
  }, [isAuthenticated, user, reset, navigate]);

  const handleForm: SubmitHandler<FieldValues> = ({
    email,
    address,
    fullName,
  }) => {
    const currentValues = {
      email,
      address,
      fullName,
    };

    // Compare initial values with current values
    const isChanged = (Object.keys(initialValues) as (keyof IUserInfo)[]).some(
      (key) => initialValues[key] !== currentValues[key],
    );

    if (!isChanged && !avatar) return;

    updateUser({
      email,
      data: { address, fullName, avatar },
    });
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
          disabled={isUpdating}
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
          disabled={isUpdating}
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
          disabled={isUpdating}
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
        <div className="flex gap-2 items-center">
          <InputBox
            icon={<FolderCloudIcon />}
            disabled={isRemoving || isUpdating}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files && setAvatar(e.target.files[0])}
              className="flex file:border-none file:text-primary file:bg-primary-25 file:rounded-md cursor-pointer"
            />
          </InputBox>{" "}
          {user?.user_metadata.avatar && (
            <Button
              size="icon"
              onClick={() => mutate()}
              className="text-error hover:bg-error-light"
            >
              {isRemoving ? <Spinner color="error" /> : <TrashIcon />}
            </Button>
          )}
        </div>
      </form>
    </section>
  );
};

export default PersonalData;
