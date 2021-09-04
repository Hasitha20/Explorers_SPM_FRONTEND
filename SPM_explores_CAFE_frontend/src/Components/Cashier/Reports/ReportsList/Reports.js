import React, { useState, useEffect } from "react";
import axios from "axios";
import './Reports.css';
import { Button } from 'reactstrap';
import { Link, useHistory } from "react-router-dom";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


export default function Reports() {
  const [reports, setReports] = useState([]);
  
  const [status, setStatus] = useState('');
  const history = useHistory()

  useEffect(() => {
    axios.get("http://localhost:5000/api/cashierReport").then((res) => {
        console.log(res.data);
        setReports(res.data);
        setStatus('Saved')
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });

    
  }, []);


  function deleteReport(id){
    axios.post('http://localhost:5000/saveNewReport/deleteCashierReport', {id}).then(res => {
      alert(res.data)
      history.go(0)
    }).catch(err => {
      console.log(err)
    })
}
  return(
      <div  className="reports">
        <Button className="btnnewEntry" ><Link to ="/create-report">New Entry</Link></Button>
        <div className="table-topic">
            <h1>Reports</h1>
        </div>
        
        
        <MDBTable hover>
          <MDBTableHead>
            <tr>
              <th>Date</th>
              <th>StartTime</th>      
              <th>EndTime</th>      
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
                {
                    reports.map(item =>(
                        <tr key={item._id}>
                            <td>{new Date(item.date).toLocaleDateString()}</td>
                            <td>{new Date(item.start_time).toLocaleTimeString()}</td>
                            <td>{new Date(item.end_time).toLocaleTimeString()}</td>

                            <td >{status}</td>
                            <td><button><Link to={`/edit-report/${item.reportid}`}>Edit</Link></button></td>
                            <td><button onClick={()=>deleteReport(item._id)}>Delete</button></td>
                        </tr>
                    ))
                   
                }
          </MDBTableBody>
          </MDBTable>
       
       
      </div>
  )
}
