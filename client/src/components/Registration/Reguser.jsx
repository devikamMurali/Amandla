import React,{ useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Reguser() {
  const navigate = useNavigate()
  const [input,setInput] = useState({
    email:"",
    address:"",
    phone:"",
    username:"",
    password:"",
  })
  const[formErrors,setFormErrors] = useState({});
  const[isSubmit,setIsSubmit] =useState(false);

  const inputChange=(Event)=>{
    const name = Event.target.name
    const value = Event.target.value  
    setInput({...input,[name]:value})
  
  }

  const submit = (e)=>{
    e.preventDefault()
  }
    const handleinputchange=(e)=>{
      const[name,value]=e.target
      setInput({...input,[name]:value})
     console.log(input);
    }
    const validate = (values)=>{
      var errors={};
      const reguser = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var phoneno = /^[6-9]\d{9}$/;
      //let strongPassword = new reguser('(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{8,})')
      if(!values.name){
        errors.username ="enter username"}
        if(!values.password){
          errors.password = "enter password"
        } 
        if(!values.email){
          errors.email ="enter mail";}
          else if(!
            reguser.test(values.email)
          ){errors.email = "this is not a valid email format!";}
          if(!values.phone){
            errors.phone ="Contact number is required!";}
            else if(!
              phoneno.test(values.phone)){
                errors.phone = "Enter valid contact number"
              }
            if(!values.address){
              errors.address ="enter address"}
            
        return errors
      } 
      const validation = (e)=>{
        e.preventDefault();
        setFormErrors(validate(input))
        setIsSubmit(true)
        if(Object.keys(formErrors).length==0&&isSubmit)
      {
       
    axios.post('http://localhost:1000/register/registeruser',input).then((response)=>{
      console.log("res=======>",response.data);
      if(response.data.success===true){
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          setTimeout(function(){
           navigate('/login')
          },50);
      }
    
      
    }).catch((error)=>{
      console.log(error);
    })
  }
}
  
  return (
    <>
    <ToastContainer/>
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
              name="name"
              onChange={inputChange} />
            </div>
            <div>
            <div>
            <div className="col-md-6">
            <span style={{color:'red'}}>{formErrors?.address}</span>
                <textarea name="address" rows={4} cols={60}  placeholder="address" maxlength={100} defaultvalue={""}
                onChange={inputChange}/>
              
            </div>
            </div>
            <span style={{color:'red'}}>{formErrors?.email}</span>
              <input type="email" placeholder="Your Email"
              name="email"
              onChange={inputChange}  />
             
            </div>
            <div>
            <span style={{color:'red'}}>{formErrors?.phone}</span>
              <input type="text" placeholder="Your Phone"
              name="phone"
              onChange={inputChange}  />
              
            </div>
            <div> 
            <span style={{color:'red'}}>{formErrors?.username}</span>
                <input type="text" placeholder="username"
                 name="username"
                 onChange={inputChange} />
                
              </div>
              <div>
              <span style={{color:'red'}}>{formErrors?.password}</span>
                <input type="password" placeholder="password"
                name="password"
                onChange={inputChange} />
                
              </div>
            <div className="d-flex justify-content-end">
              <button type="submit " className="" onClick={validation}>
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
