import React from 'react'
import Pagination from 'rc-pagination'
import './Paginate.css'
import { BsActivity, BsCaretLeft, BsCaretLeftFill } from 'react-icons/bs'
const Paginate = ({total,current,pageSize,onChange}) => {
  return (
    <div className='content'>
      <Pagination
        prevIcon={'Atrás'}
        nextIcon={'Siguiente'}
        total={total}
        current={current}
        pageSize={pageSize}
        onChange={onChange}
      />
    </div>
  )
}

export default Paginate
