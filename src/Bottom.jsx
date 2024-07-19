import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Bottom() {
  const [emails,setEmails] = useState("")
  const [newemail,setNewemail] = useState("")
  const notify = () => toast.success("Your mail submitted successsfully");
  
  const submission=(event)=>{
    setEmails(event.target.value)
  }
  const usermail=(e)=>{
    console.log(emails)
    e.preventDefault()
    setNewemail(emails)
    notify()
    
  }
  return (
    <div className='bottoms'>
      <div className='subscribe'>
        <h1>Subscribe to our awesome emails.</h1>
        <h2>Get our latest offers and news straight in your in box.</h2>
        <ToastContainer />
        <form onSubmit={usermail} >
          <input className='email' type="email" placeholder='Please enter an email address' onChange={submission} />
          <button className='subs' type='submit'>Subscribe</button>

        </form>
      </div>
      <div className='download'>
        <div>
          <h1>Download our apps</h1>
          <h2>shop our products and offers on-the-go.</h2>
        </div>
        <div className='play'>
          <a href="https://play.google.com/store/apps?hl=en_IN" target="_blank"><img className='plays' src="../src/images/playstore.png" alt="" /></a>
          <a href="https://www.apple.com/in/app-store/ " target="_blank"><img className='plays' src="../src/images/appstore.png" alt="" /></a>
        </div>
      </div>
        
    </div>
  )
}

export default Bottom
