import { Link } from 'react-router-dom';

import BurgerButton from '../../../features/categories/BurgerButton';
import Logo from '@/ui/svgs/logo';
import { ADMIN_INFO } from '@/data/adminInfo';
import NavList from './NavList';
import NavRight from './NavRight';

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between'>
      <BurgerButton />
      <Link to='/'>
        <span className='md:inline-flex hidden'>
          <Logo />
        </span>
        <h1 className='md:hidden text-primary-400 text-h4'>
          {ADMIN_INFO.title}
        </h1>
      </Link>

      <NavList />
      <NavRight />
    </nav>
  );
};

export default Navbar;
