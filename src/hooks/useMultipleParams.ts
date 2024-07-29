import { useSearchParams } from 'react-router-dom';

export const useMultipleParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (field: string, value: string, isSingle?: boolean) => {
    const paramsValues = searchParams.get(field);
    let selectedValues = paramsValues
      ? paramsValues.includes(',')
        ? paramsValues.split(',')
        : [paramsValues]
      : [];

    if (isSingle) {
      console.log(field, value);
      if (paramsValues === 'true') searchParams.delete(field);
      else searchParams.set(field, value);

      setSearchParams(searchParams);
    } else {
      if (selectedValues.includes(value))
        selectedValues = selectedValues.filter((v) => v !== value);
      else selectedValues.push(value);

      setSearchParams((prev) => {
        if (selectedValues.length === 0) prev.delete(field);
        else
          prev.set(
            field,
            selectedValues.length === 1
              ? selectedValues[0]
              : selectedValues.join(',')
          );
        return prev;
      });
    }
  };
};
