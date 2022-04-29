import { Dispatch, SetStateAction, useLayoutEffect, useState } from 'react';

interface IUseTheme {
  theme: string,
  setTheme: Dispatch<SetStateAction<string>>
}

const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light'

export const useTheme = ():IUseTheme => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme])

  return {theme, setTheme}
}