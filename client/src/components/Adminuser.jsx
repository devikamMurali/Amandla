import React,{ useEffect,useState } from 'react'
import axios from'axios'
import{ useNavigate }from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

export default function Adminuser() {
    const navigate = useNavigate()
    const [user,setUser] = useState([])
    console.log(user);

useEffect(()=>{
     
    axios.get('http://localhost:1000/admin/view-user').then((response)=>{
      console.log("res=======>",response);
     setUser(response.data.details)
}).catch((err)=>{
    console.log(err);
})
},[])
const approve = (id)=>{

  console.log("id===>",id);

axios.get(`http://localhost:1000/admin/approve-user/${id}`).then((response)=>{
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
const reject =(id)=>{

  console.log("id===>",id);

axios.get(`http://localhost:1000/admin/reject-user/${id}`).then((response)=>{
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
  <ToastContainer/>
  <section className="service_section layout_padding">
  <div className="container">
    <div className="d-flex justify-content-center">
      <h2 className="heading_style">Registerd Users</h2>
    </div>
     
    <div className="row layout_padding2-top">
    {user.map((data,key)=>(
      <div className="col-md-4">
        <div className="service_img-box s-b-1">
          <img src="asset/images/service-2.jpg" alt="" />
          <div className="d-flex">
            <h3>details</h3>
          </div>
        </div>
        <div className="service-detail">
          <ul>
          name:<li>{data.name}</li>
          address:<li>{data.address}</li>
          email:<li>{data.email}</li>
          phone:<li>{data.phone}</li>
          


          </ul>
          {data.status == 0 ?
          <>
          <div className="d-flex justify-content-end">
  <botton className="service-btn" onClick={()=>{approve(data.login_id)}}>
    Approve
  </botton>
</div>
<div className="d-flex justify-content-end">
  <botton className="service-btn-2"onClick={()=>{reject(data.login_id)}}>
    Reject
  </botton>
</div>
</>
:
<div className="d-flex justify-content-end">
  <botton className="service-btn-2"onClick={()=>{reject(data.login_id)}}>
    Reject
  </botton>
</div>
}



           
        </div>
      </div>
      
  
    
    ))} 
</div>
</div>

</section>
</>
    )
    }
  
 
 

  
  