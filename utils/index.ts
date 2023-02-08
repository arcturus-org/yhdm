function chunk<T>(arr: T[], step = 1) {
  const res: T[][] = [];

  for (let i = 0; i < arr.length; i += step) {
    res.push(arr.slice(i, i + step));
  }

  return res;
}
