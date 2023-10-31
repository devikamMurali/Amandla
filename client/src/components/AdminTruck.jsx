import React,{ useEffect,useState } from 'react'
import axios from'axios'
import{ useNavigate }from 'react-router-dom'
 

export default function AdminTruck(){
    const navigate = useNavigate()
    const [truck,setTruck] = useState([])
    console.log(truck);

useEffect(()=>{
     
    axios.get('http://localhost:1000/admin/view-truck').then((response)=>{
      //console.log("res=======>",response.data);
     setTruck(response.data.details)
}).catch((err)=>{
    console.log(err);
})

},[])
 
  

return(
    <>
     
     <section className="service_section layout_padding">
  <div className="container">
    <div className="d-flex justify-content-center">
      <h2 className="heading_style">Truck List</h2>
    </div>
     
    <div className="row layout_padding2-top">
    {truck.map((data,key)=>(
      <div className="col-md-4">
        <div className="service_img-box s-b-1">
          <img src="asset/images/truck.png" alt="" />
          <div className="d-flex">
            <h3>DETAILS</h3>
          </div>
        </div>
        <div className="service-detail">
        <ul>
          
          trucktype:<li>{data.trucktype}</li>
          capacity:<li>{data.capacity}</li>
          image:<li>{data.photo}</li>
          truckno:<li>{data.truckno}</li>
          from:<li>{data.From}</li>
          to:<li>{data.To}</li>

          


          
             
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