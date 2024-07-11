import { CopyrightIcon } from '@/ui/svgs/icons';
import { Link } from 'react-router-dom';

export const FooterBottom = () => {
  return (
    <div className='flex items-start md:justify-between w-full flex-col md:flex-row gap-2'>
      <div className='inline-flex items-center gap-2 select-none md:order-1 order-2'>
        <CopyrightIcon /> {new Date().getFullYear()} Tech Heim
      </div>
      <ul className='lg:gap-12 gap-4 md:order-2 sm:flex hidden'>
        <li>
          <Link to='/' className='hover:text-neutral-gray-200'>
            Cookie settings
          </Link>
        </li>
        <li>
          <Link to='/' className='hover:text-neutral-gray-200'>
            Privacy and Policy
          </Link>
        </li>
        <li>
          <Link to='/' className='hover:text-neutral-gray-200'>
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link to='/' className='hover:text-neutral-gray-200'>
            Imprint
          </Link>
        </li>
      </ul>
    </div>
  );
};
