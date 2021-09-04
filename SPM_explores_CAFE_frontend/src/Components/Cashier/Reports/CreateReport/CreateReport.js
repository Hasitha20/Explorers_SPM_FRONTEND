import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import './CreateReport.css';
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import uniqid from 'uniqid';


const styles ={
  outer: {
    borderRadius: "2.5%",
    boxShadow: "0 10px 30px #BBB",
    padding: "40px 60px",
    width: "95%",
    marginLeft: "2%"
  }
};
const initalState= {
  date:"",
  start_time:"",
  orders_count:"",
  complete_orders_count:"",
  canceled_orders_count:"",
  revenue:"",
  other_payments:"",
  total_suppliers_charges:""
}

export default function CreateReport() {
 

  const [date, setDate] = useState(new Date());
  const [start_time, setstart_time] = useState(new Date());
  const [end_time, setend_time] = useState(new Date());
  const [orders_count, setorders_count] = useState("");
  const [complete_orders_count, setcomplete_orders_count] = useState("");
  const [canceled_orders_count, setcanceled_orders_count] = useState("");
  const [revenue, setRevenue] = useState("");
  const [other_payments, setother_payments] = useState("");
  const [total_suppliers_charges, settotal_suppliers_charges] = useState("");
  

  const history = useHistory()

  function setData(e) {
    e.preventDefault();
    const newReport = {
      date,
      start_time,
      end_time,
      orders_count,
      complete_orders_count,
      canceled_orders_count,
      revenue,
      other_payments,
      total_suppliers_charges,
      reportid: uniqid(),
     };

     //console.log(newReport)

    axios.post("http://localhost:5000/saveNewReport/addNewReport", newReport)
      .then((res) => {
        alert(res.data);
        history.push('/reports');
      }).catch((err) => {
        alert(err);
      }); 
    }

  function submitData(e){
    e.preventDefault();
    const newReport = {
      date,
      start_time,
      end_time,
      orders_count,
      complete_orders_count,
      canceled_orders_count,
      revenue,
      other_payments,
      total_suppliers_charges,
      reportid: uniqid(),
     };

     //console.log(newReport)

    axios.post("http://localhost:5000/newReportRouteFile/submitReport", newReport)
      .then(() => {
        alert("Report submitted");
        history.push('/reports')
      }).catch((err) => {
        alert(err);
      }); 
  }
  function clearAllFields() {
    this.setReports(initalState)
  }
  const handleDateChange = (date) => {
    setDate(date);
  };
  const handleStarttime = (start_time)=>{
    setstart_time(start_time);
  }
  const handleEndtime = (end_time)=>{
    setend_time(end_time);
  }

  return (
    <div className="createReport">
      <div style={styles.outer} >
       
        <form>
        <button><Link to ="/reports"><ArrowBackIosIcon></ArrowBackIosIcon></Link></button>
        <h1>Add New Entry</h1>
            <div className="inputFields">
              
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                            <label style={{"fontSize": "20px", paddingTop: '21px'}}>Date</label>
                            <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label=""
                            value={date}
                            minDate={new Date()} 
                            onChange={handleDateChange} 
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            <label style={{"fontSize": "20px", paddingTop: '21px'}}>Start Time</label>
                            <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label=""
                            value={start_time}
                            onChange={handleStarttime}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            
                            /> 
                            <label style={{"fontSize": "20px", paddingTop: '21px'}}>End Time</label> 
                            <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label=""
                            value={end_time}
                            onChange={handleEndtime}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            />  
                     </Grid>
                </MuiPickersUtilsProvider>
                <div class="grid-container">
                    <div class="grid-item">
                        <label>Total Orders Per day</label>
                        <input type="Number" placeholder="Total Orders" className= "form-control"
                        value={orders_count} onChange={(e)=>{setorders_count(e.target.value)}}
                        />
                    </div>
                    <div class="grid-item">
                        <label>Completed Orders</label>
                        <input type="Number" placeholder="Completed Orders" className= "form-control"
                        value={complete_orders_count} onChange={(e)=>{setcomplete_orders_count(e.target.value)}}
                        />
                    </div>
                    <div class="grid-item">
                        <label>Canceled Orders</label>
                        <input type="Number" placeholder="Canceled Orders" className= "form-control"
                        value={canceled_orders_count} onChange={(e)=>{setcanceled_orders_count(e.target.value)}}
                        />
                    </div>
                    <div class="grid-item">
                        <label>Revenue      </label><br></br>
                        <input type="Number" placeholder="Revenue" className= "form-control"
                        value={revenue} onChange={(e)=>{setRevenue(e.target.value)}}
                        />
                    </div>
                    <div class="grid-item">
                        <label>Other Payments</label>
                        <input type="Number" placeholder="Other Payments" className= "form-control"
                        value={other_payments} onChange={(e)=>{setother_payments(e.target.value)}}
                        />
                    </div>
                    <div class="grid-item">
                        <label>Total Suppliers Charges</label>
                        <input type="Number" placeholder="Total Suppliers Charges" className= "form-control"
                        value={total_suppliers_charges} onChange={(e)=>{settotal_suppliers_charges(e.target.value)}}
                        />
                    </div>
                
                    <div class="grid-item">
                            <button onClick={clearAllFields} >Clear</button>
                    </div>
                    <div class="grid-item">
                            <button onClick={setData}>Save</button>
                    </div>
                    <div class="grid-item">
                            <button onClick={submitData} >Submit</button>
                    </div> 
                    
                </div>         
            </div>
        </form>
      </div>
      
    </div>
  );
}
