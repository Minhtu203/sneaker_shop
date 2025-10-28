export const getAllUsers = async (axiosJWT, accessToken) => {
  try {
    return await axiosJWT.get('/api/user/allusers', {
      headers: { token: `Bearer ${accessToken}` },
      withCredentials: true,
    });
  } catch (error) {
    if (error.response) return error.response;
  }
};

export const deleteUserApi = async (axiosJWT, accessToken, userId) => {
  try {
    const res = await axiosJWT.delete(`/api/user/${userId}`, {
      headers: { token: `Bearer ${accessToken}` },
      withCredentials: true,
    });
    return res;
  } catch (error) {
    if (error.response) return error.response;
  }
};
