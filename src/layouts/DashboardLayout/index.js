import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="page">
        <Sidebar />
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default DashboardLayout;
