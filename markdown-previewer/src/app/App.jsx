import React from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

export default function App() {
  return (
    <div id="container" className="row" style={{overflow: 'hidden', width: '100vw'}}>
      <Preview />
      <Editor />
    </div>
  )
}
