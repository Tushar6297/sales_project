import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import axios from 'axios'
import { useNavigate } from 'react-router'



export default function Sales() {

    let navigate = useNavigate()


    const [newData, setNewData] = useState([]);
    const [rows, setRows] = useState([{ quantity: 1 }])
    const [total, setTotal] = useState()
    
    const [persoanlData, setPersonalData] = useState({
        date: "",
        customer: "",
        mobileno: ""

    })


    let finalPrice = 0;     //for total price of product
    let totalPrice = 0;
    let totalGst = 0;



    function handleData(e) {
        e.preventDefault()
        setPersonalData({ ...persoanlData, [e.target.name]: e.target.value })

    }

    function tableSubmit(e) {
        const postData = {
            row: rows,
            persoanldata: persoanlData,
            totalgst: totalGst,
            totalprice: totalPrice,
            finalprice: finalPrice

        }
        if (persoanlData.date === "" && persoanlData.customer === "" && persoanlData.mobileno === "") {
            alert("fill Properly!!!!")

        }
        else {

            navigate("/saletable")



            axios.post("https://65979d8c668d248edf230fd9.mockapi.io/sale_table", postData)
                .then((res) => {
                    setPersonalData(res.data)
                    loadData()

                })


        }

    }



    function handleChange(id, index) {
        console.log(id);
        const dropdown = newData.find((e) => e.id === id)

        // let dropdown ;
        // for (let i = 0; i < newData.length; i++) {
        //     if(newData[i].id===id){
        //         dropdown=newData[i]
        //         break
        //     }
        //   }

        let copyRows = [...rows]
        copyRows[index].selectedproduct = dropdown
        setRows(copyRows)


        // setData(dropdown)
        console.log(dropdown);
    }
    console.log(rows);

    const addrow = () => {
        let copyrows = [...rows]
        copyrows.push({ quantity: 1 })
        setRows(copyrows)

        console.log(rows);
    }

    function loadData() {
        axios.get("https://65979d8c668d248edf230fd9.mockapi.io/crud")
            .then((res) => {
                // console.log(res.data);
                setNewData(res.data)
            })

    }

    const quantitychange = (value, i) => {
        // console.log(value);
        let copyRows = [...rows]
        copyRows[i].quantity = value
        setRows(copyRows)
    }
    useEffect(() => {
        loadData()
    }, [])


    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <Navbar />
                        <Home />
                    </div>



                    <div className="col-lg-10">
                        <h2 className='ms-1' style={{ marginTop: "100px" }}>Sales...</h2>

                        <div className="card"  >

                            {/* <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Product</li>
                                    <li class="breadcrumb-item active" aria-current="page">Sales</li>
                                </ol>
                            </nav> */}
                            <div class="card-body">

                                <div className='d-flex'>
                                    <div className='ms-5 me-5'>
                                        <h5 className="card-title" >--Select Date--</h5>
                                        <input type="date" name='date' onChange={((e) => handleData(e))} />
                                    </div>

                                    <div className='ms-5 me-5'>
                                        <h5 className="card-title ">--Customer Name--</h5>
                                        <input type="text" name='customer' onChange={((e) => handleData(e))} />
                                    </div>

                                    <div className='ms-5 me-5'>
                                        <h5 className="card-title ">--Mobile Number--</h5>
                                        <input type="number" name='mobileno' onChange={((e) => handleData(e))} />
                                    </div>

                                </div><br />

                            </div>
                        </div><br />
                        <button className='btn btn-primary mt-2' onClick={addrow}>Add Row</button><br /><br />

                        <div className="card">
                            <div className="card-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Sale Rate</th>
                                            <th scope="col">GST</th>
                                            <th scope="col">GST Total</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {

                                            rows.map((row, i) => {
                                                if (row.selectedproduct) {
                                                    finalPrice += row.selectedproduct.Price * row.selectedproduct.Gst / 100 * row.quantity + row.selectedproduct.Price * row.quantity;
                                                    totalPrice += row.selectedproduct.Price * row.quantity;
                                                    totalGst += row.selectedproduct.Price * row.selectedproduct.Gst / 100 * row.quantity

                                                }
                                                return (
                                                    <tr key={i}>
                                                        <th scope="row">{i + 1}</th>
                                                        <td>
                                                            <select onChange={((e) => handleChange(e.target.value, i))} className="form-control">
                                                                <option value="">--Select Product--</option>
                                                                {
                                                                    newData.map((eachData, i) => {
                                                                        return (
                                                                            <option key={i} value={eachData.id}>{eachData.Product}</option>
                                                                        )
                                                                    })
                                                                }
                                                            </select>

                                                        </td>
                                                        <td><input className="form-control" type="number" value={row.quantity} onChange={((e) => quantitychange(e.target.value, i))} /></td>

                                                        <td><input className="form-control" type="number" value={row.selectedproduct ? row.selectedproduct.Price : ''} /></td>

                                                        <td><input type="text" className="form-control" value={row.selectedproduct ? row.selectedproduct.Gst : ''} /></td>

                                                        <td><input type="text" className="form-control" value={row.selectedproduct ? row.selectedproduct.Price * row.selectedproduct.Gst / 100 * row.quantity : ''} /></td>




                                                    </tr>
                                                )
                                            })
                                        }





                                    </tbody>
                                </table>

                                <div className='d-flex justify-content-between'>
                                    <span><b>Total Price :- </b>
                                        {totalPrice}
                                    </span><br />


                                    <span><b>Total GST :- </b>
                                        {totalGst}
                                    </span><br />

                                    <span><b>Total Price With GST :- </b>
                                        {finalPrice}
                                    </span><br />


                                    <button className='btn btn-primary' onClick={((e) => tableSubmit(e))}>Submit</button>

                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div >
        </>
    )
}
