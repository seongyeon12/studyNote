import styles from './ListContainer.module.css'
import Button from './components/Button'

import { useState, useEffect } from 'react'

export default function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open')

  useEffect(() => {
    console.log( { inputValue } )
  }, [inputValue])

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input className={styles.input} 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        />
        <Button style={{
          fontSize: '14px', 
          backgroundColor: 'green', 
          color: 'white' 
        }}>
        New Issue
      </Button>
      </div>
    </div>
  )
}