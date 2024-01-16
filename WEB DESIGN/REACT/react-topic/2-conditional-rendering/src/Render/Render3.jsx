import React from 'react'

const ItemStatus = ({Item,ItemPacked}) => {
    if (ItemPacked) {
        return <li>Item is {Item} Available</li>
    }
    return <li>Item Is Empty</li>
}

const Render3 = () => {
  return (
    <div>
      <ItemStatus Item="OnePlus " ItemPacked={false}/>
      <ItemStatus Item="i phone 15" ItemPacked={false}/>
      <ItemStatus Item="Samsung Altra" ItemPacked={false}/>
      <ItemStatus Item="Oppo" ItemPacked={true}/>
    </div>
  )
}

export default Render3
