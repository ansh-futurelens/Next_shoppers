// pages/signup.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useFetch } from '@/app/redux/api';
import Cookies from 'js-cookie';

export default function SignupPage() {
  const router = useRouter();
  const { signup, loading, error } = useFetch(); // Destructure loading and error states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signup({ email, password, firstName, lastName });
      // Set token in cookies if needed
      data?.token && Cookies.set('shoppersToken', data.token);
      router.push('/');
    } catch (error) {
      // Handle errors
      console.error('Signup failed', error);
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
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        required
      />
      <button type="submit" disabled={loading}>
        {' '}
        {/* Disable button during loading */}
        {loading ? 'Signing up...' : 'Sign Up'} {/* Show loading text */}
      </button>
      {error && <div>Error: {error.message}</div>}{' '}
      {/* Show error message if there's an error */}
    </form>
  );
}
