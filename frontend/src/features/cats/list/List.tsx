import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from 'components/card/Card';
import { useCatsQuery } from '../queries';
import Header from './Header';
import Loading from 'components/loading/Loading';
import { useCatsDeleteMutation } from '../mutations';
import Alert from 'components/alert/Alert';

const List: FC = () => {
  const [searchString, setSearchString] = useState('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<Array<string>>([]);

  const navigate = useNavigate();

  const { isFetching, data, isError, refetch } = useCatsQuery({
    name: searchString,
    active: isActive,
  });

  const {
    isLoading: isDeletingCats,
    mutateAsync,
    isError: isDeletingError,
  } = useCatsDeleteMutation();

  const handleSelect = (id: string) => {
    let newSelected: Array<string> = selected.slice();

    if (selected.includes(id)) {
      newSelected = selected.filter(val => (val === id ? false : true));
    } else {
      newSelected.push(id);
    }

    setSelected(newSelected);
  };

  const handleSelectAll = () => {
    const newSelected: Array<string> = [];

    if (selected.length !== data?.length) {
      data?.forEach(val => newSelected.push(String(val.id)));
    }

    setSelected(newSelected);
  };

  const handleDeleteAll = async () => {
    await mutateAsync(selected);

    setSelected([]);

    refetch();
  };

  const hasError = isDeletingError || isError;

  const isLoading = isDeletingCats || isFetching;

  return (
    <div className='flex justify-center sm:p-6 flex-col'>
      <Header
        searchString={searchString}
        active={isActive}
        selectedAll={data?.length ? selected.length === data?.length : false}
        isLoading={isDeletingCats}
        onSearch={setSearchString}
        onActive={setIsActive}
        onSelectAll={handleSelectAll}
        onDeleteAll={handleDeleteAll}
      />

      <hr className='mt-0 mb-4' />

      {isLoading && (
        <div className='min-w-[320px] min-h-[400px] w-full flex justify-center items-center mt-8'>
          <Loading
            size='lg'
            type='page'
          />
        </div>
      )}
      {!isLoading && hasError && (
        <Alert message='Something went wrong. Please try again.' />
      )}
      {!isLoading &&
        !hasError &&
        data?.map(catData => (
          <Card
            key={catData.id}
            animal={catData}
            selected={selected.includes(String(catData.id))}
            onSelect={handleSelect}
            onClick={() => navigate(`${catData.id}`, { replace: true })}
          />
        ))}
    </div>
  );
};

export default List;
