import React, { useContext } from 'react'

const Whislet = ({wishlist,setWishlist,addToCart,setAddToCart}) => {
  console.log(wishlist);
  console.log(addToCart);
  function wish(product){
      setAddToCart([...addToCart,product])
    }
  console.log(addToCart);
  function removeItem(product){
      setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
    ? prev.filter((item)=> item.id !== product.id)
    :[...prev,product]
      );
    }
  return (
    <div style={{padding:"20px"}}>
      <h1>My wishlist</h1>
      {wishlist.length === 0? (
        <p>Your wish list is Empty</p>
      ):(
        <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
          {wishlist.map((item)=>(
             <div
              key={item.id}
              className="rounded-lg border p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-contain"
              />
              
              <div className="mt-3">
                <h3 className="font-semibold" >{item.name}</h3>
                <p className="text-gray-500" value={item.brand}>
                  {item.category} / {item.brand}
                </p>
                <p className="mt-2 text-lg font-bold text-green-600" value={item.price}>
                  ₹{item.price.toLocaleString("en-IN")}
                </p>
                <button className="mt-3 rounded-lg bg-red-500
                        px-4 py-2 text-white hover:bg-red-600" onClick={()=>wish(item)}>Add to Cart</button> <br />
                <button className="mt-3 rounded-lg bg-red-500
                        px-4 py-2 text-white hover:bg-red-600" onClick={()=>removeItem(item)}>Remove</button>
              </div>  
            </div>
          ))}
        </div>
      )
    }
    </div>
  )
}

export default Whislet
