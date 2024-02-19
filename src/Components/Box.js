import React from 'react'


const Box = ({value, onSquareClick}) => {
  return (
    <button type="button" className="btn btn-primary btn-lg mx-1" onClick={onSquareClick}>{value}</button>
  )
}

export default Box