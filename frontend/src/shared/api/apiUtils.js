export const errorHandler = (err) => {
  console.log(err);
  return err.response.data;
};
