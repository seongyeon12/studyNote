import styles from './ListContainer.module.css'
import axios from 'axios'
import cx from 'clsx'
import Button from './components/Button'
import ListItem from './components/ListItem'
import ListFilter from './components/ListFilter'

import { useState, useEffect } from 'react'
import ListItemLayout from './components/ListItemLayout'

import Modal from './components/Modal'
import Pagination from './components/Pagination'

const GITHUB_API = 'https://api.github.com/'

export default function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open')
  const [checked, setChecked] = useState(false)
  const [list, setList] = useState([]) /* data */
  const [page, setPage] = useState(1)
  const maxPage = 10;

  async function getData(pageParam) {
    const { data } = await axios.get(`${GITHUB_API}repos/axios/axios/issues`, {
      params: { pageParam },
    })
    setList(data)
  }

  useEffect(() => {
    getData(page)
  }, [page])

  console.log({list})

  return (
    <>
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
      <OpenClosedFilters />
      <div className={styles.container}>
      <ListItemLayout className={styles.listFilter}>
        <ListFilter onChangeFilter={(filteredData) => {
          // 필터링된 요소에 맞게 데이터 불러오기
          // const data = getData('필터링된 정보')
          // setList(data)
        }}
      />
      </ListItemLayout>
        {list.map((item) => (
        <ListItem 
        data={item}
        key={item.id}
        checked={checked}
        onChangeCheckBox={() => setChecked((checked) => !checked)} 
        />
        ))}
      </div>
    </div>
    <div className={styles.paginationContainer}>
    <Pagination 
    currentPage={page} 
    onClickPageButton={(pageNumber) => setPage(pageNumber)}
    maxPage={maxPage} 
    />
    </div>
    </>
  )
}

function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true)
  const openModeDataSize = 1
  const closeModeDataSize = 2

  return (
  <>
  <OpenClosedFilter 
      size={openModeDataSize} 
      state="Open" 
      selected={isOpenMode}
      onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter 
      size={closeModeDataSize} 
      state="Closed" 
      selected={!isOpenMode}
      onClick={() => setIsOpenMode(false)}
      />
    </>
  )
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
      <span 
      role="button"
      className={cx(styles.textFilter, {[styles.selected]: selected})}
      onClick={onClick}
      >
        {size} {state}
      </span>
  )
}