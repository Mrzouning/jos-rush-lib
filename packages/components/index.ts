import { count } from "@jos/hooks";
console.log(count);

export const setCount = (counts: number): number => {
  return counts + count + 5124;
};
