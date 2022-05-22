import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

type Props = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

const Search: FC<Props> = ({ value, onChange }) => {
  const [searchString, setSearchString] = useState(value);

  const onSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => onChange(searchString), 600);
    return () => {
      clearTimeout(timer);
    };
  }, [searchString]);

  return (
    <label className='relative block'>
      <span className='sr-only'>Search</span>
      <span className='material-icons-outlined absolute inset-y-3 md:inset-y-2 left-0 flex items-center pl-2'>
        search
      </span>
      <input
        className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border-b border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm'
        value={searchString}
        onChange={onSetSearch}
        placeholder='Search by Name...'
        type='text'
        name='search'
      />
    </label>
  );
};

export default Search;
