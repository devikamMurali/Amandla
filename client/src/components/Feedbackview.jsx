import React,{ useEffect,useState } from 'react'
import axios from'axios'
import{ useNavigate }from 'react-router-dom'

export default function Feedbackview() {
    const navigate = useNavigate()
    const [feedback,setFeedback] = useState([])
    console.log(feedback);

useEffect(()=>{
     
    axios.get('http://localhost:1000/feedback/view-feedback').then((response)=>{
      console.log("res=======>",response.data);
     setFeedback(response.data.details)
}).catch((err)=>{
    console.log(err);
})
},[])


return(
  <>
  <section className="client_section layout_padding">
  <div className="d-flex justify-content-center">
    <h2 className="heading_style">Users feedback</h2>
     </div>
     <div>
        <center>
        <h5>Post your Feedbacks About us,For our Amazing service. </h5>
        </center>
     </div>
     <div className="row layout_padding2-top"></div>
     {feedback.map((data,key)=>(
  <div
    id="carouselExampleIndicator"
    className="carousel slide"
    data-ride="carousel"
  >
     
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="client_box c-b-1">
                <div className="client_img">
                  <img src="asset/images/client.png" alt="" className="img-fluid" />
                </div>
                <div className="client_detail">
                  <h5>feedback</h5>
                  
                   <ul>
                   date:<li>{data.date}</li>
                   time:<li>{data.time}</li>
                   content:<li>{data.content}</li>


                   </ul>
                
                  
              </div>
            </div>
             
          </div>
        </div>
      </div>
       
                    

    </div>
  </div>
  </div>

     ))}
</section>


   
</>
) }
    
    
    
  
 
 

  
  
