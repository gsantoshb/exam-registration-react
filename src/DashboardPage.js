import React, { useState , useEffect} from "react";
import "./DashboardPage.css";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";

function DashboardPage() {
  const [{user}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [availableExams, setAvailableExams] = useState([]);
  const [myApplications, setMyApplications] = useState([]);

  useEffect(()=>{
    console.log("User from context in dashboard page:"+user.uid);
    const examsData = [];
    db.collection("exams").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          examsData.push({id: doc.id, name: doc.data().name, isOpen: doc.data().isOpen});
      });
      setAvailableExams(examsData);
  });

  const myApplicationsData = [];
  db.collection("myApplications").where("userId", "==", user.uid)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            myApplicationsData.push({id: doc.id, applicationNumber: doc.data().applicationNumber, name: doc.data().name, status: doc.data().status});
        });
        setMyApplications(myApplicationsData);
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  },[]);


  const gotoExam = (examId, examName) => {
    console.log("Exam id on click:"+examId);
    navigate('/application',{state: {examId: examId, examName: examName}});
  }


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
          {myApplications.map(application => (
            <tr key={application.id}>
              <th scope="row">{application.id}</th>
              <td>{application.applicationNumber}</td>
              <td>{application.name}</td>
              <td>{application.status === "Submitted"?<button type="button" className="btn btn-success">Completed - Click to get HT</button>:<button  type="button" className="btn btn-secondary">Continue application</button>}</td>
            </tr>
          ))}
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

          {availableExams.map(exam => (
            <tr key={exam.id}>
              <th scope="row">{exam.id}</th>
              <td>{exam.name}</td>
              <td>{exam.isOpen?<button type="button" className="btn btn-success"   onClick={() => {gotoExam(exam.id, exam.name)}} >Go to exam reg</button>:<button disabled type="button" className="btn btn-secondary">Go to exam reg</button>}</td>
            </tr>
          ))}

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
