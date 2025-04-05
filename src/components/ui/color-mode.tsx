

import type { IconButtonProps } from "@chakra-ui/react"
import {
  IconButton,
  Skeleton,
  chakra,
  useColorModeValue as chakraUseColorModeValue,
} from "@chakra-ui/react"
import { ThemeProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import * as React from "react"
import { LuMoon, LuSun } from "react-icons/lu"

export interface ColorModeProviderProps extends ThemeProviderProps {}

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  )
}

export type ColorMode = "light" | "dark"

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme } = useTheme()
  const colorMode = (resolvedTheme ?? "light") as ColorMode
  const toggleColorMode = () => {
    setTheme(colorMode === "dark" ? "light" : "dark")
  }
  return {
    colorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export function ColorModeIcon(props: { boxSize?: number }) {
  const { colorMode } = useColorMode()
  const size = props.boxSize ?? 5
  return colorMode === "dark" ? <LuMoon size={size * 4} /> : <LuSun size={size * 4} />
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="Toggle color mode"
      size="sm"
      ref={ref}
      icon={<ColorModeIcon />}
      {...props}
    />
  )
})

const Span = chakra("span")

export const LightMode = React.forwardRef<HTMLSpanElement, React.ComponentProps<typeof Span>>(
  function LightMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme light"
        colorPalette="gray"
        colorScheme="light"
        ref={ref}
        {...props}
      />
    )
  }
)

export const DarkMode = React.forwardRef<HTMLSpanElement, React.ComponentProps<typeof Span>>(
  function DarkMode(props, ref) {
    return (
      <Span
        color="fg"
        display="contents"
        className="chakra-theme dark"
        colorPalette="gray"
        colorScheme="dark"
        ref={ref}
        {...props}
      />
    )
  }
)
