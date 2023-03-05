import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '/src/features/counter/counterSlice'

const index = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='flex gap-4'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default index

