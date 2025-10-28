import { postData } from '@/lib/axios';

export const loginApi = async (data) => {
  try {
    const res = await postData('/api/auth/login', data);
    return res.data;
  } catch (error) {
    if (error.response) return error.response;
  }
};
