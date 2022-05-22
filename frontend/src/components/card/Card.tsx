import { FC } from 'react';
import Animal from 'models/Animal';
import Checkbox from 'components/form/checkbox/Checkbox';

type Props = {
  animal: Animal;
  selected: boolean;
  onSelect(name: string): void;
};

const Card: FC<Props> = ({ animal, selected, onSelect }) => {
  const { id, image, name, breed } = animal;

  return (
    <div
      className={`border-b p-4 flex items-center ${
        selected ? 'bg-accent-100' : 'bg-white'
      }`}>
      <img
        src={image}
        className='rounded-full h-16 my-0 mr-4'
      />
      <div className='flex-[3] md:flex-[10]'>
        <p className='m-0 font-semibold'>{name}</p>
        <span className='text-sm text-secondary-300'>Breed: </span>
        <span className='text-sm italic text-secondary-300'>{breed}</span>
      </div>
      <div className='flex flex-1'>
        <button className='hover:text-primary-300 mr-2'>
          <span className='material-icons-outlined'>edit</span>
        </button>
        <div className='w-5'>
          <Checkbox
            id={String(id)}
            value={selected}
            onChange={() => onSelect(name)}
          />
        </div>
        <button className='hover:text-primary-300 md:inline-flex ml-2'>
          <span className='material-icons-outlined'>navigate_next</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
