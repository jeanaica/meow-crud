import classNames from 'classnames';
import { Dispatch, SetStateAction, FC } from 'react';

type Props = {
  label: string;
  id: string;
  value?: boolean;
  readOnly?: boolean;
  onChange?: Dispatch<SetStateAction<boolean>>;
};

const Switch: FC<Props> = ({ id, label, value, readOnly, onChange }) => {
  const handleToggle = () => {
    if (onChange) {
      onChange(!value);
    }
  };

  return (
    <label
      htmlFor={id}
      className={classNames('flex flex-col items-center ml-3', {
        'cursor-pointer': !readOnly,
        'cursor-not-allowed': readOnly,
      })}>
      <div className='text-sm font-medium'>{label}</div>
      <div className='relative'>
        <input
          id={id}
          type='checkbox'
          className='sr-only'
          checked={value}
          onChange={handleToggle}
        />
        <div className='block w-14 h-8 bg-slate-300 rounded-full'></div>
        <div
          className={classNames(
            'dot absolute left-1 top-1 w-6 h-6 rounded-full transition',
            {
              'bg-accent-100': !value,
              'bg-green-500 translate-x-full': value,
              'cursor-not-allowed': readOnly,
            }
          )}></div>
      </div>
    </label>
  );
};

export default Switch;
