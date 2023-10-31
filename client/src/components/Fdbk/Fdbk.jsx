import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Fdbk() {

const navigate = useNavigate()
const [input,setInput] = useState({})
const inputChange=(e)=>{
  const name = e.target.name
  const value = e.target.value  
  setInput({...input,[name]:value})

}
const submit = (e)=>{
  e.preventDefault()
  console.log(input);
  axios.post('http://localhost:1000/feedback',input).then((response)=>{
    console.log("res=======>",response.data);
    if(response.data.success===true){
      navigate('/feedbackview');
  
    }
  }).catch((error)=>{
    console.log(error);
  })
}
  return (
    <>
    <section className="contact_section layout_padding">
  <div className="d-flex justify-content-center">
    <h2 className="heading_style">Feedback</h2>
  </div>
  <div className="container layout_padding2-top">
    <div className="row">
      <div className="col-md-6">
        <div>
        <img src="asset/images/blog2.jpg" alt="" className="img-fluid" />
      </div>
      </div>
      <div className="col-md-6">
        <div className="contact_form-container">
          <form action="">
            <div>
              <input type="date" placeholder="Date" 
              name="date"
              onChange={inputChange}/>
            </div>
            <div>
              <input type="time" placeholder="Time"
              name="time"
              onChange={inputChange} />
            </div>
            
            
            <div>
              <input
                type="text"
                className="message_input"
                placeholder="Content"
                name="content"
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
