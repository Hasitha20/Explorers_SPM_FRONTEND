import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../../GlobalState'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Loading from '../../../Pages/Utils/Loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios'
import ReportFilters from '../SavedReports/ReportList/ReportFilters';

function CSSubmitReportList() {
    const state = useContext(GlobalState)
    const [reports] = state.csSubmitReportsAPI.sreports
    const [loading, setLoading] = useState(false)
    const [callback, setCallback] = state.csSubmitReportsAPI.callback
    const [isCashier] = state.csuserAPI.isCashier
    const [token] = state.token
    
    console.log(state)

    return (
      <>
      <button><Link to = "/create-report">New Entry</Link></button>
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
                        <TableCell><Link to={`/edit-report/${report._id}`}>{<Button variant="contained" color="secondary" startIcon={<EditIcon />}>
                            View</Button>}</Link></TableCell>
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

export default CSSubmitReportList
