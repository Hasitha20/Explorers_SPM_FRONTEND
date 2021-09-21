import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../../../GlobalState'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Loading from '../../../../Pages/Utils/Loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios'
import ReportFilters from './ReportFilters';
import Button from 'react-bootstrap/Button';


function CSSavedReportList() {
    const state = useContext(GlobalState)
    const [reports] = state.reportsAPI.reports
    const [ setLoading] = useState(false)
    const [callback, setCallback] = state.reportsAPI.callback
    const [token] = state.token
    
    console.log(state)

    const deletereport = async(id) =>{
      console.log({id})
      
      try{
          setLoading(true)
          const deleteReport = axios.delete(`/api/savedreport/${id}`, {
              headers: {Authorization: token}
          })

      
          await deleteReport
          setCallback(!callback)
          setLoading(false)
      }catch(err){
          alert(err.response.data.msg)
      }
     }


    return (
      <>
      <button variant="danger" size="lg"><Link to = "/create-report">New Entry</Link></button>
      <ReportFilters/>
      {
                <TableContainer component={Paper} >
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">Date</TableCell>
                      <TableCell align="right">Start Time</TableCell>
                      <TableCell align="right">End Time</TableCell>
                      <TableCell align="right">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {reports.map((report) => (
                      <TableRow key={report._id}>
                        <TableCell align="right">{new Date(report.date).toLocaleDateString()}</TableCell>
                        <TableCell align="right">{new Date(report.start_time).toLocaleTimeString()}</TableCell>
                        <TableCell align="right">{new Date(report.end_time).toLocaleTimeString()}</TableCell>
                        <TableCell align="right">{
                            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={()=> deletereport(report._id)}>
                            Delete</Button>
                            
                        }</TableCell>
                        <TableCell><Link to={`/edit-report/${report._id}`}>{<Button variant="contained" color="secondary" startIcon={<EditIcon />}>
                            Edit</Button>}</Link></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
      }
      {reports.length === 0 && <Loading/>}
    </>
    )
}

export default CSSavedReportList
