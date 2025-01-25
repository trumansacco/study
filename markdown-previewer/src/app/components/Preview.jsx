import React from 'react'
import { useSelector } from 'react-redux'
import { marked } from 'marked'

export default function Preview() {
  const text = useSelector((state) => state.markdown.text)

  return (
    <div
      className="col-9"
      style={{height: '98vh',
              webkitOverflowScrolling: 'touch',
              position: 'absolute',
              left: '.6vw',
              top: '1vh',
              padding: 0,
              width: '73%',
              overflowY: 'auto'}}
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked.parse(text || '')
      }}
    />
  )
}
