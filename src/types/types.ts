export interface MenuBarProps {
  darkMode: boolean
  handleThemeChange: () => void
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
  Octal = 8,
  Hexadecimal = 16,
}

export interface Ref {
  value: string
}
