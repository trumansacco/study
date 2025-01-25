import React from 'react'
import { useSelector } from 'react-redux'
import { marked } from 'marked'

export default function Preview() {
  const text = useSelector((state) => state.markdown.text)

  return (
    <div
      className="col-9"
      style={{height: '100vh',
              webkitOverflowScrolling: 'touch'}}
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked.parse(text || '')
      }}
    />
  )
}
