// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const oldRemoveFields = <T extends Record<string, any>>(
  obj: T,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  values: any[]
): Partial<T> => {
  const keysToRemove = Object.keys(obj).filter((key) =>
    values.includes(obj[key])
  );

  if (keysToRemove.length === 0) return {};

  return Object.keys(obj)
    .filter((key) => !keysToRemove.includes(key))
    .reduce((previousValue, key) => {
      previousValue[key as keyof T] = obj[key]; // Add the key-value pair to the accumulator
      return previousValue; // Return the updated accumulator
    }, {} as T); // Initialize the accumulator as an empty object
};

export function removeFields<T extends object>(obj: T, fieldsToRemove: (keyof T)[]): Omit<T, keyof T> {
    const newObj = { ...obj };
    // biome-ignore lint/complexity/noForEach: <explanation>
    fieldsToRemove.forEach(field => delete newObj[field]);
    return newObj;
}