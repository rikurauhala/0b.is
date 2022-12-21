export const validateBinary = (binary: string): boolean => {
  const regex = new RegExp('^[-]?[01]*$');
  return regex.test(binary);
};
