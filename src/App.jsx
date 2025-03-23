import React, { useState } from 'react'
import json from "./data.js"

const List = ({list}) => {
  return (
    <div>
    {list.map((node, index)=>{
      const [isExpanded, setIsExpanded] = useState(false)
      return (
      <div key={index} className='explore'>
        {node.isFolder && (
          <span onClick={()=>setIsExpanded((prev)=> !prev)} className='folder_hover'>{isExpanded ? "- " : "+ "} </span>
          )}
        <span>{node.name}</span>
        <span>
        {isExpanded && node.children?.length > 0 && <List list={node.children} />}
        </span>
      </div>
      )
    })}
  </div>
  )
}



function App() {
  const [data, setdata] = useState(json)
  return (
    <>
      <h1>Side File Explore</h1>
      <List list={data} />
    </>
  )
}

export default App
 