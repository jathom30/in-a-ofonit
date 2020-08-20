import React from 'react'

export const PageFlip: React.FC<{changePage: () => void, back?: boolean}> = ({changePage, back=false}) => {
  return (
    <div className={`PageFlip ${back ? 'is-reversed' : ''}`}>
      <button onClick={changePage}>Next Page</button>
    </div>
  )
}