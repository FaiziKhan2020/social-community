import { useState, useCallback, ChangeEvent } from 'react';

interface UseFormFieldProps<T> {
  initialValue: T;
  validate?: (value: T) => string | undefined;
}

export const useFormField = <T extends string>({ 
  initialValue, 
  validate 
}: UseFormFieldProps<T>) => {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState<string | undefined>(undefined);
  const [touched, setTouched] = useState(false);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value as T;
    setValue(newValue);
    if (touched && validate) {
      setError(validate(newValue));
    }
  }, [touched, validate]);

  const onBlur = useCallback(() => {
    setTouched(true);
    if (validate) {
      setError(validate(value));
    }
  }, [validate, value]);

  const reset = useCallback(() => {
    setValue(initialValue);
    setError(undefined);
    setTouched(false);
  }, [initialValue]);

  return {
    value,
    error,
    touched,
    onChange,
    onBlur,
    reset,
    setValue,
  };
}; 