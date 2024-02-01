const isNumeric = (n: string) => {
  return !isNaN(parseInt(n)) && isFinite(parseInt(n));
};

export { isNumeric };
