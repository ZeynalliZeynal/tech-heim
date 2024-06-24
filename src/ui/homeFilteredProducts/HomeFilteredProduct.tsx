import { Link } from 'react-router-dom';
import { HiStar } from 'react-icons/hi2';
import { motion } from 'framer-motion';

import { formatCurrency } from '../../helpers/converters.ts';
import Button from '../Button.tsx';
import { useProductDetails } from '../../hooks/useProductDetails.ts';
import { useState } from 'react';
import { AddToCartIcon } from '../svgs/icons.tsx';
import { CiHeart } from 'react-icons/ci';

const HomeFilteredProduct = ({ product }: { product: any }) => {
  const { detail, brand, colors, isPending } = useProductDetails(product.id);
  const [isHovering, setIsHovering] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState(-1);

  const handleMouseLeave = () => {
    setTooltipIndex(-1);
  };

  const handleMouseEnter = (i: number) => {
    setTooltipIndex(i);
  };

  return (
    <div className='w-[300px]'>
      <Link
        to='/'
        className='h-[370px] rounded-md shadow-sm hover:shadow-md w-full p-4 justify-between items-start flex-col group relative'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className='flex flex-col'>
          <div className='h-[200px] self-center'>
            <img
              src={detail?.img_url}
              alt={(brand?.name + detail?.model).toString()}
            />
          </div>
          <div className='w-full h-[1px] bg-gradient-to-r from-neutral-gray-100 group-hover:from-primary-25 via-black group-hover:via-primary to-neutral-gray-100 group-hover:to-primary-25 rounded-[50%] my-4' />
          <h6 className='line-clamp-2 group-hover:text-primary-500'>
            <button className='font-semibold inline-flex'>{brand?.name}</button>
            , {detail?.model}
          </h6>
        </div>

        <div className='flex flex-col gap-2 absolute right-4 top-1/3 -translate-y-1/3'>
          {colors?.map((color, i) => (
            <div
              key={color.id}
              className={
                'size-3 border rounded-full border-neutral-gray-900 relative'
              }
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => handleMouseEnter(i)}
              style={{
                background: color.hex_code,
              }}
            >
              {tooltipIndex === i && (
                <div className='absolute top-1/2 -translate-y-1/2 left-full text-body-sm w-max bg-white z-50 px-2 py-1.5 rounded-md border'>
                  {color.name}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='flex flex-col absolute top-2 left-0 text-body-sm gap-2'>
          <span className='inline-flex justify-center bg-secondary-100 text-secondary rounded-tr-md rounded-br-md w-[42px] py-1.5'>
            {product.discount_percent}%
          </span>
          <span className='inline-flex justify-center items-center gap-0.5 bg-primary-50 text-primary-500 rounded-tr-md rounded-br-md w-min py-1.5 px-1.5 font-bold'>
            <span className='size-3'>
              <HiStar />
            </span>{' '}
            {product.rating}
          </span>
        </div>
        <div className='flex flex-col h-12 w-full overflow-hidden'>
          <motion.div
            animate={isHovering ? 'active' : 'initial'}
            variants={{
              active: {
                y: '-100%',
              },
            }}
            initial={{
              y: 0,
            }}
            className='w-full flex justify-between items-center text-body-lg min-h-12'
          >
            <del className='text-neutral-gray-700'>
              {formatCurrency(product.price)}
            </del>
            {formatCurrency(product.price, product.discount_percent)}
          </motion.div>
          <motion.div
            animate={isHovering ? 'active' : 'initial'}
            variants={{
              active: {
                y: '-100%',
              },
            }}
            initial={{
              y: 0,
            }}
            className='min-h-12 flex items-center w-full justify-between'
          >
            <Button className='bg-white text-primary border border-solid border-primary w-[150px] hover:bg-primary hover:text-white rounded-md h-9'>
              <AddToCartIcon />
              Add to Cart
            </Button>
            <Button className='rounded-full size-9 p-1 text-primary'>
              <CiHeart />
            </Button>
          </motion.div>
        </div>
      </Link>
    </div>
  );
};

export default HomeFilteredProduct;
