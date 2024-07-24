import React, { useEffect } from 'react'
import {useState} from 'react'
import Cart from './Cart'



function Gridd() {
  
  const [pairs,setPairs] = useState([
    {id:1, name: 'white shirt',quantity:1, price:799, image:'/src/images/s1.jpeg'},
    {id:2, name: 'Black shirt',quantity:1, price:1299, image:'../src/images/s2.jpeg'},
    {id:3, name: 'grey checks',quantity:1, price:999, image:'../src/images/s3.jpeg'},
    {id:4, name: 'Blue shirt',quantity:1, price:1499, image:'../src/images/s4.jpeg'},
    {id:5, name: 'Dark shirt',quantity:1, price:899, image:'../src/images/s5.jpeg'},
    {id:6, name: 'dark green',quantity:1, price:1199, image:'../src/images/s6.jpeg'},
    {id:7, name: 'Violet dress',quantity:1, price:899, image:'../src/images/w1.jpeg'},
    {id:8, name: 'Dark blue',quantity:1, price:1399, image:'../src/images/w2.jpeg'},
    {id:9, name: 'Navy blue',quantity:1, price:849, image:'../src/images/w3.jpeg'},
    {id:10, name: 'Blue,White',quantity:1, price:1199, image:'../src/images/w4.jpeg'},
    {id:11, name: 'Grey dress',quantity:1, price:699, image:'../src/images/w5.jpeg'},
    {id:12, name: 'Pink, Blue',quantity:1, price:1699, image:'../src/images/w6.jpeg'},
    {id:13, name: 'Grey dress',quantity:1, price:1399, image:'../src/images/k1.jpeg'},
    {id:14, name: 'Violet dress',quantity:1, price:1499, image:'../src/images/k2.jpeg'},
    {id:15, name: 'Red dress',quantity:1, price:899, image:'../src/images/k3.jpeg'},
    {id:16, name: 'Pink dress',quantity:1, price:1299, image:'../src/images/k4.jpeg'},
    {id:17, name: 'Layer dress',quantity:1, price:1699, image:'../src/images/k5.jpeg'},
    {id:18, name: 'Pink dress',quantity:1, price:1499, image:'../src/images/k6.jpeg'},
    {id:19, name: 'Pink stick',quantity:1, price:599, image:'../src/images/b1.jpeg'},
    {id:20, name: 'Body sprey',quantity:1, price:799, image:'../src/images/b2.jpeg'},
    {id:21, name: 'Pink sprey',quantity:1, price:699, image:'../src/images/b3.jpeg'},
    {id:22, name: 'Gold stick',quantity:1, price:399, image:'../src/images/b4.jpeg'},
    {id:23, name: 'Blue sprey',quantity:1, price:499, image:'../src/images/b5.jpeg'},
    {id:24, name: 'Violet dress',quantity:1, price:299, image:'../src/images/b6.jpeg'}
  ])


  const quant = (id, action) => {
    setPairs((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === 'inc' && item.quantity < 10
                  ? item.quantity + 1
                  : action === 'dec' && item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity
            }
          : item
      )
    )
  }
  const [arr,setArr] = useState([])
  
  const subst = (id, name, quantity, price,image) => {
    
    setArr((preState) => {
      const itemExists = preState.find(item => item.id === id)

      if (itemExists) {
        return preState.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        
        return [...preState, { id, name, quantity,price,image }]
      }
      
    })
    
  }
  const deleteItem=(id)=>{
    setArr(arr.filter((item)=>item.id!==id))
  }

  const emptyArray=()=>{
      setArr([])
  }

  
  return (
    <div>
    <div id='men' >
      <p className='heading'>MEN'S WEAR</p>
    <div className='grid'>
      {pairs.filter(pair => pair.id <= 6).map((pair) => (
        <div className='boxes' key={pair.id}>
          <div><img className="images" src={pair.image} alt="" /></div>
        <div className='item'>{pair.name}</div>
        <div className='value'>
          <button className='minus' onClick={() => quant(pair.id, 'dec')}>-</button>
          <h1 className='one'>{pair.quantity}</h1>
          <button className='plus' onClick={() => quant(pair.id, 'inc')}>+</button>
        </div>
        <div className='price'>{pair.price}/-</div>
        <button className='cart' onClick={()=>subst(pair.id,pair.name,pair.quantity,pair.price,pair.image)}>Add to cart</button>
        </div>
      ))}
    </div>
    </div>

    <div id='women' >
      <p className='heading'>WOMEN'S WEAR</p>
    <div className='grid'>
      {pairs.filter(pair => pair.id >= 7 && pair.id<=12).map((pair) => (
        <div className='boxes' key={pair.id}>
          <div><img className="images" src={pair.image} alt="" /></div>
        <div className='item'>{pair.name}</div>
        <div className='value'>
          <button className='minus' onClick={() => quant(pair.id, 'dec')}>-</button>
          <h1 className='one'>{pair.quantity}</h1>
          <button className='plus' onClick={() => quant(pair.id, 'inc')}>+</button>
        </div>
        <div className='price'>{pair.price}/-</div>
        <button className='cart' onClick={()=>subst(pair.id,pair.name,pair.quantity,pair.price,pair.image)}>Add to cart</button>
        </div>
      ))}
    </div>
    </div>

    <div id='kids' >
      <p className='heading'>KID'S WEAR</p>
    <div className='grid'>
      {pairs.filter(pair => pair.id >= 13 && pair.id<=18).map((pair) => (
        <div className='boxes' key={pair.id}>
          <div><img className="images" src={pair.image} alt="" /></div>
        <div className='item'>{pair.name}</div>
        <div className='value'>
          <button className='minus' onClick={() => quant(pair.id, 'dec')}>-</button>
          <h1 className='one'>{pair.quantity}</h1>
          <button className='plus' onClick={() => quant(pair.id, 'inc')}>+</button>
        </div>
        <div className='price'>{pair.price}/-</div>
        <button className='cart' onClick={()=>subst(pair.id,pair.name,pair.quantity,pair.price,pair.image)}>Add to cart</button>
        </div>
      ))}
    </div>
    </div>
      
    <div id='beauty' >
      <p className='heading'>BEAUTY</p>
    <div className='grid'>
      {pairs.filter(pair => pair.id >= 19 && pair.id<=24).map((pair) => (
        <div className='boxes' key={pair.id}>
          <div><img className="images" src={pair.image} alt="" /></div>
        <div className='item'>{pair.name}</div>
        <div className='value'>
          <button className='minus' onClick={() => quant(pair.id, 'dec')}>-</button>
          <h1 className='one'>{pair.quantity}</h1>
          <button className='plus' onClick={() => quant(pair.id, 'inc')}>+</button>
        </div>
        <div className='price'>{pair.price}/-</div>
        <button className='cart' onClick={()=>subst(pair.id,pair.name,pair.quantity,pair.price,pair.image)}>Add to cart</button>
        </div>
      ))}
    </div>
    </div>
      
    <Cart items={arr} emptyArray={emptyArray} deleteItem={deleteItem}/>
    </div> 
  )
}

export default Gridd
