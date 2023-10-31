import React,{useState} from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom'
export default function Contact() {
  //const navigate = useNavigate()
  const [input,setInput] = useState({})
  const inputChange=(e)=>{
    const name = e.target.name
    const value = e.target.value  
    setInput({...input,[name]:value})
  
  }
  const submit = (e)=>{
    e.preventDefault()
    console.log(input);
    axios.post('http://localhost:1000/contact',input).then((response)=>{
      console.log("res=======>",response.data);
      if(response.data.success===true){
        //navigate('');
    
      }
    }).catch((error)=>{
      console.log(error);
    })
  }


  return (
    <>
    <section className="contact_section layout_padding">
  <div className="d-flex justify-content-center">
    <h2 className="heading_style">Contact us</h2>
  </div>
  <div className="container layout_padding2-top">
    <div className="row">
      <div className="col-md-6">
        <div id="map" className="h-100 w-100" />
      </div>
      <div className="col-md-6">
        <div className="contact_form-container">
          <form action="">
            <div>
              <input type="text" placeholder="Your Name" 
              name="name"
              onChange={inputChange} />
            </div>
            <div>
              <input type="email" placeholder="Your Email"
              name="email"
              onChange={inputChange} />
            </div>
            <div>
              <input type="text" placeholder="Your Phone" 
              name="phone"
              onChange={inputChange}/>
            </div>
            <div>
              <input
                type="text"
                className="message_input"
                placeholder="Message"
                name="message"
                onChange={inputChange}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit " className="" onClick={submit}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    
    
    </>
  )
}
