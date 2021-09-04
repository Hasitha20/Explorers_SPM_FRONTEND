
import React, { useState, useEffect } from "react";
import axios from "axios";
import './Reports.css';
import { Link } from "react-router-dom";
function Sub() {

    const [submittedreports, setSubmittedReports] = useState([]);
    const [status, setStatus] = useState('');
    useEffect(() => {
        axios.get("http://localhost:5000/api/cashierReport").then((res) => {
            console.log(res.data);
            setSubmittedReports(res.data);
            setStatus('Submitted')
        })
        .catch((err) => {
            alert(err.response.data.msg);
        });
        
      }, []);
    return (
        <div className="reports">
            <div className="table-topic">
            <h1>Submitted Reports</h1>
            </div>
            <table>
            <thead>
            <tr>
              <th>Date</th>
              <th>StartTime</th>      
              <th>EndTime</th>      
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {
                    submittedreports.map(item =>(
                        <tr key={item._id}>
                            <td>{new Date(item.date).toLocaleDateString()}</td>
                            <td>{new Date(item.start_time).toLocaleTimeString()}</td>
                            <td>{new Date(item.end_time).toLocaleTimeString()}</td>

                            <td >{status}</td>
                            <td><button><Link to={`/view-report/${item.reportid}`}>View</Link></button></td>
                        </tr>
                    ))
                
                }
            </tbody>
            </table>
        </div>
    )
}

export default Sub
