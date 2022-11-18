import propTypes from "prop-types"
import styles from './style/styles.module.css'

function Button ({text}) {
  console.log(propTypes)
  return (
  <button className={styles.btn}>{text}</button>
  )
}

Button.propTypes = {
  text: propTypes.string.isRequired,
}

export default Button