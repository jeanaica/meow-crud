import { ChangeEvent, FC, MouseEvent } from 'react';
import Animal from 'models/Animal';
import Checkbox from 'components/form/checkbox/Checkbox';

type Props = {
  animal: Animal;
  selected: boolean;
  onSelect(id: string): void;
  onClick(): void;
};

const Card: FC<Props> = ({ animal, selected, onSelect, onClick }) => {
  const { id, image, name, breed } = animal;

  const handleClick = () => {
    onClick();
  };

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    onSelect(String(id));
  };

  return (
    <div
      className={`border-b p-4 flex items-center ${
        selected ? 'bg-accent-100' : 'bg-white'
      }`}>
      <div
        className='flex flex-[3] md:flex-[10]'
        role='button'
        onClick={handleClick}>
        <img
          src={image}
          className='rounded-full h-16 my-0 mr-4'
        />
        <div>
          <p className='m-0 font-semibold'>{name}</p>
          <span className='text-sm text-secondary-300'>Breed: </span>
          <span className='text-sm italic text-secondary-300'>{breed}</span>
        </div>
      </div>
      <div className='flex flex-1'>
        <button className='hover:text-primary-300 mr-2'>
          <span className='material-icons-outlined'>edit</span>
        </button>
        <div className='w-5'>
          <Checkbox
            id={String(id)}
            value={selected}
            onChange={handleSelect}
          />
        </div>
        <button
          className='hover:text-primary-300 md:inline-flex ml-2'
          onClick={handleClick}>
          <span className='material-icons-outlined'>navigate_next</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
