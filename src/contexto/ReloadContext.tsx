import React, { createContext, useState, ReactNode } from 'react';
import { ReloadContextType } from '../types';
import { ReloadProviderProps } from '../types';

interface ContextState {
  typeContext: ReloadContextType,
  typeProps: ReloadProviderProps
}

// Valor por defecto del contexto
const defaultContext: ContextState['typeContext'] = {
  reload: false,
  triggerReload: () => {},
};

// Crear el contexto con el valor por defecto
export const ReloadContext = createContext<ReloadContextType>(defaultContext);

// Proveedor
export const ReloadProvider = ({ children }: ContextState['typeProps']) => {
  const [reload, setReload] = useState(false);

  const triggerReload = () => {
    setReload(prev => !prev);
  };

  return (
    <ReloadContext.Provider value={{ reload, triggerReload }}>
      {children}
    </ReloadContext.Provider>
  );
};
