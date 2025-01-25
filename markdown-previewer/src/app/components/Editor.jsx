import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setText } from '../markdownSlice'

export default function Editor() {
  // Grab the current text from Redux
  const text = useSelector((state) => state.markdown.text)
  const dispatch = useDispatch()

  // When user types in the textarea, dispatch an action to set the text
  const handleChange = (event) => {
    dispatch(setText(event.target.value))
  }

  return (
    <textarea
      className="col-3"
      style={{height: '100vh', overflow: 'auto'}}
      id="editor"
      onChange={handleChange}
      value={text}
      placeholder="Type markdown here..."
    />
  )
}
