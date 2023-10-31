import React,{useState} from 'react'
import axios from 'axios'
//import { useParams } from 'react-router-dom'

export default function Truck() {
  //const {id} =useParams()
  const driver_id = localStorage.getItem('driver_id')
  //const navigate = useNavigate()
  const [input,setInput] = useState({
    driver_id:driver_id,

  })
  const [file,setFile] = useState()
  console.log(input);
  const inputChange=(e)=>{
    const name = e.target.name
    const value = e.target.value  
    setInput({...input,[name]:value})
  
  }
  const submit = (e)=>{
    e.preventDefault()
    console.log(input);
    if(file) {
       const data = new FormData()
       data.append('name',file.name)
       data.append('file',file)
       axios.post('http://localhost:1000/truck/upload-image',data).then((response)=>{
        console.log(response);
    })

    }
    axios.post('http://localhost:1000/truck',input).then((response)=>{
      console.log("res=======>",response.data);
      if(response.data.success===true){
        //navigate('');
    
      }
    }).catch((error)=>{
      console.log(error);
    })
  }




  return (
    <>
    <section className="contact_section layout_padding">
  <div className="d-flex justify-content-center">
    <h2 className="heading_style">Truck Details</h2>
  </div>
  <div className="container layout_padding2-top">
    <div className="row">
      <div className="col-md-6">
        <div   >
          <img class="ab" src="asset/images/a-truck.jpg"  />
          </div>
      </div>
      <div className="col-md-6">
        <div className="contact_form-container">
          <form action="">  
          <div>
          <div>
          
  <select  name="trucktype" onChange={inputChange}>
    <option value="">Select truck type</option>
    <option value={'anters (14 -17 feet)'}>Canters (14 -17 feet)</option>
    <option value={'Canters (19 Feet)'}>Canters (19 Feet)</option>
    <option value={'Canters (9-13 Feet)'}>Canters (9-13 Feet)</option>
    <option value={'Cargo Carriers'}>Cargo Carriers</option>
    <option value={'Container Close Body (20-40) Feet'}>Container Close Body (20-40) Feet</option>
    <option value={'Container Fixed (40-70 Feet)'}>Container Fixed (40-70 Feet)</option>
    <option value={'Containers open body (20-40 feet)'}>Containers open body (20-40 feet)</option>
    <option value={'DCM Canter/ Tata Mazda'}>DCM Canter/ Tata Mazda</option>
    <option value={'Flat Bed Trailers (40-54 Feet)'}>Flat Bed Trailers (40-54 Feet)</option>
    <option value={'HCV (Trucks/Trailers)'}>HCV (Trucks/Trailers)</option>
     
  </select></div><br></br>

              <input type="text" required="required"
              placeholder='capacity'
              name="capacity"
              onChange={inputChange}/>
                  
            </div>
            <div>
              <h2/>Upload your truck image
              <form action="">
                <input type="file" id="myFile" name="photo" onChange={(e)=>{setFile(e.target.files[0]);setInput({...input, photo: e.target.files[0].name})}} />
              </form>
              <div>
                <h2/>Truck No:
                <input type="text" placeholder="KL 1CA 8010" name="truckno" onChange={inputChange}/>
              </div>
              <div>                <h2/>From:
                <input type="text" placeholder="From.." name="From" onChange={inputChange}/>
              </div>
              <div>
                <h2/>To:
                <input type="text" placeholder="To.." name="To" onChange={inputChange}/>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit " className="" onClick={submit}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    
    
    </>
  )
}



