export const validateBinary = (binary: string) => {
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] !== '0' && binary[i] !== '1') {
      return false;
    }
  }
  return true;
};
