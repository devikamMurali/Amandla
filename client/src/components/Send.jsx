import React ,{useState}from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom'


export default function Send() {
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
   
  axios.post('http://localhost:1000/send').then((response)=>{
    console.log("res=======>",response);
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
    <h2 className="heading_style">Request</h2>
  </div>
  <div className="container layout_padding2-top">
    <div className="row">
      <div className="col-md-6">
        <div id="map" className="w-100 h-100" />
      </div>
      <div className="col-md-6">
        <div className="contact_form-container">
          <form action="">
          <div className="col-md-6">
         
         <textarea name="request for contact" rows={4} cols={60}  placeholder="Request for contact.." maxlength={100} defaultvalue={"contact"}
   
     
         onChange={inputChange}/>
          
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
 