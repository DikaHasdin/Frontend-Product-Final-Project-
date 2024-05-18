import { useState } from "react";
import { useParams } from 'react-router-dom';
import ListCard from '../../components/Product/listCard'
import ListSize from '../../components/Product/listSize'
import KetPengiriman from '../../components/Product/ketPengiriman'
import './Product.css'
import { useEffect } from "react";
// import styled from 'styled-components';

function Product() {
  let { id } = useParams();

  const sizeStyle = {
    border: 'solid 1.5px red',
    borderRadius: '5px'
  };

  const [product, setproduct] = useState([]);
  const [productWarna, setProductWarna] = useState([]);
  const [listSepatu, setListSepatu] = useState([]);
  const [listSizeProducts, setlistSizeProducts] = useState([]);
  const [selectProduct, setValue] = useState();
  const [pengiriman, setPengiriman] = useState(false);
  const [idWarnaProduct, setidWarnaProduct] = useState();
  const [idSizeProduct, setidSizeProduct] = useState(null);
  const [listSizeStyle, setlistSizeStyle] = useState();

  const fetctData = async () =>{
    const productresponse = await fetch('http://localhost:8080/product/Product/'+id,
    {
      method: "GET",
    })
    const responseproduct = await productresponse.json();
    const product = responseproduct.data[0]
    
    const listWarnaresponse = await fetch('http://localhost:8080/product/WarnaProduct/'+id,
    {
      method: "GET",
    })
    const responselistWarna = await listWarnaresponse.json();
    const listWarna = responselistWarna.data
    
    const listSepaturesponse = await fetch('http://localhost:8080/product/GambarProduct/'+id,
    {
      method: "GET",
    })
    const responselistSepatu = await listSepaturesponse.json();
    const listSepatu = responselistSepatu.data

    const listSizeProductsresponse = await fetch('http://localhost:8080/product/DaftarSizeProduct/'+id,
    {
      method: "GET",
    })
    const responselistSizeProducts = await listSizeProductsresponse.json();
    const listSizeProducts = responselistSizeProducts.data
    
    setproduct(product)
    setlistSizeProducts(listSizeProducts)
    setListSepatu(listSepatu)
    setProductWarna(listWarna)
    setValue(listWarna[0].gambar)
    setidWarnaProduct(listWarna[0].id)
  }
  
  useEffect(() => {
    productWarna.length === 0 && fetctData();
  });

  function selectListCard(value, valueDua){
    setValue((selectProduct) => selectProduct=valueDua);
  }
  
  function selecttCard(value, valueDua){
    setValue((selectProduct) => selectProduct=valueDua);
    setidWarnaProduct((idWarnaProduct) => idWarnaProduct=value);
    setidSizeProduct((idSizeProduct) => idSizeProduct=null);
  }

  function infoPengiriman(){
    if(pengiriman == true){
      setPengiriman((pengiriman) => pengiriman = false) 
    }
    else if(pengiriman == false){
      setPengiriman((pengiriman) => pengiriman = true) 
    }
  }

  function handleClickAddToBag(value, valueDua) {
    if(valueDua === null){
      setlistSizeStyle((listSizeStyle) => listSizeStyle=sizeStyle);
    }else{
      setlistSizeStyle((listSizeStyle) => listSizeStyle=null);
      const fetctData = async () =>{
        const formData = {
          id_warna_product: value,
          id_size: valueDua
        }
        const response = await fetch("http://localhost:8080/product/AddToBag",
            {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            })
        const data = await response.json();
        if(data.message == "Create Add to Bag succes"){
          alert("Berhasil")
        }
      }
      fetctData()
    }
  }
  
  function handleClickFavourite(value) {
    const fetctData = async () =>{
      const formData = {
        id_warna_product: value,
      }
      const response = await fetch("http://localhost:8080/product/Favourite",
          {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData),
          })
      const data = await response.json();
      if(data.message == "Create Favourite succes"){
        alert("Berhasil")
      }
    }
    fetctData()
  }

  function SizeProduct(value){
    setidSizeProduct((idSizeProduct) => idSizeProduct=value);
  }

    return (
      // <div>1</div>
      <div className="container">
        <div className="aside">
            <div className='list-card overflow-auto'>
              {listSepatu.map((listSepatuHitam) => {
                if (listSepatuHitam.id_warna_product === idWarnaProduct){
                 return <ListCard key={listSepatuHitam.id} gambar={listSepatuHitam.nama_gambar} selectListCard={selectListCard}/>
                } 
              })}
            </div>
            <div className='big-card'>
              <img src={selectProduct} alt="" />
            </div>
        </div>
        <div className="main overflow-auto">
          <div className="nama-product">{product.nama_product}</div>
          <div className='kategori-product'>{product.kategori_product}</div>
          <div className='harga-product'>Rp {product.harga_product}</div>
          <div className='warna-product'>
            {productWarna.map((listWarna) => (
              <ListCard key={listWarna.id} id={listWarna.id} gambar={listWarna.gambar} selectListCard={selecttCard}/>
            ))}
          </div>
          <div className='select-size'>Select Size</div>
          <div className='size' style={listSizeStyle}>
            {listSizeProducts.map((listSizeProduct) => {
              if (listSizeProduct.id_warna_product === idWarnaProduct){
                return <ListSize id_size={listSizeProduct.id_size} idSizeProduct={idSizeProduct} size={listSizeProduct.size} SizeProduct={SizeProduct}/>
              }
            })}
          </div>
          <div className='add-to-bag' onClick={() => handleClickAddToBag(idWarnaProduct, idSizeProduct)}><div>Add to Bag</div></div>
          <div className='favourite' onClick={() => handleClickFavourite(idWarnaProduct)}><div>Favourite</div></div>
          <div className='ket-product'>
            <p>{product.ket_product}</p>
            <div>
              {productWarna.map((listWarna) => {
                if(listWarna.id === idWarnaProduct){
                  return <ul class="list-disc">
                      <li>{listWarna.color_shown}</li>
                      <li>{listWarna.style}</li>
                  </ul>
                }
              })} 
            </div>
          </div>
          <div className='pengiriman'>
            <div className='text-lg cursor-pointer pengiriman-head' onClick={infoPengiriman}>
              <h2 className="font-bold">Pengiriman dan Pengembalian Gratis</h2>
              <img src="../../../public/product-image/angle-small-down.png" alt="" />
            </div>
            <KetPengiriman pengiriman={pengiriman}/>
          </div>
        </div>
      </div>
    )
}
  
export default Product;