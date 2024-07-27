import { useUser } from '@/features/auth/useUser.ts';
import { DASHBOARD_LINKS } from '@/utils/variables.tsx';
import { Link, NavLink } from 'react-router-dom';
import { DefaultUserIcon } from '@/ui/svgs/icons/userIcons.tsx';
import { ExportIcon } from '@/ui/svgs/icons/arrowIcons.tsx';

const Sidebar = () => {
  const { user } = useUser();

  return (
    <aside className='min-w-[300px] text-black text-body-xl bg-neutral-gray-200 rounded-l-xl overflow-y-auto max-h-[700px]'>
      <div className='flex flex-col'>
        <header className='flex gap-2 items-center p-2'>
          {user?.user_metadata.avatar ? (
            <Link
              to={user?.user_metadata.avatar}
              target='_blank'
              className='relative group size-14 rounded-lg overflow-hidden'
            >
              <img
                src={user?.user_metadata.avatar}
                alt={user?.user_metadata.fullName}
              />
              <span className='absolute inset-0 text-white bg-white/30 inline-flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition'>
                <span className='size-6 relative z-20'>
                  <ExportIcon />
                </span>
              </span>
            </Link>
          ) : (
            <span className='size-14'>
              <DefaultUserIcon />
            </span>
          )}
          <div>
            <p className='font-medium'>{user?.user_metadata.fullName}</p>
            <p className='text-body-md'>{user?.email}</p>
          </div>
        </header>
        <ul className='flex-col'>
          {DASHBOARD_LINKS.map((link, i) => (
            <li key={i} className='w-full'>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? 'p-6 gap-6 w-full justify-start hover:text-primary hover:bg-primary-25 text-primary border-l border-primary'
                    : 'p-6 gap-6 w-full justify-start hover:text-primary hover:bg-primary-25'
                }
              >
                <span className='size-6'>{link.icon}</span> {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
