import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const usePreventBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const preventNavigation = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    const handlePopState = () => {
      navigate('/app', { replace: true });
    };

    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('beforeunload', preventNavigation);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', preventNavigation);
    };
  }, [navigate]);
};

export default usePreventBack;