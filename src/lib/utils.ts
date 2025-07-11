import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// * Combines class names and merges them using Tailwind Merge.
// * This utility function is useful for conditionally applying class names in a React component.
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

//* Converts a value to a plain object by serializing and deserializing it.
export const convertToPlainObject = <T>(value: T): T => {
  return JSON.parse(JSON.stringify(value));
};

//* Format number with decimal places
export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}
