import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [data, setData] = new useState([])
    const getData=()=>{
        axios.get("http://localhost:3002/api/view").then(
            (response) => { setData(response.data) }
        )
    }
    useEffect(()=>{getData()},[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">Registration No.</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Fuel</th>
                                    <th scope="col">Engine Capacity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <td>{value.registerNo}</td>
                                                <td>{value.model}</td>
                                                <td>{value.fuel}</td>
                                                <td>{value.engineCapacity}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View