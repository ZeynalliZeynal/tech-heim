import { Link } from 'react-router-dom';
import Container from '../../ui/Container';
import { FOOTER_LINKS } from '../../utils/variables';
import { UserIcon } from '../../ui/svgs/icons';
import { LuChevronRight } from 'react-icons/lu';
import { ADMIN_INFO } from '../../data/adminInfo';

const Footer = () => {
  return (
    <footer className='bg-primary-900'>
      <Container>
        <div className='grid grid-cols-[7fr_5fr] w-full py-12 text-white'>
          <div className='flex'>
            <ul className='items-stretch w-full gap-[100px] justify-start'>
              {FOOTER_LINKS.map((item) => (
                <li className='gap-2 flex-col items-start'>
                  <h6>{item.title}</h6>
                  <ul className='flex-col gap-2 text-neutral-gray-400 text-body-md items-start'>
                    {item.list.map((l) => (
                      <li>
                        <Link to={l.link} className='hover:underline gap-1'>
                          {l.context}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-7'>
            <h6>Sign up for news and updates</h6>
            <div className='h-12 rounded-md border-2 border-white w-[300px] px-3 flex items-center'>
              <div className='flex gap-2'>
                <UserIcon />
                <span className='h-6'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='E-mail Address'
                  />
                </span>
                <span className='size-6'>
                  <LuChevronRight />
                </span>
              </div>
            </div>
            <ul>
              {ADMIN_INFO.socials.map((s, i) => (
                <Link to={s.link} key={i} title={s.name}>
                  <span className='size-8'>{s.icon}</span>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
