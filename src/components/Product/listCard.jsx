import './ProductComponents.css'

function listSize(props) {
    const {id, gambar, selectListCard} = props
    return (
      <div className="card-kecil cursor-pointer" onClick={() => selectListCard(id, gambar)}><img src={gambar} alt='' /></div>
    )
  }
  
export default listSize;