export interface MenuBarProps {
  darkMode: boolean
  handleThemeChange: () => void
}

export interface NumberInputProps {
  input: string
  inputSystem: string
  handleInputChange: (arg0: string) => void
  handleInputSystemChange: (arg0: string) => void
}

export interface NumberOutputProps {
  input: string
  inputSystem: string
  outputSystem: string
  handleOutputSystemChange: (arg0: string) => void
}

export type NumeralSystem =
  | 'Binary'
  | 'Decimal'
  | 'Hexadecimal';

export interface Ref {
  value: string
}
