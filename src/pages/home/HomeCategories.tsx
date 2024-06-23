import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

import { getDistinctSubcategories } from '../../services/apiGetters.ts';
import Container from '../../ui/Container.tsx';

const HomeCategories = () => {
  const { data: subcategories, isPending } = useQuery({
    queryKey: ['products/categories/subcategories'],
    queryFn: getDistinctSubcategories,
  });

  return (
    <section>
      <Container>
        <ul className='w-full flex-wrap justify-between'>
          {subcategories
            ?.slice(0, 6)
            .map(
              ({
                id,
                name,
                image,
              }: {
                id: number;
                name: string;
                image: string;
              }) =>
                isPending ? (
                  'Loading subcategories...'
                ) : (
                  <li key={id}>
                    <Link
                      to='/'
                      className='flex-col py-2 px-4 items-center shadow-sm font-light rounded-md gap-2 group'
                    >
                      <span className='size-[150px] overflow-hidden'>
                        <img
                          src={image}
                          alt={name}
                          className='grayscale-[0.3] transition duration-300 group-hover:scale-110 group-hover:grayscale-0'
                        />
                      </span>{' '}
                      <p>{name}</p>
                    </Link>
                  </li>
                )
            )}
        </ul>
      </Container>
    </section>
  );
};

export default HomeCategories;
