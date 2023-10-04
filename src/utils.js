// populate an array with random numbers
export const randomArray = (length) => {
  return [...Array(length)].map(() => Math.floor(Math.random() * length));
};
