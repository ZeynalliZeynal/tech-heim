import classNames from 'classnames';
import { EyeIcon, EyeSlashIcon } from '@/ui/svgs/icons/securityIcons';
import { ReactElement, ReactNode } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { EditIcon } from '../svgs/icons/contentIcons';

const InputBox = ({
  label,
  type,
  icon,
  error,
  togglePassword,
  showPassword,
  disabled,
  edit = false,

  children,
}: {
  label: string;
  type?: 'login' | 'signup';
  icon: ReactNode;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
  togglePassword?: () => void;
  showPassword?: boolean;
  disabled?: boolean;
  edit?: boolean;

  children: ReactElement;
}) => {
  return (
    <div className='flex flex-col gap-3'>
      <div
        className={classNames(
          'grid items-center grid-cols-[24px_1fr_24px] gap-2 border p-3 rounded-md transition-all duration-300 group focus-within:border-primary',
          {
            'border-error text-error': error,
            'border-neutral-gray-500 text-neutral-gray-500': !error,
            'bg-neutral-gray-200 animate-pulse': disabled,
          }
        )}
      >
        <span className='size-6 group-focus-within:text-primary'>{icon}</span>
        <span
          id='default-input'
          className='relative group-focus-within:text-primary'
        >
          {children}{' '}
          <span
            className={classNames('capitalize', {
              'bg-white': !disabled,
              'bg-neutral-gray-200 animate-pulse': disabled,
            })}
          >
            {label}
          </span>
        </span>{' '}
        {label === 'password' && (
          <button
            type='button'
            className='transition-none group-focus-within:text-primary transition-all'
            onClick={togglePassword}
          >
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </button>
        )}
        {edit && (
          <span className='size-6 group-focus-within:text-primary'>
            <EditIcon />
          </span>
        )}
      </div>
      {error && <div className='text-body-xs text-error'>{String(error)}</div>}{' '}
      {type === 'login' && label === 'password' && (
        <Link
          to='/'
          className='text-body-md self-end text-primary hover:underline'
        >
          Forgot password?
        </Link>
      )}
    </div>
  );
};

export default InputBox;
