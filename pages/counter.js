import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setDataValue } from '../store/userSlice'

export default function Counter() {
    const count = useSelector(state => state.user.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(setDataValue('b'))}
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