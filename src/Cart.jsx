import React,{useState,useEffect} from 'react'
import { Trash2 } from 'lucide-react';

const Cart = ({ items = [] ,emptyArray,deleteItem}) => {
const [totalBill, setTotalBill] = useState(0)

  useEffect(() => {
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0)
    setTotalBill(total)
    }, [items])

  return (
    <div id='cart' className='cartmain'>
      <div className='carthead'>CART</div>
      <div className='cartitems'>
        {items.length > 0 ? (
        items.map((item) => (
          <div className='cartbox' key={item.id} >
            
            <div className='cartimages'>
              <img className='cartimage' src={item.image} alt=''/>
              <div className='floating'>
                <button className='deletebutton' onClick={()=>deleteItem(item.id)}>
                  <img src='../src/images/bin2.png' />
                </button>
              </div>
            </div>
            <p><strong>{item.name}</strong></p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
            <p className='netv'>NET VALUE</p>
            <div className='netvalue'>{item.quantity*item.price}/-</div>
            
          </div>
        ))
      ) : (
        <img className='emptycart' src='../src/images/emptycart.webp' />
        
      )}
      </div>
      <div className='billmain'>
        <div className='billhead'>TOTAL BILL VALUE</div>
        <div className='arrow'><img src="../src/images/rightarrow.png" alt="" /></div>
        <div className='billvalue'>
          <img className='line' src="../src/images/hlines.png" alt="" />
          <br />
          <p className='totalbill'>{totalBill}/-</p>
          <br />
          <img className='line' src="../src/images/hlines.png" alt="" />
        </div>
        <div className='clearmain'>
          <button onClick={emptyArray} className='clearbutton'><Trash2 className='bin'/><br />CLEAR CART</button>
        </div>
      </div>
      
      
    </div>
  )
}

export default Cart;
