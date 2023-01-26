import React from 'react'

function DisplayTable({item}) {
  return (
    <div style={{display:"flex" , flexDirection:"column" }}>
      {item.map((a, b) => (
        <p key={b}>{a}</p>
      ))}
    </div>
  )
}

export default DisplayTable