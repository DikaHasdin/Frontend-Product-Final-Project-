import React from "react"
import Card from "./Card"

const DoubleFeaturedProduct = ({ data }) => {
  if(data.length !== 2) throw new Error("Data array of DoubleFeaturedProduct must be in length of 2");
  
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {data?.map((item, index) => (<Card key={index} data={item} />))}
    </div>
  )
}

export default DoubleFeaturedProduct