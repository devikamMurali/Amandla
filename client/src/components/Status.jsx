import React ,{useState}from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Status() {
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
   
  axios.post('http://localhost:1000/status',input).then((response)=>{
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
      //navigate('');
   
    }
  }).catch((error)=>{
    console.log(error);
  })
}
 



  return (
    <>
    <ToastContainer/>
    <section className="contact_section layout_padding">
  <div className="d-flex justify-content-center">
    <h2 className="heading_style">Status</h2>
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
                <h8> Truck starting time:</h8>
              <input type="time" placeholder="time" 
              name="stime"
              onChange={inputChange}/>
            </div>
            <div>
                <h8>User location arrival time:</h8>
              <input type="time" placeholder="time"
              name="uatime"
              onChange={inputChange} />
            </div>
            <div>
                <h8> Destination arrival time:</h8>
              <input type="time" placeholder="Time"
              name="datime"
              onChange={inputChange} />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit " className="" onClick={submit}>
                SUBMIT
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

