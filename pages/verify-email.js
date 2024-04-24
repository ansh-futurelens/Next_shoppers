// pages/verify-email.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useFetch } from '@/app/redux/api';

export default function VerifyEmailSuccessPage() {
  const router = useRouter();
  const { verifyEmail } = useFetch();
  const [verificationMessage, setVerificationMessage] = useState('');
  const { token } = router.query;

  useEffect(() => {
    const verifyEmailToken = async () => {
      if (token) {
        try {
          const data = await verifyEmail(token);
          if (data && data.success) {
            setVerificationMessage(
              data.message || 'Email verified successfully',
            );
          } else {
            setVerificationMessage(
              data.message ||
                'Invalid token or email verification link has expired.',
            );
          }
        } catch (error) {
          // Error handling
          console.error('Email verification failed', error);
          setVerificationMessage(
            'Invalid token or email verification link has expired.',
          );
        }
      } else {
        console.error('Token not provided');
        setVerificationMessage('Token not provided');
      }
    };

    verifyEmailToken();
  }, [token]); // Only trigger useEffect when token changes

  return (
    <div>
      <p>{verificationMessage}</p>
    </div>
  );
}
