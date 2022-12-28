export interface MenuBarProps {
  darkMode: boolean
  handleThemeChange: () => void
}

export interface ModeSelectProps {
  converterMode: string
  handleConverterModeChange: (arg0: ConvertModeType) => void
}

export interface NumberInputProps {
  input: string
  mode: string
  handleInputChange: (arg0: string) => void
}

export interface NumberOutputProps {
  input: string
  mode: string
}

export type NumberType = 'Binary' | 'Decimal';

export interface Ref {
  value: string
}

export type ConvertModeType = 'BinToDec' | 'DecToBin' | 'HexToDec'
