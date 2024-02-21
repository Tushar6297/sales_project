import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import axios from 'axios'



export default function SalesTable() {

    
    const [getData, setGetData] = useState([])
    var finalBill=0;

    function loadData() {
        axios.get("https://65979d8c668d248edf230fd9.mockapi.io/sale_table")
            .then((res) => {
                setGetData(res.data)
            })
    }

    useEffect(() => {
        loadData()
    }, [])

    function handleRemove(e, id){
        e.preventDefault()
        axios.delete("https://65979d8c668d248edf230fd9.mockapi.io/sale_table/"+ id)
        .then((res)=>{
            console.log(res.data);
            loadData();
        })

    }
    return (

        <>

            <Navbar />

            <div className="container">
                <div className="col-lg-12">
                    <div className="col-lg-3">
                        <Home />    
                    </div>
                    <div className="col-lg-9" style={{ margin: "120px 210px" }}>
                        <h2> Sales Table</h2>

                        <table className="table ms-5 text-center" >

                            <thead>
                                <tr>
                                    <th scope="col">Sr.No</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Mobile No</th>
                                    <th scope="col">Total Price</th>
                                    <th scope="col">Total Gst </th>
                                    <th scope="col">Final Bill</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    getData.map((eachData, i) => {
                                        if (eachData) {
                                            finalBill+=eachData.finalprice
                                            
                                        }
                                        return (
                                            <tr key={1}>
                                                <th scope="row">{i+1}</th>
                                                <td>{eachData.persoanldata.date}</td>
                                                <td>{eachData.persoanldata.customer}</td>
                                                <td>{eachData.persoanldata.mobileno}</td>
                                                <td>{eachData.totalprice}</td>
                                                <td>{eachData.totalgst}</td>
                                                <td>{eachData.finalprice}</td>
                                                <td><button className='btn  btn-danger' onClick={((e)=> handleRemove(e, eachData.id))}>Remove</button></td>
                                            </tr>

                                        )
                                    })
                                }


                            </tbody>
                        </table>
                        <span><b>Final Amount:  </b>{finalBill}</span>
                    </div>
                </div>
            </div>







        </>

    )
}
