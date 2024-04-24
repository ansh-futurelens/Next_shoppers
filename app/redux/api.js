// api.js
import { useState } from 'react';
import Cookies from 'js-cookie';

const BASE_URL = '/api/v1/auth';

export function useFetch() {
  const token = Cookies.get('shoppersToken');
  console.log("Token Cokkiess--",token)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWrapper = async (url, options) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Unknown error occurred');
      }

      return data;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password }) => {
    try {
      const data = await fetchWrapper(`${BASE_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  const signup = async ({ email, password, firstName, lastName }) => {
    try {
      const data = await fetchWrapper(`${BASE_URL}/signup`, {
        method: 'POST',
        body: JSON.stringify({ email, password, firstName, lastName }),
      });
      return data;
    } catch (error) {
      throw error;
    }
  };

  const verifyEmail = async (token) => {
    try {
      const data = await fetchWrapper(
        `${BASE_URL}/verify-email?token=${token}`,
        {
          method: 'POST',
        },
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  return { login, signup, verifyEmail, loading, error };
}
