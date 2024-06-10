import axios from 'axios';

const BASE_URL = 'https://farmdine-backend.onrender.com';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/accounts/login`, {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Login API call failed:', error);
    throw error;
  }
};
