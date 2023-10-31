import React,{useState} from 'react'

export default function Reg() {
const [input,setInput] = useState({})
const inputChange=(Event)=>{
  const name = Event.target.name
  const value = Event.target.value
  setInput({...input,[name]:value})

}

const submit = (Event)=>{
  Event.preventDefault()
  console.log(input);
  
}

  return (
    <>
    <section className="contact_section layout_padding">
  <div className="d-flex justify-content-center">
    <h2 className="heading_style">Register</h2>
  </div>
  <div className="container layout_padding2-top">
    <div className="row">
      <div className="col-md-6">
        <div id="map" className="w-100 h-100" />
      </div>
      <div className="col-md-6">
        <div className="contact_form-container">
          <form action="">
            <div>
              <input type="text" placeholder="Your Name"
              name=" name" 
              onChange={inputChange} />
              
            </div> 
            <div>
              <input type="email" placeholder="Your Email"
              name="email" 
              onChange={inputChange} />
            </div>
            <div>
              <input type="text" placeholder="Your Phone"
               name=" phone" 
               onChange={inputChange} />
               <select  name="choose"
               onChange={inputChange} >
                    <option value="">Choose you</option>
                    < option value="1">User</option>
                    <option value="2">Driver</option>
              </select> 
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit " className="" onClick={submit}>
                Register
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
