import React, { useEffect } from 'react';
import { Link} from 'react-scroll';

function Topp() {
  return (
    <div className='toopp'>
      <div className='logo'>
        <img src='../src/images/ShopLogo.png' alt='logo' />
      </div>
      <div className='center'>
        <ul>
          <li><Link to='home' smooth={true} duration={1000}>HOME</Link></li>
          <li><Link to='men' smooth={true} duration={1000}>MEN</Link></li>
          <li><Link to='women' smooth={true} duration={1000}>WOMEN</Link></li>
          <li><Link to='kids' smooth={true} duration={1000}>KIDS</Link></li>
          <li><Link to='beauty' smooth={true} duration={1000}>BEAUTY</Link></li>
        </ul>
      </div>
      <div>
        <input className='search' type="text" placeholder='Search' />
      </div>
      <div className='sign'>
        SignUp/LogIn
      </div>
      <div className='wisher'>
        <div><img className='wish' src="../src/images/wish.png" alt="" /></div>
        <div className='wishlist'>Wishlist</div>
      </div>
      <div className='wisher'>
        <div><img className='bag' src="../src/images/bag.png" alt="" /></div>
        <div className='wishlist'>Bag</div>
      </div>
      
      
    </div>
  )
}

export default Topp
