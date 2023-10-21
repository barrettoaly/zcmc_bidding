import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AddNewBidding from "../Pages/AddNewBidding";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Supplier from "../Pages/Supplier";
import AddSupplier from "../Pages/AddSupplier";
import RFQ from "../Pages/RFQ";


function AnimatedRoutes(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />


          <Route path="/supplier" element={<Supplier />} />
          <Route path="/addsupplier" element={<AddSupplier />} />
          <Route path="/rfq" element={<RFQ />} />

          <Route path="/new-bidding" element={<AddNewBidding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AnimatedRoutes;
