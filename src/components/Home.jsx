import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Home() {

  let navigate = useNavigate()

  useEffect(() => {
    let data = localStorage.getItem("username");

    if (!data) {
      navigate("/")
    }

  }, [])


  function handleLogout() {
    localStorage.clear()
    // let data = localStorage.getItem("username");

    // if (!data) {
    navigate("/")
    // }
  }


  return (
    <>
      <Navbar />


      {/* <!-- Sidebar --> */}

      <nav id="sidebarMenu" className=" collapse d-lg-block sidebar collapse  ">
        <div className="position-sticky ">
          {/* <div className="list-group list-group-flush mx-3 mt-4 "> */}
            <Link to={'/dashboard'} className='text-decoration-none '>

              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span> DashBoard</span>
              </a>
            </Link>


            <Link to={'/product'} className='text-decoration-none '>
              <a href="#" className="list-group-item list-group-item-action py-2 ripple   ">
                <i className="fas fa-chart-area fa-fw me-3"></i><span>Product</span>
              </a>
            </Link>

            <Link to={'/sale'} className='text-decoration-none '>
              <a href="#" className=" list-group-item list-group-item-action py-2 ripple  "
              ><i className="fas fa-lock fa-fw me-3"></i><span>Sales</span></a>
            </Link>

            
            <Link to={'/saletable'} className='text-decoration-none ' >
              <a href="#" className="list-group-item list-group-item-action py-2 ripple b"
              ><i className="fas fa-lock fa-fw me-3"></i><span>SalesTable</span></a>
            </Link>


            <a href="#" className="list-group-item list-group-item-action py-2 ripple  "
            ><i className="fas fa-chart-line fa-fw me-3"></i><span onClick={(e) => handleLogout(e)}>Logout</span></a
            >


           
          {/* </div> */}
        </div>
      </nav>

    

    </>
  )
}
