import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "../../../ui/Button.tsx";

const HomeCarouselButtons = ({
  handlePrev,
  handleNext,
  isBeginning,
  isEnd,
}: {
  isBeginning: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  isEnd: boolean;
}) => {
  return (
    <div className="flex w-full justify-end text-primary-700 gap-2">
      <Button
        size="icon"
        className="bg-white"
        disabled={isBeginning}
        onClick={handlePrev}
      >
        <span className="p-1">
          <FaChevronLeft />
        </span>
      </Button>
      <Button
        size="icon"
        className="bg-white"
        disabled={isEnd}
        onClick={handleNext}
      >
        <span className="p-1">
          <FaChevronRight />
        </span>
      </Button>
    </div>
  );
};

export default HomeCarouselButtons;
