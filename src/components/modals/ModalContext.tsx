import { useMemo, useState, useContext, createContext } from 'react';
import { ModalContextProps } from './types';

const initialState: ModalContextProps = {
  page: 0,
  setPage: () => {},
};

export const ModalContext = createContext(initialState);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error('useModalContext must be use inside ModalProvider');

  return context;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

export function ModalProvider({ children }: ModalProviderProps) {
  const [page, setPage] = useState(0);

  const memoizedValue = useMemo(
    () => ({
      page,
      setPage,
    }),
    [page, setPage]
  );

  return <ModalContext.Provider value={memoizedValue}>{children}</ModalContext.Provider>;
}
