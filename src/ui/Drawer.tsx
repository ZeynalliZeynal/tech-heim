import { ReactNode, useEffect, useRef } from 'react';
import WindowComponent from './WindowComponent.tsx';
import { useWindowComponentContext } from '../hooks/useWindowComponentContext.ts';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

const Drawer = ({ children }: { children: ReactNode }) => {
  return <WindowComponent type='drawer'>{children}</WindowComponent>;
};

const Body = ({ children, name }: { name: string; children: ReactNode }) => {
  const { isAnimating, close } = useWindowComponentContext();
  const ref = useRef<HTMLDivElement | null>(null);

  const { pathname } = useLocation();
  useEffect(() => {
    close();
  }, [pathname]);

  return (
    <WindowComponent.Window name={name} zIndex={1000}>
      <div
        id='drawer'
        ref={ref}
        className={classNames(
          'rounded-r-md w-[300px] p-4 bg-white text-neutral-gray-dark transition overflow-auto',
          {
            'animate-slideRight': !isAnimating,
            'animate-slideLeft': isAnimating,
          }
        )}
      >
        <div className='flex flex-col gap-6'>{children}</div>
      </div>
    </WindowComponent.Window>
  );
};

Drawer.Open = WindowComponent.Toggle;
Drawer.Head = WindowComponent.Head;
Drawer.Body = Body;
export default Drawer;
