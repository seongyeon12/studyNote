import {createContext} from 'react'

function themes() {
  let color = {
    light: {
    foreground: '#000000',
    background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
}

return color
};

const ThemeContext = createContext(themes.color.dark);

export {ThemeContext, createContext}