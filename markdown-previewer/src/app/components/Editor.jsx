import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setText } from '../markdownSlice'

export default function Editor() {
  const text = useSelector((state) => state.markdown.text)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(setText(event.target.value))
  }

  return (
    <textarea
      className="col-3"
      style={{
        minHeight: '98vh',
        maxHeight: '98vh', 
        overflow: 'auto', 
        top: '1vh', 
        right: '.6vw', 
        position: 'absolute', 
        padding: '5px', 
        borderRadius: '8px', 
        outline: '1px lightgray',
        resize: 'none'}}
      id="editor"
      onChange={handleChange}
      value={text}
      placeholder="Type markdown here..."
    />
  )
}
