import React, {useContext} from 'react'
import {GlobalState} from '../../../../../GlobalState'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function CSSavedReportList() {
    const state = useContext(GlobalState)
    const [reports] = state.reportsAPI.reports

    console.log(state)

    
      


    return (
        <TableContainer component={Paper}>
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
                   <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                   Delete</Button>
                   
              }</TableCell>
              <TableCell>{<Button variant="contained" color="secondary" startIcon={<EditIcon />}>
                   Edit</Button>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default CSSavedReportList
