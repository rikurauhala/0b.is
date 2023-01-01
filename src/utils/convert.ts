/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable indent */

const convertBaseXToBaseY = (number: string, baseX: number, baseY: number): string => {
  return parseInt(number, baseX).toString(baseY);
};

const convert = (number: string, inputSystem: string, outputSystem: string): string => {
  switch(inputSystem) {
    case 'Binary':
      switch(outputSystem) {
        case 'Decimal':
          return convertBaseXToBaseY(number, 2, 10);
        case 'Hexadecimal':
          return convertBaseXToBaseY(number, 2, 16);
        default:
          return number;
      }
    case 'Decimal':
      switch(outputSystem) {
        case 'Binary':
          return convertBaseXToBaseY(number, 10, 2);
        case 'Hexadecimal':
          return convertBaseXToBaseY(number, 10, 16);
        default:
          return number;
      }
    case 'Hexadecimal':
      switch(outputSystem) {
        case 'Binary':
          return convertBaseXToBaseY(number, 16, 2);
        case 'Decimal':
          return convertBaseXToBaseY(number, 16, 10);
        default:
          return number;
      }
    default:
      return 'Something went wrong!';
  }
};

export default convert;
