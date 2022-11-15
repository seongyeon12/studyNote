import { useState } from 'react'

function Blog(props) {
  let [a,b] = useState(props.like)

  return (
    <div className="Container">
    <h2>{props.title}</h2>
    <p>{props.data}</p>
    <span onClick={() => b(Number(a) + 1)}>{a}</span>
    </div>
  )
}

export { Blog }