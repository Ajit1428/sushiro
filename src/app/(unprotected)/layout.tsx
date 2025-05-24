'use client'

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function UnprotectedLayout({children}: {children: ReactNode}){
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userInfo, setUserInfo] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userDetails');
    if (storedUserInfo) {
      try {
        const parsedUserInfo = JSON.parse(storedUserInfo);
        setUserInfo(parsedUserInfo);
        if (parsedUserInfo.email) {
          router.push('/');
        }
      } catch (error) {
        console.error('Error parsing userInfo from localStorage:', error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{userInfo?.email ? <></> : <>{children}</>}</div>;
}