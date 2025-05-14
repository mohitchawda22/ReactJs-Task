import hero4 from "../../assets/images/hero4.webp"
import axios from "axios"
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import ProductCard from "../../components/Layouts/ProductCard/ProductCard"
import { PRODUCT_API } from "../../constants/ProductApi"
import { CategoryData } from "../../Data/CategoryData"

function Product() {
  const [data,setData]=useState([])
  const [searchParams,setSearchParams]=useSearchParams()
  // const category=searchParams.get('category')
  // const price=searchParams.get('price')
  const categoryParams=searchParams.getAll("category")
  const priceParams=searchParams.get("price")||"2000"

  const productFetch=async()=>{
    try {
      const res=await axios.get(PRODUCT_API)
      setData(res?.data)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=>{
    productFetch()
  },[])

  const handleCategoryChange=(e)=>{
    const value=e.target.value
    let newCategory=[...categoryParams]

    if(categoryParams.includes(value)){
      newCategory=categoryParams.filter(c=>c!==value)
    }else{
      newCategory.push(value)
    }

    const params=new URLSearchParams(searchParams)
    params.delete("category")
    newCategory.forEach(cat=>params.append("category",cat))
    setSearchParams(params)
  }

  const handlePriceChange=(e)=>{
    const value=e.target.value
    const params=new URLSearchParams(searchParams)
    params.set("price",value)
    setSearchParams(params)
  }
  
  const getFilteredData=()=>{
    let filtered=[...data]

    if(categoryParams.length>0){
      filtered=filtered.filter(product=>categoryParams.includes(product.category.toLowerCase()))
    }
    if(priceParams){
      filtered=filtered.filter(product=>product.price<=Number(priceParams))
    }
    return filtered
  }
  console.log(data)

  const filteredData=getFilteredData()

  if (!data) return <div className="text-center py-5">Loading Products.......</div>
  return (
    <>
      <section className="py-5" style={{ backgroundColor: "#FFE4E1" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold text-warning">Our Products</h1>
              <p className="text-muted my-4">
                Discover our collection of beautifully crafted furniture designed to transform your living spaces. From
                sofas to dining tables, each piece is made with quality materials and expert craftsmanship.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={hero4}
                width={500}
                height={400}
                alt="Product showcase"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="card border-0 shadow-sm p-4">
                <h4 className="mb-4">Filters</h4>

                <div className="mb-4">
                  <h5 className="mb-3">Categories</h5>
                  {CategoryData.map((category,index)=>(
                    <div className="form-check mb-2" key={index}>
                    <input className="form-check-input" type="checkbox" id={category} value={category} checked={categoryParams.includes(category)} onChange={handleCategoryChange}/>
                    <label className="form-check-label" htmlFor={category}>
                      {category.charAt(0).toUpperCase()+category.slice(1)}
                    </label>
                  </div>
                  ))}
                </div>

                <div className="mb-4">
                  <h5 className="mb-3">Price Range</h5>
                  <div className="d-flex align-items-center">
                    <input type="range" className="form-range" min="0" max="2000" id="priceRange" value={priceParams} onChange={handlePriceChange}/>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>$0</span>
                    <span>$2000+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="row">
                {filteredData?.map((product,index)=>(
                <ProductCard 
                  key={index}
                  Image={product?.image}
                  category={product?.category}
                  Price={product?.price}
                  Title={product?.title}
                  Rating={product?.rating?.rate}
                  Count={product?.rating.count}
                />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
