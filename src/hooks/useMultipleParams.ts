import { useSearchParams } from "react-router-dom";

export const useMultipleParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (field: string, value: string) => {
    let updatedParams = [...searchParams.getAll(field), value];

    if (searchParams.getAll(field).includes(value))
      updatedParams = updatedParams.filter((o) => o !== value);

    setSearchParams({ [field]: updatedParams });
  };
};
