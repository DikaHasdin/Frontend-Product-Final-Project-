import { useEffect, useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import { Link } from "react-router-dom";

const Accordion = ({ data }) => {
  const [isLockOpen, setIsLockOpen] = useState(false);
  const { width: windowWidth} = useWindowSize();

  useEffect(() => {
    if(windowWidth >= 640) {
      setIsLockOpen(true)
    } else {
      setIsLockOpen(false)
    }
  }, [windowWidth])
  
  return (
    <div className="group/product-category-list mx-auto max-w-4xl grid grid-cols-1 gap-y-4 gap-x-12 sm:grid-cols-4">
      { data.map((item, index) => (
        <div key={index} className={`${!isLockOpen ? "collapse": ""}`}>
          {!isLockOpen ? (
            <input type="radio" name="acordion" />
          ) : null}
          <div className={`${!isLockOpen ? "collapse-title": ""} text-xl font-bold`}>
            {item.title}
          </div>
          <div className={`${!isLockOpen ? "collapse-content": ""} text-xl font-bold ml-8 sm:ml-0`}> 
            {item.content.map((content, index) => (
              <Link to={content.destinationURL} className={`${index >= 4 ? "sm:hidden group-hover/product-category-list:block" : "block"} py-2 truncate text-ellipsis`} key={index}>{content.text}</Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion