import React,{useState} from 'react'
import { CircleX } from 'lucide-react';

function Login({onClose}) {
  const [data,setData] = useState({
    name:'',
    number:'',
    email:''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prevData) => (
      {...prevData,[name]: value}
  ))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    onClose()
    alert("Your details summitted successfully")
    
  }
  
  return (
    <div className='login'>
      <form className='loginform' onSubmit={handleSubmit} >
        <button className='close' onClick={onClose}><CircleX size={50}/></button>
        <div>name</div>
        <input type="text" placeholder='Please enter your name' name="name" value={data.name} onChange={handleChange} />
        <div>number</div>
        <input type="number" placeholder='Please enter your phone number' name="number" value={data.number} onChange={handleChange}/>
        <div>email</div>
        <input type="email" placeholder='Please enter your email id' name="email" value={data.email} onChange={handleChange}/>
        <br />
        <button className='submitbutton' type='submit'>submit</button>
      </form>
      
    </div>
  )

}
export default Login
