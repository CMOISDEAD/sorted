export const randomArray = (length) => {
  const matrix = [...Array(length).keys()];
  return shuffle(matrix);
};

export const shuffle = (array) => array.sort(() => Math.random() - 0.5);
