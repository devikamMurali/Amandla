import React,{ useEffect,useState } from 'react'
import axios from'axios'
import{ useNavigate }from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Loadview(){
    const navigate = useNavigate()
    const [load,setLoad] = useState([])
    console.log(load);

useEffect(()=>{
     const driver_id =localStorage.getItem('driver_id')
     console.log(driver_id);

     
    axios.get(`http://localhost:1000/truck/view-truck-booking/${driver_id}`).then((response)=>{
      console.log("res=======>",response);
     setLoad(response.data.details)
}).catch((err)=>{
    console.log(err);
})

},[])
const approve = (_id)=>{

  console.log("id===>",_id);

axios.get(`http://localhost:1000/load/approve-user/${_id}`).then((response)=>{
console.log(response);
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
}).catch((error)=>{
  console.log(error);
})
}
const reject =(_id)=>{

  console.log("id===>",_id);

axios.get(`http://localhost:1000/load/reject-user/${_id}`).then((response)=>{
console.log(response);
toast.error(response.data.message, {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });
}).catch((error)=>{
  console.log(error);
})
}

return(
    <>
    <section className="shop_section layout_padding">
  <div className="container">
    <div className="d-flex justify-content-center">
      <h2 className="heading_style">View Booking</h2>
    </div>
    {load.map((data,key)=>(
    <div className="row">
      <div className="col-md-6">
        <div className="d-flex align-items-center h-100">
          <div className="shop-detail">
            <h5>1</h5>
        <ul>
               Load type:<li>{data.loadtype}</li>
               Load weight:<li>{data.loadweight}</li>
               Load from:<li>{data.load_from}</li>
               Load to:<li>{data.load_to}</li>
               date: <li>{data.Date}</li>
               time:<li>{data.Time}</li>
               
           </ul>
           {data.status == 0 ?
           <>
           <div className="d-flex justify-content-end">
  <botton className="service-btn" onClick={()=>{approve(data._id)}}>
    Accept
  </botton>
</div>
<div className="d-flex justify-content-end">
  <botton className="service-btn-2"onClick={()=>{reject(data._id)}}>
    Reject
  </botton>
</div>
</>
:
<div className="d-flex justify-content-end">
  <botton className="service-btn-2"onClick={()=>{reject(data._id)}}>
    Reject
  </botton>
</div>
}
           </div>
           
 
        </div>
      </div>
      <div className="col-md-6">
        <div className="shop_img-box">
          <img src="asset/images/gift.jpg" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
    ))}
  </div>
</section> 
  
  
   
  

</>
)
}