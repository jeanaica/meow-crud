import classNames from 'classnames';
import { Dispatch, SetStateAction, FC } from 'react';

type Props = {
  id: string;
  value: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
};

const Checkbox: FC<Props> = ({ id, value, onChange }) => {
  const handleToggle = () => {
    onChange(!value);
  };

  return (
    <div className='relative'>
      <input
        id={id}
        data-testid={`${id}-checkbox-input`}
        type='checkbox'
        className='sr-only'
        checked={value}
        onChange={handleToggle}
      />
      <label
        htmlFor={id}
        data-testid={`${id}-checkbox-label`}
        className={classNames(
          'rounded-full cursor-pointer border-solid absolute h-5 w-5 inset-0 after:border-2 after:border-t-0 after:border-r-0 after:absolute after:border-primary-100 after:inset-x-[4px] after:inset-y-[6px] after:w-[12px] after:h-[6px] after:-rotate-45',
          {
            'bg-accent-400 after:opacity-1': value,
            'bg-accent after:opacity-0': !value,
          }
        )}></label>
    </div>
  );
};

export default Checkbox;
