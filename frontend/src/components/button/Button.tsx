import classNames from 'classnames';
import Loading from 'components/loading/Loading';
import { FC, ReactNode } from 'react';

type Props = {
  onClick(): void;
  outlined?: boolean;
  children?: ReactNode;
  large?: boolean;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
};
const Button: FC<Props> = ({
  onClick,
  type = 'button',
  outlined,
  large,
  children,
  className,
  disabled,
  isLoading,
}) => {
  return (
    <button
      type={type}
      className={classNames(
        'flex items-center rounded duration-300 font-semibold',
        className,
        {
          'px-8 py-2 text-xl bg-primary-500 text-primary-100 hover:bg-primary-600':
            !outlined,
          'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-primary-100':
            outlined,
          'px-2 py-1 text-sm': !large,
          'px-4 py-2 text-sm': large,
          'cursor-not-allowed opacity-50': disabled || isLoading,
        }
      )}
      onClick={onClick}
      disabled={disabled}>
      {isLoading && <Loading />}
      {children}
    </button>
  );
};

export default Button;
