import React, { useState } from "react";
import "./DashboardPage.css";


function DashboardPage() {


    return (
        <div className="col-lg-8 mx-auto p-4 py-md-5">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <span className="fs-4">Dashboard Page</span>
          </a>
        </header>
      
        <main>
          <h3>My Applications</h3>
          <p className="fs-5 col-md-8">Check the status of your current applications</p>
      
          <table className="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Application Number</th>
            <th scope="col">Exam</th>
            <th scope="col">Status</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td><nav className="nav"><a className="nav-link" href="#">128399481</a></nav></td>
            <td>TS-EAMCET</td>
            <td>Processing ... </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><nav className="nav"><a className="nav-link" href="#">48384348797</a></nav></td>
            <td>TS-NEET</td>
            <td>Hall Ticket Available    <button type="button" className="btn btn-success">Get HallTicket</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td><nav className="nav"><a className="nav-link" href="#">ABB6478364876</a></nav></td>
            <td>IIT JEE Prelims</td>
            <td>Processing ... </td>
          </tr>
          </tbody>
        </table>
      
          <hr className="col-12 col-md-12 mb-3" />
      
          <h3>Submit a new Application</h3>
          <p className="fs-5 col-md-8">Submit a new application</p>
      
          <table className="table table-striped">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Exam Name</th>
            <th scope="col">Status</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>TS-EAMCET</td>
            <td>OPEN FOR REGISTRATION <button type="button" className="btn btn-success">Go to exam reg</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>TS-NEET</td>
            <td>OPEN FOR REGISTRATION <button type="button" className="btn btn-success">Go to exam reg</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>TS-EAMCET</td>
            <td>CLOSED FOR REGISTRATION <button disabled type="button" className="btn btn-secondary">Go to exam reg</button></td>
          </tr>
          </tbody>
        </table>
        </main>
        <footer className="pt-5 my-5 text-muted border-top">
          GSB &middot; &copy; 2023
        </footer>
      </div>

    );

}

export default DashboardPage;
