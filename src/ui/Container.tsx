import { ReactNode } from 'react';

const Container = ({ children }: { children?: ReactNode }) => {
  return <div className='container h-full flex items-center'>{children}</div>;
};

export default Container;
