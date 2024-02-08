import axios from 'axios'
import React, { useState } from 'react'

const AddCar = () => {
    const [cars,setInput]= new useState(
        {
            registerNo: "",
            model: "",
            fuel: "",
            engineCapacity: ""
        }
    )
    const inputHandler=(event)=>{
        setInput({...cars,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(cars)
        axios.post("http://localhost:3002/api/add",cars).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Data Uploaded")
                    setInput(
                        {
                            registerNo: "",
                            model: "",
                            fuel: "",
                            engineCapacity: ""
                        }
                    )
                    
                } else {
                    alert("Failed")
                }
            }
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Registration No:</label>
                            <input type="text" className="form-control" name='registerNo' value={cars.registerNo} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Model:</label>
                            <input type="text" className="form-control" name='model' value={cars.model} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Fuel:</label>
                            <input type="text" className="form-control" name='fuel' value={cars.fuel} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Engine Capacity:</label>
                            <input type="text" className="form-control" name='engineCapacity' value={cars.engineCapacity} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValues}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCar