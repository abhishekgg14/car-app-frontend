import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Search = () => {
    const [cars, setInput] = new useState(
        {
            model: "",
        }
    )
    const inputHandler = (event) => {
        setInput({ ...cars, [event.target.name]: event.target.value })
    }
    const [output, setOutput] = new useState([])
    const readValues = () => {
        console.log(cars)
        axios.post("http://localhost:3002/api/search", cars).then(
            (response) => {
                setOutput(response.data)
            }
        )
    }
    useEffect(() => { readValues() }, [])
    return (
        <div>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Model</label>
                                <input type="text" className="form-control" name='model' value={cars.model} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-info" onClick={readValues}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        {
                            output.map(
                                (value,index)=>{
                                    return   <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{value.model}</h5>
                                        <h6 className="card-subtitle mb-2 text-body-secondary">{value.registerNo}</h6>
                                        <p className="card-text">{value.fuel}</p>
                                        <p className="card-text">{value.engineCapacity}</p>
                                    </div>
                                </div>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search