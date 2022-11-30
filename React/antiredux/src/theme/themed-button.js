import {ThemeContext} from './theme-context';

function ThemedButton(props, theme) {
  return (
    <button
      {...props}
      style={{backgroundColor: theme.background}}
    />
  )
}

ThemedButton.contextType = ThemeContext

export default ThemedButton 