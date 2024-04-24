import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useFetch from '@/app/utils/hooks/useFetch';

export default function VerifyEmailSuccessPage() {
  const router = useRouter();
  const { token } = router.query;
  const [verificationMessage, setVerificationMessage] = useState('');
  const API_URL = token ? `/api/v1/auth/verify-email?token=${token}` : null;
  const { data, loading, error } = useFetch(API_URL);

  useEffect(() => {
    if (error) {
      console.error('Email verification failed', error);
      setVerificationMessage('Invalid token or email verification link has expired.');
    } else if (data && data.success) {
      setVerificationMessage(data.message || 'Email verified successfully');
    } else if (data) {
      setVerificationMessage(data.message || 'Invalid token or email verification link has expired.');
    }
  }, [data, error]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {verificationMessage && <p>{verificationMessage}</p>}
    </div>
  );
}
