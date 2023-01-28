import classNames from 'classnames';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  label: string;
  name: string;
};

const Toggle: FC<Props> = ({ name, label }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const fieldValue = watch(name);

  return (
    <label
      htmlFor={name}
      className='flex flex-col items-center cursor-pointer'>
      <div className='text-sm font-medium'>{label}</div>
      <div className='relative'>
        <input
          {...register(name)}
          id={name}
          name={name}
          type='checkbox'
          className='sr-only'
        />
        <div className='block w-14 h-8 bg-slate-300 rounded-full'></div>
        <div
          className={classNames(
            'dot absolute left-1 top-1 w-6 h-6 rounded-full transition',
            {
              'bg-accent-100': !fieldValue,
              'bg-green-500 translate-x-full': fieldValue,
            }
          )}></div>
      </div>
      {errors[name] && (
        <span className='text-sm text-error-500'>{errors[name].message}</span>
      )}
    </label>
  );
};

export default Toggle;
