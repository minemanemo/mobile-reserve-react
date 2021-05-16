import { createContext } from 'react';

export type AlertParam =
  | [string]
  | [string, string]
  | [string, string, () => void];

export interface AlertI {
  open: (...rest: AlertParam) => void;
  close: () => void;
}

export interface ContextI {
  Alert: AlertI;
}

export const defaultContext = {
  Alert: {
    open: (...rest: AlertParam): void => console.log(rest),
    close: (): void => console.log('close Alert'),
  },
};

const Context = createContext<ContextI>(defaultContext);

export default Context;
