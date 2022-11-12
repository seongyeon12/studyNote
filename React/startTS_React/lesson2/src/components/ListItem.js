import styles from './ListItem.module.css';

export default function ListItem ({ checked, onChangeCheckBox, onClickTitle }) {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" 
      className={styles.checkbox} 
      value={checked} 
      onChange={onChangeCheckBox}>
      </input>
      <div>
        <div onClick={onClickTitle} className={styles.title}>
          Issue Example
        </div>
        <div className={styles.description}>
          # Description
        </div>
      </div>
    </div>
  )
}