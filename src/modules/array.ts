// src/modules/array.ts
function arr_unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}

export {
  arr_unique,
}
