import React, { useState } from "react";

function Navbar() {

  return (
    <nav className="shadow-md bg-black">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
                <h1 className="text-xl font-bold font-serif text-white ml-4">Car Rental</h1>
            </div>
            <div className="hidden md:block">
                <ul className="flex items-center gap-6">
                    <li><a href="#"  className="nav-link" >Home</a></li>
                    <li><a href="#" className="nav-link" >Cars</a></li>
                    <li><a href="#" className="nav-link" >About</a></li>
                    <li><a href="#" className="nav-link" >Booking</a></li>

                </ul>
            </div>
            
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
