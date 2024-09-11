// src/modules/array.ts
/**
 * The function `arr_unique` removes duplicate elements from an array in TypeScript.
 * @public
 * @param {T[]} arr - The `arr` parameter is an array of elements of type `T`.
 * @returns The function `arr_unique` returns an array with all duplicate elements removed from the
 * input array `arr`.
 */
function arr_unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}

export {
  arr_unique,
}
