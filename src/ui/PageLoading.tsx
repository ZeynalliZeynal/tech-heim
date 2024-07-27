import pageLoading from "@/assets/animation/page-loading.json";
import Lottie from "lottie-react";

const PageLoading = ({ name }: { name: string }) => {
  return (
    <div className="w-dvw h-dvh flex flex-col items-center justify-center">
      <div>
        <Lottie animationData={pageLoading} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default PageLoading;
