export function getRandomItems<T>(array: T[] | undefined, n: number): T[] {
  if (!Array.isArray(array) || array.length === 0) return [];

  const arr = array.slice();
  // Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr.slice(0, Math.min(n, arr.length));
}
