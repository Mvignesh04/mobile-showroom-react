import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Logo from '../assets/Logo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import style from './Style.module.css'
const Nav = ({count}) => {
    let [state,setState] = useState(false);
    let [profile,setProfile] = useState(false)
  let demo = useRef();
  let negivate = useNavigate()
  let handle = ()=>{
        setState(!state)
        console.log(demo.current);
        demo.current.style.display=state?"block":"none"
  }
  return (
    <div>
      <nav className={style.title}>
           <aside className='flex'><img className='w-20 h-11 ' src={Logo} alt="" onClick={handle}/> <span className='mt-2'><b>Mana Moblies</b></span> </aside>
           <aside className='flex gap-10 mt-2'> 
            <Link to="/Catogo"><Inventory2Icon ></Inventory2Icon></Link>
            <Link to="/Cart"><ShoppingCartIcon></ShoppingCartIcon></Link>
            <Link to="/Whislet"><FavoriteIcon></FavoriteIcon>{count}</Link>
            <Link to="/Profile" onMouseEnter={()=>{setProfile(!profile)}}><PersonIcon></PersonIcon></Link>
            </aside>
         </nav>
         {profile && <div className='pl-350'>
          {profile?<h6 onClick={()=>{negivate('./')}}>LogOut</h6>
          :<h6>Login</h6>}
          </div>}
         {state && <aside ref={demo} onClick={handle}><CloseIcon className='bg-red-200 ml-30'></CloseIcon>
          <ol className={style.sidebar}>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Catogo">Catogo</Link></li>
            <li><Link to="/Cart">Cart</Link></li>
            <li><Link to="/Whislet">Whislet</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
          </ol>
         </aside>}
    </div>
  )
}

export default Nav
