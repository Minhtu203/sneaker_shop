export const getNikeShoes = async (axiosJWT, accessToken) => {
  try {
    const res = await axiosJWT.get('/api/shoes/getNikeShoes', {
      headers: { token: `Bearer ${accessToken}` },
      withCredentials: true,
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};
