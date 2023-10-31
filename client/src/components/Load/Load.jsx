import React, {useState} from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Load() {
  const {id} =useParams()
  const user_id = localStorage.getItem('user_id')

  //const navigate = useNavigate()
  const [input,setInput] = useState({
    user_id:user_id,
    truck_id:id

  })
  //console.log("input",input);
  const inputChange=(e)=>{
    const name = e.target.name
    const value = e.target.value  
    setInput({...input,[name]:value})
  
  }

  const submit = (e)=>{
    e.preventDefault()
    console.log(input);
    axios.post('http://localhost:1000/load',input).then((response)=>{
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
    <h2 className="heading_style">Book</h2>
  </div>
  <div className="container layout_padding2-top">
    <div className="row">
      <div className="col-md-6">
        
      </div>
      <div className="col-md-6">
        <div className="contact_form-container">
          <form action="">
          <div>
              <input type="text" placeholder="Load type" required="required"
              name="loadtype"
              onChange={inputChange} />
            </div>

            <div>
              <input type="text" placeholder="Load weight" required="required"
              name="loadweight"
              onChange={inputChange} />
            </div>
            <div>
              <input type="text" placeholder="Load_From" required="required"
              name="load_from"
              onChange={inputChange} />
            </div>
            <div>
                <input type="text" placeholder="Load_To" required="required"
                name="load_to"
                onChange={inputChange}/>
            </div>
            <div>
              <input type="Date" placeholder="Booking Date"
              name="Date"
              onChange={inputChange}  />
            </div>
            <div>
              <input type="time" placeholder="Booking Time"
              name="Time"
              onChange={inputChange}  />
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


