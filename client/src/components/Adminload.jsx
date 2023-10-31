import React,{ useEffect,useState } from 'react'
import axios from'axios'
import{ useNavigate }from 'react-router-dom'
 

export default function Adminload(){
    const navigate = useNavigate()
    const [load,setLoad] = useState([])
    console.log(load);

useEffect(()=>{
     
    axios.get('http://localhost:1000/admin/view-load').then((response)=>{
      //console.log("res=======>",response.data);
     setLoad(response.data.details)
}).catch((err)=>{
    console.log(err);
})

},[])
 

return(
    <>
  
     <section className="service_section layout_padding">
  <div className="container">
    <div className="d-flex justify-content-center">
      <h2 className="heading_style">Booked Loads </h2>
    </div>
     
    <div className="row layout_padding2-top">
    {load.map((data,key)=>(
      <div className="col-md-4">
        <div className="service_img-box s-b-1">
          <img src="asset/images/service-1.jpg" alt="" />
          <div className="d-flex">
            <h3>DETAILS</h3>
          </div>
        </div>
        <div className="service-detail">
          <ul>
             <li>{data.loadtype}</li>
            <li>{data.loadweight}</li>
            <li>{data.load_from}</li>
            <li>{data.load_to}</li>
            <li>{data.date}</li>
            <li>{data.time}</li>
          </ul>
           
           
        </div>
      </div>
    
    ))}
  </div>
  </div>
</section>

  
  
   
  

</>
)
    }