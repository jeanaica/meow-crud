import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  type?: 'error' | 'info';
  message: string;
};

const Alert: FC<Props> = ({ type = 'error', message }) => {
  return (
    <div
      className={classNames('p-4', {
        'bg-error-100': type === 'error',
      })}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
