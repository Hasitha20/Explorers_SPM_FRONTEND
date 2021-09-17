import React, { useContext, useState , useEffect} from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import './CSCreateReport.css';
import { Link} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {GlobalState} from '../../../../../GlobalState'
import {useHistory, useParams} from 'react-router'

const styles ={
  outer: {
    borderRadius: "2.5%",
    boxShadow: "0 10px 30px #BBB",
    padding: "40px 60px",
    width: "95%",
    marginLeft: "2%"
  }
};
const initialState= {
  date:new Date(),
  start_time:new Date(),
  end_time: new Date(),
  orders_count:'',
  complete_orders_count:'',
  canceled_orders_count:'',
  revenue:'',
  other_payments:'',
  total_suppliers_charges:'',
  _id: ''
}

function CSCreateReport() {

  const state = useContext(GlobalState)
  const [savedreport, setSavedReport] = useState(initialState)
  

  const [isCashier] = state.csuserAPI.isCashier
  const [token] = state.token

  
  const history = useHistory()
  const param = useParams()

  const [onEdit, setOnEdit] = useState(false)
  const [callback, setCallback] = state.reportsAPI.callback
  const [reports] = state.reportsAPI.reports

  const [date, setDate] = useState(new Date());
  const [start_time, setstart_time] = useState(new Date());
  const [end_time, setend_time] = useState(new Date());
  const [id, setID] = useState('')

  useEffect(() =>{
    if(param.id){
        setOnEdit(true)
        reports.forEach(report =>{
            if(report._id === param.id){
                setSavedReport(report)
            } 
        })
    }else{
        setOnEdit(false)
        setSavedReport(initialState)
    }
}, [param.id, reports])

   const handleChangeInput = (e) =>{

    const {name, value} = e.target
    setSavedReport({...savedreport, [name]: value})

  }

  function clearAllFields() {
    this.setReports(initialState)
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
  const handleSubmit = async e =>{
    e.preventDefault()
    try{
        if(!isCashier) return alert("You are not an admin")
        

        if(onEdit){
            await axios.put(`/api/savedreport/${savedreport._id}`, {...savedreport}, {
                headers: {Authorization:token}
            })
        }else{
            await axios.post('/api/savedreport', {...savedreport, date, start_time, end_time}, {
                headers: {Authorization:token}
            })
        }
        setCallback(!callback)
        history.push("/saved-reports")
        

    }catch(err){
        alert(err.response.data.msg) 
    }
}
    return (
        <div className="createReport">
        <div style={styles.outer} >
         
          <form>
          <button><Link to ="/saved-reports"><ArrowBackIosIcon></ArrowBackIosIcon></Link></button>
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
                              name="date"
                              value= {date}
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
                              name="start_time"
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
                              name="end_time"
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
                          value={savedreport.orders_count}  onChange={handleChangeInput}
                          name="orders_count"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Completed Orders</label>
                          <input type="Number" placeholder="Completed Orders" className= "form-control"
                          value={savedreport.complete_orders_count}  onChange={handleChangeInput}
                          name="complete_orders_count"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Canceled Orders</label>
                          <input type="Number" placeholder="Canceled Orders" className= "form-control"
                          value={savedreport.canceled_orders_count}  onChange={handleChangeInput}
                          name="canceled_orders_count"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Revenue      </label><br></br>
                          <input type="Number" placeholder="Revenue" className= "form-control"
                          value={savedreport.revenue}  onChange={handleChangeInput}
                          name="revenue"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Other Payments</label>
                          <input type="Number" placeholder="Other Payments" className= "form-control"
                          value={savedreport.other_payments}  onChange={handleChangeInput}
                          name="other_payments"
                          />
                      </div>
                      <div class="grid-item">
                          <label>Total Suppliers Charges</label>
                          <input type="Number" placeholder="Total Suppliers Charges" className= "form-control"
                          value={savedreport.total_suppliers_charges}  onChange={handleChangeInput}
                          name="total_suppliers_charges"
                          />
                      </div>
                  
                      <div class="grid-item">
                              <button onClick={clearAllFields} >Clear</button>
                      </div>
                      <div class="grid-item">
                            <button type="submit" onSubmit={handleSubmit}>{onEdit? "Update" : "Create"}</button>
                      </div>
                      {/* <div class="grid-item">
                              <button onClick={submitData} >Submit</button>
                      </div> */} 
                      
                  </div>         
              </div>
          </form>
        </div>
        
      </div>
    )
}

export default CSCreateReport
