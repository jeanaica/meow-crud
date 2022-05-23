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
      className={classNames('flex items-center', {
        'cursor-pointer': !readOnly,
        'cursor-not-allowed': readOnly,
      })}>
      <div className='relative'>
        <input
          id={id}
          type='checkbox'
          className='sr-only'
          checked={value}
          onChange={handleToggle}
        />
        <div className='block w-14 h-8 bg-primary-400 rounded-full'></div>
        <div
          className={classNames(
            'dot absolute left-1 top-1 w-6 h-6 rounded-full transition',
            {
              'bg-accent-100': !value,
              'bg-accent translate-x-full': value,
              'cursor-not-allowed': readOnly,
            }
          )}></div>
      </div>
      <div className='ml-3 font-medium'>{label}</div>
    </label>
  );
};

export default Switch;
