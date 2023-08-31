import React from 'react'
import Search from './Search'
import classes from './SearchRes.module.css'
import { useDispatch } from 'react-redux'
import { searchClosed } from '../../store/themeSlice'

const SearchRes = () => {
  const dispatch = useDispatch();
  return (
    <>
    <div className={classes.content}>
        <Search/>
    </div>
    <div className={classes.back} onClick={() => dispatch(searchClosed())}></div>
    </>
  )
}

export default SearchRes
