import { useEffect, useState } from 'react';
import { Validators } from '../const';

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      if (validations.hasOwnProperty(validation)) {
        switch (validation) {
          case Validators.IS_EMPTY:
            if (value) {
              setEmpty(false);
            } else {
              setEmpty(true);
            }
            break;
          case Validators.IS_EMAIL:
            const re =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(String(value).toLowerCase())) {
              setEmailError(false);
            } else {
              setEmailError(true);
            }
            break;
          default:
        }
      }
    }
  }, [value]);

  return {
    isEmpty,
    emailError,
  };
};

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = evt => {
    setValue(evt.target.value);
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    setValue,
    isDirty,
    ...valid,
  };
};
