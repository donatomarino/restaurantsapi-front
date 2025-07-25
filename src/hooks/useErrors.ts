import { useState } from 'react';
import { BaseApiResponse } from '../types';

const initialErrorState: BaseApiResponse = {
  success: false,
  message: {}
};

export function useErrors() {
  const [errors, setErrors] = useState<BaseApiResponse>(initialErrorState);

  function updateErrors(response: BaseApiResponse) {
    setErrors(response);
  }

  function clearErrors() {
    setErrors(initialErrorState);
  }

  return { errors, updateErrors, clearErrors };
}
