// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useFetch } from '@/app/redux/api';

export default function LoginPage() {
  const router = useRouter();
  const { login, loading, error } = useFetch(); // Destructure loading and error states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({ email, password });
      // Set token in cookies
      data?.token && Cookies.set('shoppersToken', data.token);
      router.push('/');
    } catch (error) {
      // Handle errors
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={loading}>
        {' '}
        {/* Disable button during loading */}
        {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
      </button>
      <div>
        <p>
          Don&apos;t have an account?{' '}
          <Link href="/signup">
            <span>Sign Up</span>
          </Link>
        </p>
      </div>
      {error && <div>Error: {error.message}</div>}{' '}
      {/* Show error message if there's an error */}
    </form>
  );
}
