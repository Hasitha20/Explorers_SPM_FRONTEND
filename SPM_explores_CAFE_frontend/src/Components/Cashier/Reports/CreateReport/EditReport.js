import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import './CreateReport.css';
import { useParams, useHistory, Link} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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

export default function EditReport() {

  const params = useParams();

  const[reports, setReports] = useState([]) 

  const [date, setDate] = useState(new Date());
  const [start_time, setstart_time] = useState(new Date());
  const [end_time, setend_time] = useState(new Date());
  const [orders_count, setorders_count] = useState("");
  const [complete_orders_count, setcomplete_orders_count] = useState("");
  const [canceled_orders_count, setcanceled_orders_count] = useState("");
  const [revenue, setRevenue] = useState("");
  const [other_payments, setother_payments] = useState("");
  const [total_suppliers_charges, settotal_suppliers_charges] = useState("")

  const history = useHistory();

  useEffect(() => {
    if(params.reportid){
      axios.post("http://localhost:5000/saveNewReport/getSingle", {reportid: params.reportid}).then(res =>{
        
        const reportdata = res.data[0];
        
        setDate(reportdata.date);
        setstart_time(reportdata.start_time);
        setend_time(reportdata.end_time);
        setorders_count(reportdata.orders_count);
        setcomplete_orders_count(reportdata.complete_orders_count);
        setcanceled_orders_count(reportdata.canceled_orders_count);
        setRevenue(reportdata.revenue);
        setother_payments(reportdata.other_payments);
        settotal_suppliers_charges(reportdata.total_suppliers_charges) ; 

    }).catch((err) => {
        console.log(err)
    })
    }else{
      setReports(initalState)
    }
  }, [params.reportid]);

  function setReportData(e) {
    e.preventDefault();
    const updatedReport = {
      date: date,
      start_time:start_time,
      end_time: end_time,
      orders_count: orders_count,
      complete_orders_count: complete_orders_count,
      canceled_orders_count: canceled_orders_count,
      revenue: revenue,
      other_payments: other_payments,
      total_suppliers_charges: total_suppliers_charges,
      reportid: params.reportid
     }
    
      axios.post("http://localhost:5000/saveNewReport/updateCashierReport", updatedReport).then(res => {
        alert("Report updated");
        history.push("/reports")
        }).catch((err) => {
           console.log('Report data not updated....', err)
          alert(err);
          console.log(err);
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
  const handleEndTime = (end_time)=>{
    setend_time(end_time);
  }

  return (
    <div className="createReport">
        <div style={styles.outer}>
        <form>
        <button><Link to ="/reports"><ArrowBackIosIcon></ArrowBackIosIcon></Link></button>
            <h1>Edit Entry Data</h1>
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
                            className="form-control"
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
                            className="form-control"
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            
                            /> 
                            <label style={{"fontSize": "20px", paddingTop: '21px'}}>End Time</label> 
                            <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label=""
                            className="form-control"
                            value={end_time}
                            onChange={handleEndTime}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            />  
                     </Grid>
                </MuiPickersUtilsProvider>

                <div className="grid-container">
                    <div className="grid-item">
                        <label>Total Orders Per day</label>
                        <input type="Number" placeholder="Total Orders" className= "form-control"
                        value={orders_count} onChange={(e)=>{setorders_count(e.target.value)}}
                        />
                    </div>
                    <div className="grid-item">
                        <label>Completed Orders</label>
                        <input type="Number" placeholder="Completed Orders" className= "form-control"
                        value={complete_orders_count} onChange={(e)=>{setcomplete_orders_count(e.target.value)}}
                        />
                    </div>
                    <div className="grid-item">
                        <label>Canceled Orders</label>
                        <input type="Number" placeholder="Canceled Orders" className= "form-control"
                        value={canceled_orders_count} onChange={(e)=>{setcanceled_orders_count(e.target.value)}}
                        />
                    </div>
                    <div className="grid-item">
                        <label>Revenue      </label><br></br>
                        <input type="Number" placeholder="Revenue" className= "form-control"
                        value={revenue} onChange={(e)=>{setRevenue(e.target.value)}}
                        />
                    </div>
                    <div className="grid-item">
                        <label>Other Payments</label>
                        <input type="Number" placeholder="Other Payments" className= "form-control"
                        value={other_payments} onChange={(e)=>{setother_payments(e.target.value)}}
                        />
                    </div>
                    <div className="grid-item">
                        <label>Total Suppliers Charges</label>
                        <input type="Number" placeholder="Total Suppliers Charges" className= "form-control"
                        value={total_suppliers_charges} onChange={(e)=>{settotal_suppliers_charges(e.target.value)}}
                        />
                    </div>
                
                    <div class="grid-item">
                      <button onClick={clearAllFields}>Clear</button>
                    </div>
                    <div class="grid-item">
                       <button onClick={setReportData} >Save</button>
                    </div> 
                    <div className="grid-item">
                       <button onClick={setReportData} >Submit</button> 
                    </div> 
                    
                </div>        
        </form> 
        </div>
    </div>
  )
}

