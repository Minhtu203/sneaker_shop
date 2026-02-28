export const getAllOrders = async (axiosJWT, accessToken) => {
  try {
    const res = await axiosJWT.get('/api/order/getAllOrders', {
      headers: { token: `Bearer ${accessToken}` },
      withCredentials: true,
    });
    return res;
  } catch (error) {
    if (error.response) return error.response;
  }
};

export const deleteOrderApi = async (axiosJWT, accessToken, orderId) => {
  try {
    const res = await axiosJWT.post(
      '/api/order/deleteOrder',
      // body
      { orderId: orderId },
      {
        headers: { token: `Bearer ${accessToken}` },
        withCredentials: true,
      }
    );
    return res;
  } catch (error) {
    if (error.response) return error.response;
  }
};
