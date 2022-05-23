import Alert from 'components/alert/Alert';
import Button from 'components/button/Button';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  useForm,
  SubmitHandler,
  FormProvider,
  useFormState,
} from 'react-hook-form';
import Input from 'components/form/input/Input';
import TextArea from 'components/form/textarea/TextArea';
import { useCatMutation } from '../mutations';
import Toggle from 'components/form/toggle/Toggle';
import Dropdown from 'components/form/select/Select';
import { useCatBreedsQuery } from '../queries';
import { useMemo } from 'react';

interface FormValues {
  name: string;
  owner: string;
  age: number;
  breed: string;
  image: string;
  description: string;
  active: boolean;
}

const REG_EXP = new RegExp(/^[0-9]*$/);

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  age: z.string().regex(REG_EXP).min(1, { message: 'Required' }).max(2),
  breed: z.string().min(1, { message: 'Required' }),
  description: z.string().min(1, { message: 'Required' }),
  owner: z.string().min(1, { message: 'Required' }),
  active: z.boolean({
    required_error: 'Active is required',
  }),
});

const Add = () => {
  const navigate = useNavigate();

  const { isLoading, mutate, isError } = useCatMutation();
  const { isFetching, data, isError: isBreedsError } = useCatBreedsQuery();

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const { handleSubmit, reset, control } = methods;

  const { isDirty } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    mutate(data, {
      onSuccess: () => {
        navigate('/', { replace: true });
        reset();
      },
      onError: () => {
        reset({}, { keepValues: true });
      },
    });
  };

  const options = useMemo(() => {
    return data?.map(opt => ({
      label: opt.name,
      value: opt.name,
    }));
  }, [data]);

  return (
    <div className='flex justify-center p-4 sm:p-6 flex-col items-center'>
      {isError && !isDirty && (
        <Alert message='Something went wrong. Please try again.' />
      )}
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-full sm:max-w-md rounded overflow-hidden sm:shadow-lg shadow-accent-500 p-4 flex flex-col lg:max-w-5xl lg:p-4'>
          <div className='self-end mb-4'>
            <Toggle
              label='Active'
              name='active'
            />
          </div>

          <Input
            label='Name'
            name='name'
          />
          <div className='flex flex-row gap-4'>
            <Input
              label='Age'
              name='age'
              type='number'
            />
          </div>
          <Dropdown
            label='Breed'
            name='breed'
            options={options}
            isLoading={isFetching}
            disabled={isBreedsError}
          />
          <Input
            label='Image'
            name='image'
          />
          <TextArea
            label='Description'
            name='description'
          />
          <Input
            label='Owner'
            name='owner'
          />

          <Button
            type='submit'
            large
            className='mt-4'
            isLoading={isLoading || isFetching || isBreedsError}
            disabled={isLoading || isFetching || isBreedsError}>
            Submit
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Add;
