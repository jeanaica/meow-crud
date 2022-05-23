import Switch from 'components/form/switch/Switch';
import Search from 'components/search/Search';
import { Dispatch, FC, SetStateAction } from 'react';
import Checkbox from 'components/form/checkbox/Checkbox';
import Button from 'components/button/Button';
import { useNavigate } from 'react-router-dom';

type Props = {
  searchString: string;
  active: boolean;
  selectedAll: boolean;
  isLoading: boolean;
  onSearch: Dispatch<SetStateAction<string>>;
  onActive: Dispatch<SetStateAction<boolean>>;
  onSelectAll(): void;
  onDeleteAll(): void;
};

const Header: FC<Props> = ({
  searchString,
  active,
  selectedAll,
  isLoading,
  onSearch,
  onActive,
  onSelectAll,
  onDeleteAll,
}) => {
  const navigate = useNavigate();

  return (
    <div className='p-4 md:border rounded'>
      <div className='flex'>
        <Switch
          id='active'
          label='Active'
          value={active}
          onChange={onActive}
        />
        <div className='flex-1 ml-4 md:ml-12'>
          <Search
            value={searchString}
            onChange={onSearch}
          />
        </div>
      </div>
      <div className='flex pt-4 pl-4'>
        <div className='flex flex-col flex-[4] md:flex-[10]'>
          <span className='font-semibold text-sm mb-4'>Actions</span>
          <div className='sm:ml-8 flex '>
            <Button
              outlined
              onClick={() => navigate('add', { replace: true })}
              className='mr-4'>
              <span className='material-icons-outlined mr-2'>add</span>
              Add
            </Button>
            <Button
              outlined
              onClick={onDeleteAll}
              isLoading={isLoading}>
              <span className='material-icons-outlined mr-2'>delete</span>
              Delete Selected
            </Button>
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-center'>
          <span className='font-semibold text-sm mb-4'>Select All</span>
          <div className='flex ml-4'>
            <Checkbox
              id='all'
              value={selectedAll}
              onChange={onSelectAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
