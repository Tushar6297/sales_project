import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Navbar() {

  let navigate = useNavigate()

  function handleLogout() {
    localStorage.clear()
    // let data = localStorage.getItem("username");

    // if (!data) {
    navigate("/")
    // }
  }



  return (
    <>
      <div className="container">
        <header>


          <nav id="main-navbar" className="  d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            {/* <!-- Container wrapper --> */}
            {/* <!-- Toggle button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-justify"></i>
            </button>

            {/* <!-- Brand --> */}
            <a className="navbar-brand" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="25"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>



            <button className='btn btn-danger' onClick={(e) => handleLogout(e)}>Logout</button>


          </nav>

        </header>



      </div>
    </>
  )
}
