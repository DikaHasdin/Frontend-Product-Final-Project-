import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FeaturedProduct = ({data}) => {
  const [cardMediaURL, setCardMediaURL] = useState("");
  const navigate = useNavigate();
  const parentRef = useRef(null);
  const videoRef = useRef(null);

  const handleChangeCardMediaURL = (parentOffsetWidth) => {
    if(parentOffsetWidth <= 600) {
      setCardMediaURL(data.media.url.small)
      if(data.media.type === "video") {
        videoRef?.current?.load()
      }
    } else {
      setCardMediaURL(data.media.url.normal)
      if(data.media.type === "video") {
        videoRef?.current?.load()
      }
    }
  }
  
  useEffect(() => {
    /* On load */
    handleChangeCardMediaURL(parentRef.current.offsetWidth);
    
    /* Parent resize observer */
    new ResizeObserver((entries) => {
      handleChangeCardMediaURL(entries[0].target.offsetWidth)
    }).observe(parentRef.current)
  }, [])
  
  return (
    <div ref={parentRef} className="cursor-pointer" onClick={() => navigate(data.destinationURL)}>
      {/* Card media */}
      {
        data?.media?.type === "img" ? (
          <img 
            className="w-full h-full object-fit"
            src={cardMediaURL}
            alt={data.title}
          />
        ) : (
          <video ref={videoRef} className="w-full" playsInline autoPlay muted loop preload="auto">
            <source
              src={cardMediaURL}
              type="video/mp4"
            />
          </video>
        )
      }
      <div className="mt-6 lg:mx-auto sm:w-11/12 lg:w-9/12 lg:text-center">
        { data.category && (
          <p className="font-semibold text-base lg:text-xl">{data.category}</p>
        )}
        { data.title && (
          <p className="mb-2 font-bold text-5xl uppercase lg:text-7xl">{data.title}</p>
        )}
        {data.description && (
          <p className="mt-6 font-normal text-base lg:text-xl">{data.description}</p>
        )}
        <div className="mt-6">
          <Link to={data.destinationURL} className="rounded-full py-1.5 px-5 bg-black hover:bg-gray-500 font-bold text-base text-white">Shop</Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProduct