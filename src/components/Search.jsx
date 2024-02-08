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
        const readValues = () => {
            console.log(cars)
            axios.post("http://localhost:3002/api/search", cars).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("Data Uploaded")
                        setInput(
                            {
                                model: "",
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
                            <div className="row">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Model</label>
                                    <input type="text" className="form-control" name='model' value={cars.model} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-info" onClick={ }>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default Search