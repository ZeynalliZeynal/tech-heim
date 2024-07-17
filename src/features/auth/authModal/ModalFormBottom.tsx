import { useModalFormTabContext } from "@/context/useModalFormTabContext.ts";

const ModalFormBottom = () => {
  const { toggleTab, activeTab } = useModalFormTabContext();
  return (
    <div className="flex justify-center items-center gap-4">
      <p>
        {activeTab === "login" ? "Don't have an account?" : "Have an account"}
      </p>
      <button type="button" className="text-primary" onClick={toggleTab}>
        {activeTab === "login" ? "sign up" : "log in"}
      </button>
    </div>
  );
};

export default ModalFormBottom;
