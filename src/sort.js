import { complete, draw } from "./drawer";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Bubble Sort Algorithm
export const bubble = async (arr, ctx) => {
  draw(arr, 0, ctx);
  await delay(1);
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        draw(arr, j, ctx);
        await delay(1);
      }
    }
  }
  complete(arr, ctx);
  return arr;
};

// Selection Sort Algorithm
export const selection = async (arr, ctx) => {
  draw(arr, 0, ctx);
  await delay(5);
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    let min = i;
    for (let j = i + 1; j < size; j++) {
      if (arr[j] < arr[min]) {
        min = j;
        draw(arr, j, ctx);
        await delay(5);
      }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  complete(arr, ctx);
  return arr;
};

// Insertion Sort Algorithm
export const insertion = async (arr, ctx) => {
  draw(arr, 0, ctx);
  await delay(5);
  let size = arr.length;
  for (let i = 1; i < size; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      draw(arr, j, ctx);
      await delay(5);
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  complete(arr, ctx);
  return arr;
};

// Merge Sort Algorithm
export const merge = async (arr, ctx) => {
  draw(arr, 0, ctx);
  await delay(5);
  let size = arr.length;
  if (size < 2) {
    return arr;
  }
  let mid = Math.floor(size / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return mergeSort(await merge(left, ctx), await merge(right, ctx), ctx);
};

const mergeSort = async (left, right, ctx) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
    draw(result.concat(left, right), i, ctx);
    await delay(5);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
};

// Quick Sort Algorithm
export const quick = async (arr, ctx) => {
  draw(arr, 0, ctx);
  await delay(5);
  return quickSort(arr, 0, arr.length - 1, ctx);
};

const quickSort = async (arr, low, high, ctx) => {
  if (low < high) {
    let pi = await partition(arr, low, high, ctx);
    await quickSort(arr, low, pi - 1, ctx);
    await quickSort(arr, pi + 1, high, ctx);
  }
  return arr;
};
