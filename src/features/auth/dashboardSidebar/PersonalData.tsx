import { useNavigate } from 'react-router-dom';
import { useUser } from '../useUser';

const PersonalData = () => {
  const { isAuthenticated, isPending } = useUser();
  const navigate = useNavigate();

  if (!isAuthenticated) navigate('/');
  if (isPending) return null;
  return <div>Personal data</div>;
};

export default PersonalData;
