import React,{ useEffect,useState } from 'react'
import axios from'axios'
import{ useNavigate }from 'react-router-dom'
 

export default function Viewsend(){
    const navigate = useNavigate()
    const [send,setSend] = useState([])
    console.log(send);

useEffect(()=>{
     
     
    axios.get('http://localhost:1000/send/view-send').then((response)=>{
      console.log("res=======>",response.data);
     setSend(response.data.details)
}).catch((err)=>{
    console.log(err);
})

},[])
return(
    <> 
     <section className="service_section layout_padding">
  <div className="container">
    <div className="d-flex justify-content-center">
      <h2 className="heading_style">request</h2>
    </div>
     
    <div className="row layout_padding2-top">
    {send.map((data,key)=>(
      <div className="col-md-4">
        <div className="service_img-box s-b-1">
          <img src="asset/images/" alt="" />
          <div className="d-flex">
            <h3></h3>
          </div>
        </div>
        <div className="service-detail">
        <ul>
          
          <li>{data.requestforcontact}</li>
           
          


          
             
             </ul>
             <div className="ml-3" >
                                <a href="/reply" className="dropbtn">
                                  <span>Reply</span>
                                  
                                </a>
                              </div> 
    
        </div>
      </div>
    
    ))}
  </div>
  </div>
</section>

    </>
)
}