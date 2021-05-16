import React, { useContext, useMemo } from 'react';
import DefaultContext, { AlertI, ContextI } from './Context';

const useAlert = (Context?: React.Context<ContextI>): AlertI => {
  const context = useContext(Context || DefaultContext);
  const Alert = useMemo(() => {
    return context.Alert;
  }, [context]);
  return Alert;
};

export default useAlert;
