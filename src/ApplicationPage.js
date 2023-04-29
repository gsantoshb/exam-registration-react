import React, { useState , useEffect} from "react";
import "./ApplicationPage.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useLocation } from "react-router-dom";
import { db} from "./firebase";
import { useStateValue } from "./StateProvider";
import { useForm } from "react-hook-form";

function ApplicationPage() {

  const [{user}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState();
  const [addr1, setAddr1] = useState();
  const [addr2, setAddr2] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [center, setCenter] = useState();
  const [examDate, setExamDate] = useState(new Date());
  const { register, handleSubmit, formState: { errors } } = useForm();


  useEffect(()=>{
    console.log("User from context in application page:"+user.uid);
    console.log("exam id from prev:"+location.state.examId);
    db.collection("myApplications").doc(location.state.applicationId)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            setName(doc.data().name);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  },[]);


  const onSubmit = (data) => {
      
    // const data ={name:name,addr1:addr1,addr2:addr2,city:city,state:state,zip:zip,phone:phone,email:email,
    //             center:center, examDate:examDate, examId: location.state.examId, userId: user.uid };
    console.log(data);
    data["examDate"]=examDate;
    data["userId"]=user.uid;
    data["examId"]=location.state.examId;
  if(errors.name === undefined){
    navigate('/review',{state: data});
  }
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="fs-4">Application Page</span>
          </a>
        </header>

        <main>
          <h3>Complete the below application ...{location.state.examName}</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
                placeholder="Enter name"
                {...register("name", { required: true })}
              />
              {errors.name && <p style={{color:'red'}} >This field is required</p>}

            </div>
            <div className="form-group">
              <label htmlFor="Address1">Address Line1</label>
              <input
                type="text"
                className="form-control"
                id="addr1"
                placeholder="Enter Address Line 1"
                {...register("addr1", { required: true })}
              />
              {errors.addr1 && <p style={{color:'red'}} >This field is required</p>}

            </div>
            <div className="form-group">
              <label htmlFor="Address2">Address Line2</label>
              <input
                type="text"
                className="form-control"
                id="addr2"
                placeholder="Enter Address Line 2"
                {...register("addr2")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter City"
                {...register("city", { required: true })}
              />
              {errors.city && <p style={{color:'red'}} >This field is required</p>}
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Enter State"
                {...register("state", { required: true })}
              />
              {errors.state && <p style={{color:'red'}} >This field is required</p>}
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder="Enter Zipcode"
                {...register("zip", { required: true })}
              />
              {errors.zip && <p style={{color:'red'}} >This field is required</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phoneNum">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phoneNum"
                placeholder="Enter Valid Phone number"
                {...register("phoneNum", { required: true })}
              />
              {errors.phoneNum && <p style={{color:'red'}} >This field is required</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Valid Email Address"
                {...register("email", { required: true })}
              />
              {errors.email && <p style={{color:'red'}} >This field is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="centerSelection">Select Center</label>
              <select className="form-select" id="centerSelectionId"     {...register("center", { required: true })}>
                <option>LFHS</option>
                <option>All Saints</option>
                <option>St Pauls</option>
                <option>Grammar</option>
                <option>St Josephs</option>
              </select>
              {errors.center && <p style={{color:'red'}} >This field is required</p>}

            </div>
            <div className="form-group">
              <label htmlFor="pickDate">Select Date</label>
              <DatePicker selected={examDate} onChange={(date) => setExamDate(date)} showTimeSelect dateFormat="Pp" />
            </div>
            <br />

           
            <br/>
            <button type="submit" className="btn btn-primary">
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

export default ApplicationPage;
