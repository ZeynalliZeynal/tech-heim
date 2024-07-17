import Checkbox from "@/ui/form/Checkbox.tsx";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { useModalFormTabContext } from "@/context/useModalFormTabContext.ts";

const ModalFormCheckbox = ({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}) => {
  const { activeTab } = useModalFormTabContext();

  return activeTab === "login" ? (
    <Checkbox
      checked={checked}
      onChange={() => setChecked((prevState) => !prevState)}
      color="dark"
    >
      Keep me logged in
    </Checkbox>
  ) : (
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
  );
};

export default ModalFormCheckbox;
