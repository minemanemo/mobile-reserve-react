import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import Context, { AlertParam, ContextI, defaultContext } from './Context';
import { defaultAlertOption } from './option';
import { Black } from './StyledComponents';
import Alert from './Alert';

interface PropsI {
  children: React.ReactNode;
}

const Provider: React.FC<PropsI> = ({ children = <></> }: PropsI) => {
  const rootAlert = useRef<HTMLDivElement>(document.createElement('div'));

  const context = useRef<ContextI>(defaultContext);

  const [AlertOption, setAlertOption] = useState(defaultAlertOption);

  useEffect(() => {
    rootAlert.current.id = '__react-Alert__';
    document.body.appendChild(rootAlert.current);

    return () => {
      if (rootAlert.current) document.body.removeChild(rootAlert.current);
    };
  }, []);

  const updateAlertOption = (...rest: AlertParam) => {
    if (rest.length === 1) {
      const [message] = rest;
      setAlertOption({ visible: true, message });
    } else if (rest.length === 2) {
      const [title, message] = rest;
      setAlertOption({ visible: true, title, message });
    } else if (rest.length === 3) {
      const [title, message, onClickOK] = rest;
      setAlertOption({ visible: true, title, message, onClickOK });
    }
  };

  context.current = {
    Alert: {
      open: (...rest: AlertParam) => updateAlertOption(...rest),
      close: () => setAlertOption(defaultAlertOption),
    },
  };

  const { current } = context;

  const AlertModal = useMemo(
    () =>
      createPortal(
        AlertOption.visible && (
          <Black>
            <Alert
              title={AlertOption.title}
              message={AlertOption.message}
              onClickButton={AlertOption.onClickOK}
              onClose={current.Alert.close}
            />
          </Black>
        ),
        rootAlert.current,
      ),
    [AlertOption],
  );

  return (
    <Context.Provider value={current}>
      {children}
      {rootAlert.current && AlertModal}
    </Context.Provider>
  );
};

export default Provider;
