import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import axios from 'axios'

export default function Dashboard() {
    const [sale, setSale] = useState([])
    const [productCount, setProductCount] = useState([])

    function homeData() {
        axios.get(" https://65979d8c668d248edf230fd9.mockapi.io/crud")
            .then((res) => {
                setSale(res.data.length)
            })
    }
    useEffect(() => {
        homeData()
    }, [])



    function totalSaleData() {
        axios.get("https://65979d8c668d248edf230fd9.mockapi.io/sale_table")
            .then((res) => {
                setProductCount(res.data.length)
            })
    }
    useEffect(() => {
        totalSaleData()
    }, [])


    return (
        <>
            <div>
                <Navbar />
            </div>


            <div className="container">
                <div className="col-lg-12">
                    <h1 style={{marginTop:"100px", marginLeft:"250px"}} >Details of Products:</h1>

                    <div className="d-flex" >


                        <div className="col-lg-3">
                            <Home />

                        </div>
                       


                        <div>
                            <div className="row  justify-content-between">
                                <div className="col-md-3 col-sm-6">
                                    <div className="counter">
                                        <h3 className='mt-5'>Total Products:</h3>

                                        <span className="counter-value"><i className="bi bi-cart3 "></i>{sale}</span><br />
                                        <span >12% Increase</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="row justify-content-between">
                                <div className="col-md-3 col-sm-6">
                                    <div className="counter blue">
                                        <h3 className='mt-5'> Total Sale Products:</h3>

                                        <span className="counter-value"><i className="bi bi-cart3 "></i>{productCount}</span><br />
                                        <span >12% Increase</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="row ustify-content-between">
                                <div className="col-md-3 col-sm-6">
                                    <div className="counter green">
                                        <h3 className='mt-5'>Total Bill:</h3>

                                        <span className="counter-value"><i className="bi bi-cart3"></i>{sale}</span><br />
                                        <span >12% Increase</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>











        </>
    )
}
