import { useNavigate } from "react-router-dom";
import { useUser } from "../useUser";

const PersonalData = () => {
  const { isAuthenticated, isPending } = useUser();
  const navigate = useNavigate();

  if (!isAuthenticated) navigate("/");
  if (isPending) return null;
  return (
    <section className="p-6 text-neutral-gray-700">
      <div className="space-y-2">
        <h5 className="text-black">Identification</h5>
        <p className="text-body-xl">
          Verify your identity
          <span className="size-6"></span>
        </p>
      </div>
    </section>
  );
};

export default PersonalData;
