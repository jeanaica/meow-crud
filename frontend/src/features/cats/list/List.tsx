import Card from 'components/card/Card';
import { FC, useState } from 'react';
import useCatsQuery from '../queries';
import Header from './Header';

const List: FC = () => {
  const [searchString, setSearchString] = useState('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<Array<string>>([]);

  const { data } = useCatsQuery({
    name: searchString,
    active: isActive,
  });

  const handleSelect = (name: string) => {
    let newSelected: Array<string> = selected.slice();

    if (selected.includes(name)) {
      newSelected = selected.filter(val => (val === name ? false : true));
    } else {
      newSelected.push(name);
    }

    setSelected(newSelected);
  };

  const handleSelectAll = () => {
    const newSelected: Array<string> = [];

    if (selected.length !== data?.length) {
      data?.forEach(val => newSelected.push(val.name));
    }

    setSelected(newSelected);
  };

  return (
    <div className='flex justify-center sm:p-6 flex-col'>
      <Header
        searchString={searchString}
        active={isActive}
        selectedAll={selected.length === data?.length}
        onSearch={setSearchString}
        onActive={setIsActive}
        onSelectAll={handleSelectAll}
      />

      <hr className='mt-0 mb-4' />
      {data?.map(catData => (
        <Card
          key={catData.id}
          animal={catData}
          selected={selected.includes(catData.name)}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default List;
