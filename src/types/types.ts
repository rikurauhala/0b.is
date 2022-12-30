export interface MenuBarProps {
  darkMode: boolean
  handleThemeChange: () => void
}

export interface NumberInputProps {
  input: string
  inputSystem: NumeralSystem
  handleInputChange: (arg0: string) => void
  handleInputSystemChange: (arg0: NumeralSystem) => void
}

export interface NumberOutputProps {
  input: string
  inputSystem: NumeralSystem
  outputSystem: NumeralSystem
  handleOutputSystemChange: (arg0: NumeralSystem) => void
}

export type NumeralSystem =
  | 'Binary'
  | 'Decimal'
  | 'Hexadecimal';

export interface Ref {
  value: string
}
