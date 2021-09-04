import React, {useState} from "react";
import { Link, useHistory} from "react-router-dom";


import axios from "axios";

function SingleReport({ report }) {
  


  return (
    <div
      className="col-md-8  shadow p3 mb-5 bg-white rounded"
      style={{
        textAlign: "center",
        marginTop: "20px",
        width: "50%",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <div>
        <tr>
            <td>{new Date(report.date).toLocaleDateString()}</td>

            <td>{new Date(report.start_time).toLocaleTimeString}</td>
            <td>{new Date(report.end_time).toLocaleTimeString}</td>
            <td>{report.orders_count}</td>
            <td>{report.complete_orders_count}</td>
            <td>{report.canceled_orders_count}</td>
            <td>{report.revenue}</td>
            <td>{report.other_payments}</td>
            <td>{report.total_suppliers_charges}</td>
        </tr>
      </div>
    </div>
  );
}
export default SingleReport;
