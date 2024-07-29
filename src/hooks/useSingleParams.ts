import { useSearchParams } from 'react-router-dom';

export const useSingleParams = () => {
  const [_, setSearchParams] = useSearchParams();
  return (field: string, value: string) => {
    setSearchParams(
      (prev) => {
        if (value === null || value === '') prev.delete(field);
        else prev.set(field, value);
        return prev;
      },
      { replace: true }
    );
  };
};
