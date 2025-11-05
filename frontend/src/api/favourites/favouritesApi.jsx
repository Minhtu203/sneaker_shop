export const addItemToFavourites = async (axiosJWT, accessToken, id) => {
  try {
    return await axiosJWT.post(
      '/api/favourite/add',
      { productId: id },
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
  } catch (error) {
    if (error.response) return error.response;
  }
};

export const getItemsFromFavourites = async (axiosJWT, accessToken) => {
  try {
    return await axiosJWT.get('/api/favourite/getUserFavourites', {
      headers: { token: `Bearer ${accessToken}` },
    });
  } catch (error) {
    if (error.response) return error.response;
  }
};

export const deleteItemsFromFavourites = async (axiosJWT, accessToken, id) => {
  try {
    return await axiosJWT.post(
      '/api/favourite/delete',
      { productId: id },
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
  } catch (error) {
    if (error.response) return error.response;
  }
};
