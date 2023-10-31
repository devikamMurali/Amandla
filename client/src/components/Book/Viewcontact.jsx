import React,{ useEffect,useState } from 'react'
import axios from'axios'
import{ useNavigate }from 'react-router-dom'
 

export default function Viewcontact(){
    const navigate = useNavigate()
    const [contact,setContact] = useState([])
    console.log(contact);

useEffect(()=>{
     
    axios.get('http://localhost:1000/admin/view-contct').then((response)=>{
      console.log("res=======>",response.details);
     setContact(response.data.details)
}).catch((err)=>{
    console.log(err);
})

},[])
return(
    <> 
     <section className="service_section layout_padding">
  <div className="container">
    <div className="d-flex justify-content-center">
      <h2 className="heading_style">contacts</h2>
    </div>
     
    <div className="row layout_padding2-top">
    {contact.map((data,key)=>(
      <div className="col-md-4">
        <div className="service_img-box s-b-1">
          <img src="asset/images/" alt="" />
          <div className="d-flex">
            <h3>contact</h3>
          </div>
        </div>
        <div className="service-detail">
        <ul>
          
          name:<li>{data.name}</li>
          email:<li>{data.email}</li>
          phone:<li>{data.phone}</li>
          message:<li>{data.message}</li>
          


          
             
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