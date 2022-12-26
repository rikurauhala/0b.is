export interface MenuBarProps {
  darkMode: boolean
  handleThemeChange: () => void
}

export interface ModeSelectProps {
  converterMode: string
  handleConverterModeChange: (arg0: string) => void
}

export interface NumberInputProps {
  input: string
  handleInputChange: (arg0: string) => void
}

export interface Ref {
  value: string
}
