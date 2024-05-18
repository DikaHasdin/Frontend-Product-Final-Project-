import './ProductComponents.css'

function listSize(props) {
  const {id_size, idSizeProduct, size, SizeProduct} = props
  if(idSizeProduct === id_size){
    return (
      <div className="my-auto list-size-active cursor-pointer" onClick={() => SizeProduct(id_size)}>
        <div>EU {size}</div>
      </div>
    )
  }else{
    return (
      <div className="my-auto list-size cursor-pointer" onClick={() => SizeProduct(id_size)}>
        <div>EU {size}</div>
      </div>
    )
  }
  }
  
export default listSize;