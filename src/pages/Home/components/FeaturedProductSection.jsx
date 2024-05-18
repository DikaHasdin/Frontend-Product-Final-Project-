const FeaturedProductSection = ({ title, children }) => {
  return (
    <section className="mx-6 mt-20 md:mx-12" style={{fontFamily: "Helvetica, sans-serif"}}>
      {title && (<h1 className="mb-6 font-bold text-2xl">{title}</h1>)}
      {children}
    </section>
  )
}

export default FeaturedProductSection