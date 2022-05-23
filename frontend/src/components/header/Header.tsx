import Button from 'components/button/Button';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='flex bg-accent drop-shadow-md p-4 text-right md:text-center'>
      <Button
        icon
        onClick={() => navigate(-1)}
        className='mr-4'>
        <span className='material-icons-outlined'>arrow_back</span>
      </Button>
      <h1 className='mb-0 flex-[4]'>Cat Directory</h1>
    </div>
  );
};

export default Header;
