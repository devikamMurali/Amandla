import React,{useEffect,useState} from 'react'
import axios from'axios'
import{ useNavigate }from 'react-router-dom'

export default function Acpt() {

  const navigate = useNavigate()
  const [accept,setAccept] = useState([])
  console.log(accept);

useEffect(()=>{
  const truck_id =localStorage.getItem('truck_id')
     console.log(truck_id);
     
   
  axios.get(`http://localhost:1000/accept/view-approve-user/${truck_id}`).then((response)=>{
    console.log("res=======>",response);
   setAccept(response.data.data)
}).catch((err)=>{
  console.log(err);
})

},[])



return(
  <> 
   <section className="service_section layout_padding">
  <div className="container">
    <div className="d-flex justify-content-center">
      <h2 className="heading_style"> Book status</h2>
    </div>
     
    <div className="row layout_padding2-top">
    {accept.map((data,key)=>(
      <div className="col-md-4">
        <div className="service_img-box s-b-1">
          <img src="asset/images/truck.png" alt="" />
          <div className="d-flex">
            <h3>Book status</h3>
          </div>
        </div>
        <div className="service-detail">
        <ul>
          
          <li>{data.trucktype}</li>
          <li>{data.truckno}</li>
          <li>{data.date}</li>
          <li>{data.time}</li>
          <li>{data.loadtype}</li>
          <li>{data.phone}</li>
           
          


          
             
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
