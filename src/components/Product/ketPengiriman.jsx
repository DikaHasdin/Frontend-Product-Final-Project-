import './ProductComponents.css'

function ketPengiriman(props) {
  const {pengiriman} = props
  if(pengiriman == true){
    return (
      <div className="ketPengiriman">
        <p>Pesanan Anda senilai Rp 3.000.000 atau lebih mendapat gratis pengiriman standar.</p>
          <ul class="list-disc">
            <li>Pengiriman standar 6–12 Hari Kerja</li>
            <li>Pengiriman ekspres 3–10 Hari Kerja</li>
          </ul>
          <p>Saat checkout, kami akan memberi Anda perkiraan tanggal pengiriman berdasarkan alamat pengiriman pesanan Anda. Pesanan diproses dan dikirim Senin – Jumat (tidak termasuk hari libur nasional).</p>
      </div>
    )
  }
}
  
export default ketPengiriman;