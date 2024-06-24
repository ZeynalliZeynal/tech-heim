import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Button from "../../../ui/Button";

const HomeCarouselButtons = ({
  slideIndex,
  handlePrev,
  handleNext,
  totalSlides,
}: {
  slideIndex: number;
  handlePrev: () => void;
  handleNext: () => void;
  totalSlides: number;
}) => {
  return (
    <div className="flex w-full justify-end text-primary-700 gap-2">
      <Button
        className="bg-white rounded-full size-9"
        disabled={slideIndex === 0}
        onClick={handlePrev}
      >
        <span className="p-1">
          <FaChevronLeft />
        </span>
      </Button>
      <Button
        className="bg-white rounded-full size-9"
        disabled={slideIndex >= totalSlides - 5}
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
