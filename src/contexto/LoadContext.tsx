import React, { createContext, useState } from 'react';
import { LoadContextType } from '../types';
import { LoadProviderProps } from '../types';

interface ContextState {
  typeContext: LoadContextType,
  typeProps: LoadProviderProps
}

// Valor por defecto del contexto
const defaultContext: ContextState['typeContext'] = {
  reload: false,
  loading: false,
  toggleReload: () => {},
  toggleLoading: () => {}
};

// Crear el contexto con el valor por defecto
export const LoadContext = createContext<LoadContextType>(defaultContext);

// Proveedor
export const LoadProvider = ({ children }: ContextState['typeProps']) => {
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleReload = () => setReload(prev => !prev);
  const toggleLoading = () => setLoading(prev => !prev);

  return (
    <LoadContext.Provider value={{ reload, toggleReload, loading, toggleLoading}}>
      {children}
    </LoadContext.Provider>
  );
};
