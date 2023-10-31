import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'



export default function EditProfile() {
   
    const [user, setUser] = useState([])
    const [edituser, setEdit] = useState({})
    console.log("edit",edituser);
     const user_id=localStorage.getItem('user_id')
     const{id}=useParams()
     const navigate=useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/user/profile/${user_id}`).then((response) => {
            console.log("response====>", response.data.details);
            setUser(response.data.details)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const editusers=(id)=>{
      const name=id.target.name
      const value=id.target.value
      setEdit({...edituser,[name]:value})
  



      
    }
    const submit=(e)=>{
      e.preventDefault()
      axios.post(`http://localhost:5000/user/updateprofile/${user_id}`,edituser).then((response) => {
        console.log("response====>", response.data.details);
        setEdit(response.data.details)
    }).catch((err) => {
        console.log(err);
    })
    }

    
    

    const edit=(id)=>{
      axios.post(`http://localhost:5000/user/view-profile/${id}`,edituser).then((response) => {
        

        console.log("response====>", response.data.details);
        setEdit(response.data.details)
    }).catch((err) => {
        console.log(err);
    })
    }
    

    

     


      return (
        <><h1>Profile</h1>
          
          <div className="container">
  <div className="row gutters">
    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
      <div className="card h-100">
        <div className="card-body">
          <div className="account-settings">
            <div className="user-profile">
              <div className="user-avatar">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Maxwell Admin"
                />
              </div>
              <h5 className="user-name">Yuki Hayashi</h5>
              <h6 className="user-email">yuki@Maxwell.com</h6>
            </div>
            <div className="about">
              <h5>About</h5>
              <p>
                I'm Yuki. Full Stack Designer I enjoy creating user-centric,
                delightful and human experiences.
              </p>
            

     
          
                
               {/* <Link className="btn btn-success text-uppercase" to={`sdf`}>Submit</Link> {" "} */}

  <a href="#demo-modal"className="btn btn-success text-uppercase"onClick={()=>{edit(user._id)}}>EDIT PROFILE</a>

  </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    
       
        
    
       <div id="demo-modal" class="modal">
  <div class="modal__content">
  <div className="contact">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage"style={{marginLeft: '25px'} }>
          <h2>Edit Profile</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <form className="main_form">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <input
                className="form-control"
                placeholder="Name"
                type="text"
                name="name"
                value={edituser.name || ""}
                onChange={editusers}
              />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <input
                className="form-control"
                placeholder="Email"
                type="text"
                name="email"
                value={edituser.email || ""}
                onChange={editusers}

              />
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <input
                className="form-control"
                placeholder="Phone"
                type="text"
                name="number"
                value={edituser.number || ""}
                onChange={editusers}
              />
            </div>
            {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <textarea
                className="textarea"
                placeholder="Message"
                type="text"
                name="Message"
                defaultValue={""}
              />
            </div> */}
                 
            {/* <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <textarea
                className="textarea"
                placeholder="Message"
                type="text"
                name="Message"
                defaultValue={""}
              />
            </div> */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <button className="send" onClick={submit}>Send</button>
            </div>
          </div>
      </form>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 padddd">
        <div className="map_section">
          <div id="map"></div>
        </div>
      </div>
    </div>
  </div>
</div>

    <div class="modal__footer">
      <i class="fa fa-heart"></i> <a href="https://twitter.com/denicmarko" target="_blank"></a>
    </div>

    <a href="#" class="modal__close">&times;</a>
      

    </div>
</div>


        </>
    )
}