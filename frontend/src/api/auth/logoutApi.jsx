export const logoutApi = async (userId, clearUserInfo, accessToken, axiosJWT, navigate) => {
  try {
    await axiosJWT.post(
      '/api/auth/logout',
      { userId },
      {
        headers: { token: `Bearer ${accessToken}` },
        withCredentials: true,
      }
    );
  } catch (error) {
    console.log(error.message);
  } finally {
    clearUserInfo();
    navigate('/login');
  }
};
