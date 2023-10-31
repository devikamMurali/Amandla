import React,{ useEffect,useState } from 'react'
import axios from'axios'
import{ useNavigate }from 'react-router-dom'
 

export default function Viewstatus(){
    const navigate = useNavigate()
    const [status,setStatus] = useState([])
    console.log(status);

useEffect(()=>{
     
    axios.get('http://localhost:1000/status/view-status').then((response)=>{
      console.log("res=======>",response);
     setStatus(response.data.details)
}).catch((err)=>{
    console.log(err);
})

},[])
return(
    <> 
     <section className="service_section layout_padding">
  <div className="container">
    <div className="d-flex justify-content-center">
      <h2 className="heading_style">Truck status</h2>
    </div>
     
    <div className="row layout_padding2-top">
    {status.map((data,key)=>(
      <div className="col-md-4">
        <div className="service_img-box s-b-1">
          <img src="asset/images/truck.png" alt="" />
          <div className="d-flex">
            <h3>Status</h3>
          </div>
        </div>
        <div className="service-detail">
        <ul>
          
          starting time:<li>{data.stime}</li>
          userlocation arrival time:<li>{data.uatime}</li>
          destination arrival time:<li>{data.datime}</li>
          


          
             
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