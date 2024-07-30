import { useSingleParams } from '@/hooks/useSingleParams';
import { ChangeEvent, ChangeEventHandler, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

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
  const maxInputRef = useRef(null);
  const minInputRef = useRef(null);

  const handleSingleParams = useSingleParams();

  const handleChangeMin: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent
  ) => {
    const value = Number(event.target.value);
    if (minInputRef.current) {
      if (value <= maxCurrentValue - gap) {
        setMinCurrentValue(value);
        handleSingleParams(`min${field}`, value);
      } else {
        minInputRef.current.value = minCurrentValue;
      }
    }
  };

  const handleChangeMax: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent
  ) => {
    if (maxInputRef.current) {
      const value = Number(event.target.value);
      if (value >= minCurrentValue + gap) {
        setMaxCurrentValue(value);
        handleSingleParams(`max${field}`, value);
      } else {
        maxInputRef.current.value = maxCurrentValue;
      }
    }
  };

  const calculateFill = () => {
    const minPosition =
      ((Number(searchParams.get(`min${field}`)) || minCurrentValue) /
        maxValue) *
      100;
    const maxPosition =
      ((Number(searchParams.get(`max${field}`)) || maxCurrentValue) /
        maxValue) *
      100;

    return {
      left: `${minPosition}%`,
      right: `${100 - maxPosition}%`,
    };
  };

  return (
    <>
      <div className='h-2 rounded-md w-full bg-neutral-gray-400 relative z-10'>
        <div
          className='absolute inset-0 rounded-md bg-primary'
          style={calculateFill()}
        />
      </div>
      <div className='relative z-20'>
        <input
          type='range'
          min={minValue}
          max={maxValue}
          value={Number(searchParams.get(`min${field}`) || minCurrentValue)}
          onChange={handleChangeMin}
          ref={minInputRef}
          className='range-input'
        />
        <input
          type='range'
          min={minValue}
          value={Number(searchParams.get(`max${field}`) || maxCurrentValue)}
          max={maxValue}
          onChange={handleChangeMax}
          ref={maxInputRef}
          className='range-input'
        />
      </div>
    </>
  );
};

export default Slider;
