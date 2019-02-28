export const errorNetwork = err => {
  if (!err.response) return { message: err.message };
  return err.response.data;
};
