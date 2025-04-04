import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const useAutoLogout = (logoutTime = 600000) => {
  const router = useRouter();
  const timeoutIdRef = useRef(null);
  const logout = () => {
    Cookies.remove('access_token');
    if (router.pathname.startsWith('/enterprise/kotak')) {
      router.push('/enterprise/kotak/login');
    } else if (router.pathname.startsWith('/enterprise/federal')) {
      router.push('/enterprise/federal/login');
    } else {
      router.push('/login');
    }
  };
  const resetTimer = () => {
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(logout, logoutTime);
  };
  useEffect(() => {
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart'];
    events.forEach(event => window.addEventListener(event, resetTimer));
    resetTimer();
    return () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
      events.forEach(event => window.removeEventListener(event, resetTimer));
    };
  }, [logoutTime]);
  return resetTimer;
};

export default useAutoLogout;
