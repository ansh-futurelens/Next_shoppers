import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
export default function VerifyEmailSuccessPage() {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    const verifyEmail = async () => {
      if (token) {
        const API_URL = `/api/v1/auth/verify-email?token=${token}`;
        try {
          const response = await axios.get(API_URL);
          const data = response.data;
        } catch (error) {
          console.log(error)
        }
      }
    };

    verifyEmail();
  }, [token]);
  return (
    <div>
      <p>Email verified successfully</p>
    </div>
  );
}
