import { CreateAxios } from '@/lib/axios';

export const getItemsInCart = async (axiosJWT, accessToken) => {
  try {
    return await axiosJWT.get('/api/cart/getAllItems', {
      headers: { token: `Bearer ${accessToken}` },
      withCredentials: true,
    });
  } catch (error) {
    if (error.response) return error.response;
  }
};
