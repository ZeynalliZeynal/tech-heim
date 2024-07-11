import {
  ExpressCardIcon,
  MasterCardIcon,
  PaypalCardIcon,
  VisaCardIcon,
} from '@/ui/svgs/icons.tsx';

const FooterCards = () => {
  return (
    <ul className='justify-start gap-1'>
      <li className='mix-blend-luminosity'>
        <PaypalCardIcon />
      </li>
      <li className='mix-blend-luminosity'>
        <ExpressCardIcon />
      </li>
      <li className='mix-blend-luminosity'>
        <VisaCardIcon />
      </li>
      <li className='mix-blend-luminosity'>
        <MasterCardIcon />
      </li>
    </ul>
  );
};

export default FooterCards;
