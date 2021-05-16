export interface AlertOption {
  visible: boolean;
  title?: string;
  message?: string;
  onClickOK?: () => void;
}

export const defaultAlertOption: AlertOption = {
  visible: false,
  title: '',
  message: '',
};
