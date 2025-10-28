export const getAllJordanShoes = async (axiosJWT, accessToken) => {
  try {
    return await axiosJWT.get('/api/shoes/getJordanShoes', {
      headers: { token: `Bearer ${accessToken}` },
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
  }
};
