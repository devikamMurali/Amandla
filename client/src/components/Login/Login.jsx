import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate()
  const [input,setInput] = useState({
    username:"",
    password:"",
    role:"",

  })
  const[formErrors,setFormErrors] = useState({});
  const[isSubmit,setIsSubmit] =useState(false);
  

  const inputChange=(Event)=>{
    const name = Event.target.name
    const value = Event.target.value
    setInput({...input,[name]:value})
    //console.log(input);
  }
  
  const submit = (Event)=>{
    console.log("hiiiij");
    Event.preventDefault()
}
  const handleinputchange=(e)=>{
    const[name,value]=e.target
    setInput({...input,[name]:value})
    console.log(input);
      
     
  }
  const validate = (values)=>{
    var error={}
    if(!values.name){
      error.username ="enter username"}
      if(!values.password){
        error.password = "enter password"
      }
      return error
    }
    const validation = (e) =>{
      e.preventDefault();
      setFormErrors(validate(input))
      setIsSubmit(true)
      if(Object.keys(formErrors).length==0&&isSubmit)
    {
    
    }
      console.log('hai',input);
      axios.post('http://localhost:1000/login',input).then((response)=>{
      console.log("res======>",response.data);
      console.log(response.data.success);
      console.log(response.data);
      if(response.data.success===true){
        if(response.data.role==0){
          navigate('/admin')
       }
      
        if(response.data.role==1){
          if(response.data.status==0){
            toast.error(' waiting for admins approval', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            }else{ 
              console.log(response.data);
              localStorage.setItem('loginId',response.data.login_id)
              localStorage.setItem('user_id',response.data.user_id)
              localStorage.setItem('role',response.data.role)
            navigate('/User')
        }
      }
        if(response.data.role==2){
          if(response.data.status==0){
            toast.error(' waiting for admins approval', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            }else{
              console.log(response.data.driver_id);
              localStorage.setItem('loginId',response.data.login_id)
              localStorage.setItem('driver_id',response.data.driver_id)
              localStorage.setItem('role',response.data.role)

           navigate('/Driver')
        }
      }
    
        
      
        }
    }).catch((err)=>{
      console.log(err);
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
    
    }
  
  

  return (
    <>
    <ToastContainer/>
    <section className="contact_section layout_padding">
  <div className="d-flex justify-content-center">
    <h2 className="heading_style">LOGIN</h2>
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
            <span style={{color:'red'}}>{formErrors?.username}</span>
              <input type="text" placeholder="User Name"
               required="required"
               name="username"
               onChange={inputChange}
               />
               
            </div>
            <div>
            <span style={{color:'red'}}>{formErrors?.password}</span>
              <input type="password" placeholder="Enter Your Password"
              name="password"
              onChange={inputChange} />
              
            </div>
            
            <div className="d-flex justify-content-end">
              
              <  button type="submit" onClick={validation}>
                Login
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
