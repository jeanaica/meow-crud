import Switch from 'components/form/switch/Switch';
import Search from 'components/search/Search';
import { Dispatch, FC, SetStateAction } from 'react';
import Checkbox from 'components/form/checkbox/Checkbox';
import Button from 'components/button/Button';

type Props = {
  searchString: string;
  active: boolean;
  selectedAll: boolean;
  onSearch: Dispatch<SetStateAction<string>>;
  onActive: Dispatch<SetStateAction<boolean>>;
  onSelectAll(): void;
};

const Header: FC<Props> = ({
  searchString,
  active,
  selectedAll,
  onSearch,
  onActive,
  onSelectAll,
}) => {
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
          <span className='font-semibold text-sm mb-4'>Bulk Actions</span>
          <div className='sm:ml-8'>
            <Button
              outlined
              onClick={() => console.log('clicked')}>
              <span className='material-icons-outlined mr-2'>delete</span>
              Delete
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
