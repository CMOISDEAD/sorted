import { bubble, insertion, selection } from "./sort";

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
];
