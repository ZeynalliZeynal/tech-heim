import { useUser } from '@/features/auth/useUser.ts';
import { DASHBOARD_LINKS } from '@/utils/variables.tsx';
import { NavLink } from 'react-router-dom';
import { DefaultUserIcon } from '@/ui/svgs/icons/userIcons.tsx';

const Sidebar = () => {
  const { user, isPending } = useUser();

  return (
    <aside className='w-[300px] text-black text-body-xl bg-neutral-gray-200 rounded-l-xl'>
      <div className='flex flex-col'>
        <header className='flex gap-4 items-center p-2'>
          <div className='size-16'>
            {user?.user_metadata.avatar ? (
              <img
                src={user?.user_metadata.avatar}
                alt={user?.user_metadata.fullName}
              />
            ) : (
              <DefaultUserIcon />
            )}
          </div>
          <p className='font-medium'>{user?.user_metadata.fullName}</p>
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
