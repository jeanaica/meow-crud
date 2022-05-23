import Alert from 'components/alert/Alert';
import Button from 'components/button/Button';
import Loading from 'components/loading/Loading';
import Switch from 'components/switch/Switch';
import { useNavigate, useParams } from 'react-router-dom';
import { useCatDeleteMutation } from '../mutations';
import { useCatQuery } from '../queries';

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    isLoading: isDeletingCat,
    mutate,
    isError: isDeletingError,
  } = useCatDeleteMutation(id);

  const { isFetching, data, isError } = useCatQuery({
    id,
  });

  const handleDeleteCat = () => {
    mutate(undefined, {
      onSuccess: () => navigate('/', { replace: true }),
    });
  };

  const hasError = isDeletingError || isError;

  const isLoading = isDeletingCat || isFetching;

  return (
    <div className='flex justify-center sm:p-6 flex-col items-center'>
      <div className='w-full sm:max-w-md rounded overflow-hidden sm:shadow-lg shadow-accent-500 lg:flex lg:max-w-5xl lg:p-8'>
        {isLoading && (
          <div className='min-w-[320px] min-h-[400px] w-full flex justify-center items-center mt-8'>
            <Loading
              size='lg'
              type='page'
            />
          </div>
        )}
        {!isLoading && (
          <>
            <img
              className='w-full sm:max-w-md'
              src={data?.image || `${process.env.PUBLIC_URL}/default.jpeg`}
              alt={data?.name}
            />
            <div className='flex flex-col px-6 w-full sm:max-w-lg lg:pl-8 lg:pr-0'>
              <div className='flex justify-end pb-4'>
                <Button
                  outlined
                  className='mr-4'
                  onClick={handleDeleteCat}
                  disabled={isLoading}
                  isLoading={isLoading}>
                  <span className='material-icons-outlined'>delete</span>
                  DELETE
                </Button>
                <Button
                  outlined
                  onClick={() => navigate('edit', { replace: true })}>
                  <span className='material-icons-outlined'>edit</span>
                  EDIT
                </Button>
              </div>
              {hasError && (
                <Alert message='Something went wrong. Please try again.' />
              )}

              <div className='flex justify-between p-4'>
                <div className='flex flex-col'>
                  <div className='font-semibold text-xl mb-2'>{data?.name}</div>
                  <div className='font-semibold text-secondary-300 italic text-md mb-2'>
                    {`${data?.age}, ${data?.breed}`}
                  </div>
                </div>

                <Switch
                  id='active'
                  label='Active'
                  value={data?.active}
                  readOnly
                />
              </div>
              <div className='flex border-b p-4 items-center'>
                <span className='flex-1 text-secondary-300 text-sm italic font-semibold mr-4'>
                  description:
                </span>
                <p className='flex-[2] text-primary-700 text-base text-justify'>
                  {data?.description}
                </p>
              </div>
              <div className='flex border-b p-4 items-end mb-8'>
                <span className='flex-1 text-secondary-300 text-sm italic font-semibold mr-4'>
                  owner:
                </span>
                <span className='flex-[2] text-primary-700  text-base'>
                  {data?.owner}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default View;
