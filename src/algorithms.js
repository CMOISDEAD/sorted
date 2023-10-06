import { bubble, insertion, merge, quick, selection } from "./sort";

// array of sorting algorithms
export const algorithms = [
  {
    name: "Bubble Sort",
    fn: bubble,
  },
  {
    name: "selection Sort",
    fn: selection,
  },
  {
    name: "Insertion Sort",
    fn: insertion,
  },
  {
    name: "Merge Sort",
    fn: merge,
  },
  {
    name: "Quick Sort",
    fn: quick,
  },
];
