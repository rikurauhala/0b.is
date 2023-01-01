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

export enum NumeralSystem {
  Binary = 2,
  Decimal = 10,
  Hexadecimal = 16
}

export interface Ref {
  value: string
}
