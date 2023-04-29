import React, { useEffect } from "react";
import "./ReviewPage.css";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "./firebase";

function ReviewPage() {
  
  const location = useLocation();
  const navigate = useNavigate();


  const saveApplication = (e) => {
    e.preventDefault();
    db.collection("myApplications").add(location.state)
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      navigate('/confirmation',{state:docRef.id});
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  }


    return (
      <div className="col-lg-8 mx-auto p-4 py-md-5">
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              className="me-2"
              viewBox="0 0 118 94"
              role="img"
            >
              <title>Bootstrap</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="fs-4">Review Page</span>
          </a>
        </header>

        <main>
          <h3>Review the application below ...</h3>
          <form>
            <div className="form-group row">
              <label for="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticName" value={location.state.name} />
                </div>
            </div>
            <div className="form-group row">
              <label for="name" className="col-sm-2 col-form-label">Address Line 1</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticName" value={location.state.addr1}  />
                </div>
            </div>
            <div className="form-group row">
              <label for="name" className="col-sm-2 col-form-label">Address Line 2</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticName" value={location.state.addr2}  />
                </div>
            </div>
            <div className="form-group row">
              <label for="name" className="col-sm-2 col-form-label">City</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticName" value={location.state.city}  />
                </div>
            </div>
            <div className="form-group row">
              <label for="name" className="col-sm-2 col-form-label">State</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticName" value={location.state.state}  />
                </div>
            </div>
            <div className="form-group row">
              <label for="name" className="col-sm-2 col-form-label">Zip</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticName" value={location.state.zip}  />
                </div>
            </div>
            <div className="form-group row">
              <label for="name" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticName" value={location.state.phoneNum}  />
                </div>
            </div>
            <div className="form-group row">
              <label for="name" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticName" value={location.state.email}  />
                </div>
            </div>
            <div className="form-group row">
              <label for="name" className="col-sm-2 col-form-label">Center</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticName" value={location.state.center}  />
                </div>
            </div>
            <div className="form-group row">
              <label for="name" className="col-sm-2 col-form-label">Exam Date</label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticName" value={location.state.examDate} />
                </div>
            </div>

          

            <br/>

            <button type="submit" className="btn btn-primary" onClick={(e) => {saveApplication(e)}}>
              Submit
            </button>

          </form>
        </main>
        <footer className="pt-5 my-5 text-muted border-top">
          GSB &middot; &copy; 2023
        </footer>
      </div>
    );

}

export default ReviewPage;
