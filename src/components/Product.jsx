import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Product() {


  function SubmitToastify() {
    toast.success('Data Submitted Sucessfully!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function DeleteToastify() {
    toast.error('Data Deleted Successfully!', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function UpdateToastify() {
    toast.warn('Data Updated Successfully!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const [data, setData] = useState({
    Product: "",
    Price: "",
    Gst: ""
  })

  const [newData, setNewData] = useState([]);


  const [id, setId] = useState(undefined)



  function handelChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  function handelSubmit(e) {
    e.preventDefault();
    // console.log(data);



    loadData();
    if (data.Product === "" && data.Price === "" && data.Gst === "") {

      alert("Please Fill Proper!")
    }
    else {
      if (id === undefined) {
        axios.post("https://65979d8c668d248edf230fd9.mockapi.io/crud", data)
          .then((res) => {
            console.log(res.data);
            loadData();
            SubmitToastify()

          })
        setData({
          Product: "",
          Price: "",
          Gst: ""
        })

      }
      else {
        // axios.put("https://65979d8c668d248edf230fd9.mockapi.io/crud/" + id, data)
        //   .then((res) => {
        //     console.log(res.data);
        //     loadData();
        //     UpdateToastify();
        //     setId(undefined)
          
        //   })

        // setData({
        //   Product: "",
        //   Price: "",
        //   Gst: ""
        // })
        alert("fgh")

      }

    }



  }

  function loadData() {
    axios.get("https://65979d8c668d248edf230fd9.mockapi.io/crud")
      .then((res) => {
        console.log(res.data);
        setNewData(res.data)
      })

  }
  useEffect(() => {
    loadData()
  }, [])


  function handleDelete(e, id) {
    e.preventDefault()
    axios.delete("https://65979d8c668d248edf230fd9.mockapi.io/crud/" + id)
      .then((res) => {
        console.log(res.data);
        loadData();
        DeleteToastify()
      })
  }

  function handleUpdate(e, id) {
    e.preventDefault();
    setId(id)
    axios.get("https://65979d8c668d248edf230fd9.mockapi.io/crud/" + id)
      .then((res) => {
        console.log(res.data);

        setData({
          Product: res.data.Product,
          Price: res.data.Price,
          Gst: res.data.Gst
        })

      })
  }

  return (


    <>
      <ToastContainer />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">

            <Navbar></Navbar>
            <Home></Home>
          </div>





          <div className="col-lg-9 mt-3 ">
            <div className='d-flex justify-content-between mt-2'>


              <div>

                <h1 className='mt-5'>Product </h1>




              </div>


              <button type="button" className="btn btn-primary mt-5 btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Products
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Product Form</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <input name='Product' value={data.Product} onChange={handelChange} className='form-control' type="text" placeholder='Product' />
                      <br />
                      <input name='Price' value={data.Price} onChange={handelChange} className='form-control' type="text" placeholder='Price' />
                      <br />
                      {/* <input name='Gst' value={data.Gst} onChange={handelChange} className='form-control' type="text" placeholder='Gst%' /> */}

                      <select name='Gst' onChange={handelChange} placeholder="GST" class="form-select" aria-label="Default select example" value={data.Gst}  >
                        <option selected>Select Gst Percentage</option>

                        <option >5</option>
                        <option >12</option>
                        <option >18</option>
                        <option >28</option>

                      </select>


                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button onClick={(e) => handelSubmit(e)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Add Product</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sr.No</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Gst</th>
                  <th scope="col">Axtion</th>
                </tr>
              </thead>
              <tbody>
                {
                  newData.map((eachData, i) => {
                    return (

                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{eachData.Product}</td>
                        <td>{eachData.Price}</td>
                        <td>{eachData.Gst}</td>
                        <td>
                          <button className='btn btn-success me-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => handleUpdate(e, eachData.id)}>Edit</button>
                          <button className='btn btn-danger' onClick={(e) => handleDelete(e, eachData.id)}>Delete</button>
                        </td>
                      </tr>


                    )
                  })


                }


              </tbody>
            </table>

          </div>
        </div>
      </div>
    </>
  )
}
