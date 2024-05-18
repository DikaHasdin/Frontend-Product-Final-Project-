import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Card = ({ data }) => {
  const navigate = useNavigate();

  return (
    <section onClick={() => navigate(data.destinationURL)} className="h-[500px] md:h-[700px] relative cursor-pointer overflow-hidden">
      <picture>
        <source 
          srcSet={data.img.normal} 
          media="(min-width:768px)"/>
        <img 
          className="w-full h-full md:object-cover"
          src={data.img.small}
          alt=""
        />
      </picture>
      <div className="absolute inset-x-6 bottom-6 text-white">
        {data?.category && (<p className="font-bold">{data.category}</p>)}
        {data?.title && (<p className="font-bold text-xl">{data.title}</p>)}
        <div className="mt-6">
          <Link to={data.destinationURL} className="rounded-full py-1.5 px-5 bg-white hover:bg-gray-400 font-bold text-base text-black">Shop</Link>
        </div>
      </div>
    </section>
  )
}

export default Card