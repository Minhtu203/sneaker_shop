export const deleteShoesById = async (axiosJWT, accessToken, shoesId) => {
  try {
    const res = await axiosJWT.delete(`/api/shoes/deleteShoes/${shoesId}`, {
      headers: { token: `Bearer ${accessToken}` },
      withCredentials: true,
    });
    return res;
  } catch (error) {
    if (error.response) return error.response;
  }
};
