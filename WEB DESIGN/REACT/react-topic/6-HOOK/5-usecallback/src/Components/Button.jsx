import React from 'react'

const Button = ({handleClick , children}) => {
  return (
    <div>
    <button className="button" onClick={handleClick}>
        {children}
    </button>
    </div>
  )
}


export default React.memo(Button)
