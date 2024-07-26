import { useNavigate } from 'react-router-dom';
import { useUser } from '../useUser';
import InputBox from '@/ui/form/InputBox';
import { UserIcon } from '@/ui/svgs/icons/userIcons';
import { useForm } from 'react-hook-form';
import { DirectIcon } from '@/ui/svgs/icons/emailIcons';
import { REGEX_PATTERNS } from '@/utils/constants';
import { CallIcon, CallingIcon } from '@/ui/svgs/icons/callIcons';
import { HouseIcon } from '@/ui/svgs/icons/buildingIcons';

const PersonalData = () => {
  const { user, isAuthenticated } = useUser();

  const { register, formState } = useForm();
  const { errors } = formState;

  const navigate = useNavigate();

  if (!isAuthenticated) navigate('/');

  return (
    <section className='p-6 text-neutral-gray-700'>
      <div className='space-y-2'>
        <h5 className='text-black'>Identification</h5>
        <p className='text-body-xl'>Verify your identity</p>
      </div>
      <form className='grid grid-cols-2 mt-6 gap-6'>
        <InputBox
          icon={<UserIcon />}
          label='Full Name'
          error={errors?.fullName?.message}
          edit
        >
          <input
            className='default-input'
            type='text'
            autoComplete='name'
            placeholder=''
            defaultValue={user?.user_metadata.fullName}
            {...register('fullName', {
              required: 'Full name is required',
            })}
          />
        </InputBox>
        <InputBox
          icon={<DirectIcon />}
          label='Email'
          error={errors?.email?.message}
          edit
        >
          <input
            className='default-input'
            type='email'
            autoComplete='email'
            placeholder=''
            defaultValue={user?.email}
            {...register('email', {
              required: 'email is required',
              pattern: {
                value: new RegExp(REGEX_PATTERNS.email),
                message: 'Please enter a valid email',
              },
            })}
          />
        </InputBox>
        <InputBox
          icon={<CallIcon />}
          label='Phone number'
          error={errors?.email?.message}
          edit
        >
          <input
            className='default-input'
            type='tel'
            autoComplete='tel'
            placeholder=''
            defaultValue={user?.phone}
            {...register('phone')}
          />
        </InputBox>
        <InputBox icon={<HouseIcon />} label='Address' edit>
          <input
            className='default-input'
            type='text'
            autoComplete='address-level1'
            placeholder=''
            defaultValue={user?.user_metadata.address}
            {...register('address')}
          />
        </InputBox>
      </form>
    </section>
  );
};

export default PersonalData;
