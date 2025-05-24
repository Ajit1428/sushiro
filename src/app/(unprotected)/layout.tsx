'use client'

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie';

export default function UnprotectedLayout({children}: {children: ReactNode}){
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userInfo, setUserInfo] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Check both cookie and localStorage
    const cookieUserInfo = Cookies.get('userInfo');
    const storedUserInfo = localStorage.getItem('userInfo');
    
    try {
      const userInfo = cookieUserInfo || storedUserInfo;
      if (userInfo) {
        const parsedUserInfo = JSON.parse(userInfo);
        setUserInfo(parsedUserInfo);
        if (parsedUserInfo.email) {
          router.push('/');
        }
      }
    } catch (error) {
      console.error('Error parsing userInfo:', error);
      // Clear invalid data
      Cookies.remove('userInfo');
      localStorage.removeItem('userInfo');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{userInfo?.email ? <></> : <>{children}</>}</div>;
}