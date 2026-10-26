import React, { createContext, useContext, useMemo, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import samsung from '../assets/samsung.webp';
import iphone from '../assets/iphone.webp';
import edge from '../assets/edge.webp';
import mobiles from "../Database/mobiles.json";
import FavoriteIcon from '@mui/icons-material/Favorite';

const categories = ["All", ... new Set(mobiles.map((item) => item.category))];
console.log(categories);

const brands = ["All", ... new Set(mobiles.map((item) => item.brand))];
console.log(brands);
const Catogo = ({wishlist,setWishlist}) => {
    const [category, setCategory] = useState("All")
    const [brand, setBrand] = useState("All")
    const [search, setSearch] = useState("")
    const [visible,setVisible] = useState(false)
    const handle = ()=>{
      setVisible(!visible)
    }
    function wish(product){
      setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
    ? prev.filter((item)=> item.id !== product.id)
    :[...prev,product]
      );
    }
    console.log(wishlist);
    
    const filterProducts = useMemo(()=>{
        return mobiles.filter((item) =>{
            const itemCategory = item.category.toLowerCase()
            const itemBrand = item.brand.toLowerCase();
            const itemName = item.name.toLowerCase();

            const selectedCategory = category.toLowerCase();
            const selectedBrand = brand.toLowerCase();
            const searchTerm = search.toLowerCase();
            if(selectedCategory !=="all" && itemCategory !== selectedCategory) return false;
            if(selectedBrand !=="all" && itemBrand !== selectedBrand) return false;
            if(searchTerm && !itemName.includes(searchTerm)) return false;
            return true;

        })
    },[category,brand,search]);
    
  return (
    <div>
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Category filter */}
            <aside className="flex gap-8 w-25">
              <div className="flex flex-col gap-4 ml-45" onMouseEnter={handle} onMouseLeave={() => setVisible(false)}>
                <h2 className="font-bold" >Categories</h2>
                {visible && categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={category === cat
                      ? "text-left font-bold text-blue-600"
                      : "text-left text-gray-500 hover:text-gray-900"}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </aside>

            {/* Search Bar */}
            <section className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search Product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}

                className="w-full rounded-lg border p-3"
              />{console.log(search)
              }
            </section>
        </div>
      {/* Brand Navigation */}
        <nav className="h-20">
          <ol className="flex h-full items-center justify-around gap-3">
            {brands.map((bran) => (
              <li key={bran}>
                <button
                  onClick={() => setBrand(bran)}
                  className={`rounded-xl px-4 py-2 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ${
                    brand === bran
                      ? "bg-red-600 font-bold text-white"
                      : "bg-gray-500 text-white hover:bg-red-600"
                  }`}
                >
                  {bran}
                </button>
              </li>
            ))}
          </ol>
        </nav>
         <aside className='h-200'>
              <Carousel >
          <Carousel.Item>
            <img src={samsung} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={iphone} alt="Second slide"/>
          </Carousel.Item>

          <Carousel.Item>
            <img src={edge} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
    </aside>
    {filterProducts.length === 0 ? (
        <p className="mt-5 font-bold text-red-500"> No Item Found</p>): (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filterProducts.map((item) => {
               const liked = wishlist.some(
                (i) => i.id === item.id 
               );
               return(
            <li
              key={item.id}
              className="rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-contain"
              />
              
              <div className="mt-3">
                <h3 className="font-semibold" >{item.name}</h3>
                <span  style={{cursor:"pointer"}} onClick={()=>wish(item)}>{liked?<FavoriteIcon style={{color:"red"}}></FavoriteIcon>:<FavoriteIcon></FavoriteIcon>}</span>
                <p className="text-gray-500" value={item.brand}>
                  {item.category} / {item.brand}
                </p>
                <p className="mt-2 text-lg font-bold text-green-600" value={item.price}>
                  ₹{item.price.toLocaleString("en-IN")}
                </p>
              </div>  
            </li>
               );
              })}

          
        </ul>
       )}   
    </div>
  )
}

export default Catogo
