// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useFetch } from '@/app/redux/api';
import MainLayout from '@/app/layouts/MainLayout';
import FormField from '@/app/components/FormField';
import useToast from '@/app/utils/hooks/useToast';

export default function LoginPage() {
  const router = useRouter();
  const { login, loading, error } = useFetch();
  const [email, setEmail] = useState('ansh@yopmail.com');
  const [password, setPassword] = useState('123');
  const { showToast } = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({ email, password });
      // Set token in cookies
      data?.token && Cookies.set('shoppersToken', data.token);
   
      showToast('Login successful');
      router.push('/');
    } catch (error) {
      // Handle errors
      console.error('Login failed', error);
      showToast(error.message || 'Login failed. Please try again.', { type: 'error' }); // Show error toast
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-[#f4f4f4] flex justify-center items-center">
        <div className="py-5 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-center cursor-pointer font-bold text-[#081225] text-2xl antialiased">
              Login to account
            </h1>
            <p className="text-opacity-50 lg:w-80 text-center font-normal tracking-wide cursor-pointer text-[#081225] text-sm antialiased">
              Enter your email & password to login
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="space-y-3">
              <FormField
                title="Email address *"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormField
                title="Password *"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center mt-6">
              <button
                className="w-full py-2 text-xl bg-[#4256C6] rounded-lg transition-all"
                type="submit"
                disabled={loading}
              >
                <span className="font-medium text-white text-base antialiased">
                  {loading ? 'Logging in...' : 'Login'}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
