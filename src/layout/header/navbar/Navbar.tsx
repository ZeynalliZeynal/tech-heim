import Logo from '../../../ui/svgs/logo';
import NavList from './NavList';
import NavRight from './NavRight';
import { Link } from 'react-router-dom';
import { ADMIN_INFO } from '../../../data/adminInfo';
import BurgerButton from './BurgerButton';

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
