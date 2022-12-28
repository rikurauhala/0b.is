export type ConverterModeCode = 'BinToDec'
  | 'BinToHex'
  | 'DecToBin'
  | 'DecToHex'
  | 'HexToBin'
  | 'HexToDec';

export interface MenuBarProps {
  darkMode: boolean
  handleThemeChange: () => void
}

export interface ModeSelectProps {
  converterMode: ConverterModeCode
  handleConverterModeChange: (arg0: ConverterModeCode) => void
}

export interface NumberInputProps {
  input: string
  mode: ConverterModeCode
  handleInputChange: (arg0: string) => void
}

export interface NumberOutputProps {
  input: string
  mode: ConverterModeCode
}

export type NumberType = 'Binary' | 'Decimal' | 'Hexadecimal';

export interface Ref {
  value: string
}
