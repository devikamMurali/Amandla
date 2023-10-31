import React,{ useEffect,useState } from 'react'
import axios from'axios'
import{Link }from 'react-router-dom'

export default function Truckview(){
    //const navigate = useNavigate()
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
<section className="shop_section layout_padding">
  <div className="container">
    <div className="d-flex justify-content-center">
      <h2 className="heading_style">View vehicle List</h2>
    </div>
    {truck.map((data,key)=>(
    <div className="row">
      <div className="col-md-6">
        <div className="d-flex align-items-center h-100">
          <div className="shop-detail">
            <h5>1</h5>
        <ul>
               Trucktype:<li>{data.trucktype}</li>
               capacity:<li>{data.capacity}</li>
               image:<li>{data.photo}</li>
               Truck no:<li>{data.truckno}</li>
               from:<li>{data.From}</li>
               to:<li>{data.To}</li>
               <li>{data._id}</li>
           </ul> 
           <div className="d-flex justify-content-end">
  <Link className="service-btn" to={`/load/${data._id}`}>Book</Link>
    
</div>
          </div>
        </div>
      </div>
       
      <div className="col-md-6">
        <div className="shop_img-box">
          <img src={`/truck/${data.photo}`} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
    ))}
  </div>
</section>
</>
)
    }

















