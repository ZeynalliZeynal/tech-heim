import { useSingleParams } from "@/hooks/useSingleParams";
import { ChangeEvent, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

// todo: style slider more; add value indicator while dragging

interface ISlider {
  maxValue: number;
  minValue: number;
  gap: number;
  field: string;
}

const Slider = ({ maxValue, minValue, gap, field }: ISlider) => {
  const [searchParams] = useSearchParams();
  const [minCurrentValue, setMinCurrentValue] = useState(minValue);
  const [maxCurrentValue, setMaxCurrentValue] = useState(maxValue);
  const maxInputRef = useRef<HTMLInputElement | null>(null);
  const minInputRef = useRef<HTMLInputElement | null>(null);

  const handleSingleParams = useSingleParams();

  const handleChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (minInputRef.current) {
      if (value <= maxCurrentValue - gap) {
        setMinCurrentValue(value);
        handleSingleParams(`min${field}`, value.toString());
      } else {
        minInputRef.current.value = minCurrentValue.toString();
      }
    }
  };

  const handleChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
    if (maxInputRef.current) {
      const value = Number(event.target.value);
      if (value >= minCurrentValue + gap) {
        setMaxCurrentValue(value);
        handleSingleParams(`max${field}`, value.toString());
      } else {
        maxInputRef.current.value = maxCurrentValue.toString();
      }
    }
  };

  const calculateFill = () => {
    const minPosition =
      ((Number(searchParams.get(`min${field}`)) || minValue) / maxValue) * 100;
    const maxPosition =
      ((Number(searchParams.get(`max${field}`)) || maxValue) / maxValue) * 100;

    return {
      left: `${minPosition}%`,
      right: `${100 - maxPosition}%`,
    };
  };

  return (
    <>
      <div className="h-2 rounded-md w-full bg-neutral-gray-400 relative z-10">
        <div
          className="absolute inset-0 rounded-md bg-primary"
          style={calculateFill()}
        />
      </div>
      <div className="relative z-20">
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={Number(searchParams.get(`min${field}`) || minValue)}
          onChange={handleChangeMin}
          ref={minInputRef}
          className="range-input"
        />
        <input
          type="range"
          min={minValue}
          value={Number(searchParams.get(`max${field}`) || maxValue)}
          max={maxValue}
          onChange={handleChangeMax}
          ref={maxInputRef}
          className="range-input"
        />
      </div>
    </>
  );
};

export default Slider;
