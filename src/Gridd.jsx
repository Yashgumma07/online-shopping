import React from 'react'
import {useState} from 'react'


function Gridd() {
  const [number,setNumber] = useState({
    name1: 'White shirt',s1: 1,p1: 799,
    name2: 'Black shirt',s2: 1,p2: 1299,
    name3: 'grey checks',s3: 1,p3: 999,
    name4: 'Blue shirt',s4: 1,p4: 1499,
    name5: 'Dark shirt',s5: 1,p5: 899,
    name6: 'Dark green',s6: 1,p6: 1199,

    names1: 'Violet dress',w1: 1,c1: 1299,
    names2: 'Dark blue',w2: 1,c2: 699,
    names3: 'Navy blue',w3: 1,c3: 1199,
    names4: 'Blue,White',w4: 1,c4: 799,
    names5: 'Grey dress',w5: 1,c5: 999,
    names6: 'Pink, Blue',w6: 1,c6: 1799,

    nam1: 'Grey dress',k1: 1,a1: 1399,
    nam2: 'Violet dress',k2: 1,a2: 899,
    nam3: 'Red dress',k3: 1,a3: 999,
    nam4: 'Pink dress',k4: 1,a4: 1299,
    nam5: 'Layer dress',k5: 1,a5: 1699,
    nam6: 'Pink dress',k6: 1,a6: 1499,

    na1: 'Pink stick',b1: 1,d1: 599,
    na2: 'Body sprey',b2: 1,d2: 799,
    na3: 'Pink sprey',b3: 1,d3: 699,
    na4: 'Gold stick',b4: 1,d4: 399,
    na5: 'Blue sprey',b5: 1,d5: 499,
    na6: 'Pink brush',b6: 1,d6: 299,

    
  })
  const quantity =(item,action)=>{
    setNumber((preState)=>{
      return{
        ...preState, 
        [item]: action === 'inc'
        ? number[item]+1 
        : number[item]-1 
      }
    }) 
  }
  
  
  
  return (
    <div>
    <div id='men' >
      <p className='heading'>MEN'S WEAR</p>
    <div className='grid'>
      <div className='boxes'>
        <div><img className="images" src="../src/images/s1.jpeg" alt="" /></div>
        <div className='item'>{number.name1}</div>
        <div className='value'>
          <button disabled={number.s1<=1} onClick={()=>quantity('s1','dec')} className='minus'>-</button>
          <h1 className='one'>{number.s1}</h1>
          <button onClick={()=>quantity('s1','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.p1}/-</div>
        <div className='cart'>Add to Cart</div> 
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/s2.jpeg" alt="" /></div>
        <div className='item'>{number.name2}</div>
        <div className='value'>
          <button disabled={number.s2<=1} onClick={()=>quantity('s2','dec')} className='minus'>-</button>
          <h1 className='one'>{number.s2}</h1>
          <button onClick={()=>quantity('s2','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.p2}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/s3.jpeg" alt="" /></div>
        <div className='item'>{number.name3}</div>
        <div className='value'>
          <button disabled={number.s3<=1} onClick={()=>quantity('s3','dec')} className='minus'>-</button>
          <h1 className='one'>{number.s3}</h1>
          <button onClick={()=>quantity('s3','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.p3}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/s4.jpeg" alt="" /></div>
        <div className='item'>{number.name4}</div>
        <div className='value'>
          <button disabled={number.s4<=1} onClick={()=>quantity('s4','dec')} className='minus'>-</button>
          <h1 className='one'>{number.s4}</h1>
          <button onClick={()=>quantity('s4','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.p4}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/s5.jpeg" alt="" /></div>
        <div className='item'>{number.name5}</div>
        <div className='value'>
          <button disabled={number.s5<=1} onClick={()=>quantity('s5','dec')} className='minus'>-</button>
          <h1 className='one'>{number.s5}</h1>
          <button onClick={()=>quantity('s5','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.p5}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/s6.jpeg" alt="" /></div>
        <div className='item'>{number.name6}</div>
        <div className='value'>
          <button disabled={number.s6<=1} onClick={()=>quantity('s6','dec')} className='minus'>-</button>
          <h1 className='one'>{number.s6}</h1>
          <button onClick={()=>quantity('s6','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.p6}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>
      
    </div>
    </div>


    <div id='women'>
    <p className='heading'>WOMEN'S WEAR</p>
    <div className='grid'>
      <div className='boxes'>
        <div><img className="images" src="../src/images/w1.jpeg" alt="" /></div>
        <div className='item'>{number.names1}</div>
        <div className='value'>
          <button disabled={number.w1<=1} onClick={()=>quantity('w1','dec')} className='minus'>-</button>
          <h1 className='one'>{number.w1}</h1>
          <button onClick={()=>quantity('w1','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.c1}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/w2.jpeg" alt="" /></div>
        <div className='item'>{number.names2}</div>
        <div className='value'>
          <button disabled={number.w2<=1} onClick={()=>quantity('w2','dec')} className='minus'>-</button>
          <h1 className='one'>{number.w2}</h1>
          <button onClick={()=>quantity('w2','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.c2}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/w3.jpeg" alt="" /></div>
        <div className='item'>{number.names3}</div>
        <div className='value'>
          <button disabled={number.w3<=1} onClick={()=>quantity('w3','dec')} className='minus'>-</button>
          <h1 className='one'>{number.w3}</h1>
          <button onClick={()=>quantity('w3','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.c3}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/w4.jpeg" alt="" /></div>
        <div className='item'>{number.names4}</div>
        <div className='value'>
          <button disabled={number.w4<=1} onClick={()=>quantity('w4','dec')} className='minus'>-</button>
          <h1 className='one'>{number.w4}</h1>
          <button onClick={()=>quantity('w4','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.c4}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/w5.jpeg" alt="" /></div>
        <div className='item'>{number.names5}</div>
        <div className='value'>
          <button disabled={number.w5<=1} onClick={()=>quantity('w5','dec')} className='minus'>-</button>
          <h1 className='one'>{number.w5}</h1>
          <button onClick={()=>quantity('w5','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.c5}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/w6.jpeg" alt="" /></div>
        <div className='item'>{number.names6}</div>
        <div className='value'>
          <button disabled={number.w6<=1} onClick={()=>quantity('w6','dec')} className='minus'>-</button>
          <h1 className='one'>{number.w6}</h1>
          <button onClick={()=>quantity('w6','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.c6}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>
    </div>
    </div>


    <div id='kids'>
    <p className='heading'>KID'S WEAR</p>
    <div className='grid'>
      <div className='boxes'>
        <div><img className="images" src="../src/images/k1.jpeg" alt="" /></div>
        <div className='item'>{number.nam1}</div>
        <div className='value'>
          <button disabled={number.k1<=1} onClick={()=>quantity('k1','dec')} className='minus'>-</button>
          <h1 className='one'>{number.k1}</h1>
          <button onClick={()=>quantity('k1','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.a1}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/k2.jpeg" alt="" /></div>
        <div className='item'>{number.nam2}</div>
        <div className='value'>
          <button disabled={number.k2<=1} onClick={()=>quantity('k2','dec')} className='minus'>-</button>
          <h1 className='one'>{number.k2}</h1>
          <button onClick={()=>quantity('k2','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.a2}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/k3.jpeg" alt="" /></div>
        <div className='item'>{number.nam3}</div>
        <div className='value'>
          <button disabled={number.k3<=1} onClick={()=>quantity('k3','dec')} className='minus'>-</button>
          <h1 className='one'>{number.k3}</h1>
          <button onClick={()=>quantity('k3','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.a3}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/k4.jpeg" alt="" /></div>
        <div className='item'>{number.nam4}</div>
        <div className='value'>
          <button disabled={number.k4<=1} onClick={()=>quantity('k4','dec')} className='minus'>-</button>
          <h1 className='one'>{number.k4}</h1>
          <button onClick={()=>quantity('k4','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.a4}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/k5.jpeg" alt="" /></div>
        <div className='item'>{number.nam5}</div>
        <div className='value'>
          <button disabled={number.k5<=1} onClick={()=>quantity('k5','dec')} className='minus'>-</button>
          <h1 className='one'>{number.k5}</h1>
          <button onClick={()=>quantity('k5','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.a5}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/k6.jpeg" alt="" /></div>
        <div className='item'>{number.nam6}</div>
        <div className='value'>
          <button disabled={number.k6<=1} onClick={()=>quantity('k6','dec')} className='minus'>-</button>
          <h1 className='one'>{number.k6}</h1>
          <button onClick={()=>quantity('k6','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.a6}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>
    </div>
    </div>


    <div id='beauty'>
    <p className='heading'>BEAUTY</p>
    <div className='grid'>
      <div className='boxes'>
        <div><img className="images" src="../src/images/b1.jpeg" alt="" /></div>
        <div className='item'>{number.na1}</div>
        <div className='value'>
          <button disabled={number.b1<=1} onClick={()=>quantity('b1','dec')} className='minus'>-</button>
          <h1 className='one'>{number.b1}</h1>
          <button onClick={()=>quantity('b1','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.d1}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/b2.jpeg" alt="" /></div>
        <div className='item'>{number.na2}</div>
        <div className='value'>
          <button disabled={number.b2<=1} onClick={()=>quantity('b2','dec')} className='minus'>-</button>
          <h1 className='one'>{number.b2}</h1>
          <button onClick={()=>quantity('b2','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.d2}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/b3.jpeg" alt="" /></div>
        <div className='item'>{number.na3}</div>
        <div className='value'>
          <button disabled={number.b3<=1} onClick={()=>quantity('b3','dec')} className='minus'>-</button>
          <h1 className='one'>{number.b3}</h1>
          <button onClick={()=>quantity('b3','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.d3}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/b4.jpeg" alt="" /></div>
        <div className='item'>{number.na4}</div>
        <div className='value'>
          <button disabled={number.b4<=1} onClick={()=>quantity('b4','dec')} className='minus'>-</button>
          <h1 className='one'>{number.b4}</h1>
          <button onClick={()=>quantity('b4','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.d4}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/b5.jpeg" alt="" /></div>
        <div className='item'>{number.na5}</div>
        <div className='value'>
          <button disabled={number.b5<=1} onClick={()=>quantity('b5','dec')} className='minus'>-</button>
          <h1 className='one'>{number.b5}</h1>
          <button onClick={()=>quantity('b5','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.d5}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>

      <div className='boxes'>
        <div><img className="images" src="../src/images/b6.jpeg" alt="" /></div>
        <div className='item'>{number.na6}</div>
        <div className='value'>
          <button disabled={number.b6<=1} onClick={()=>quantity('b6','dec')} className='minus'>-</button>
          <h1 className='one'>{number.b6}</h1>
          <button onClick={()=>quantity('b6','inc')} className='plus'>+</button>
        </div>
        <div className='price'>{number.d6}/-</div>
        <div className='cart'>Add to Cart</div>
      </div>
    </div>
    </div>
    </div>
    
  )
}

export default Gridd
