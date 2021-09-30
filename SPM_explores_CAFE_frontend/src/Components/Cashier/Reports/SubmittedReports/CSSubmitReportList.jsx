import {GlobalState} from '../../../../GlobalState'
import React, {useContext, useState} from 'react'
import {Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Avatar,
  Grid,
  Typography
  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Loading from '../../../Pages/Utils/Loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import '../SavedReports/ReportList/CSSavedReportList.css'
import ReportFilters from '../SavedReports/ReportList/ReportFilters';


const useStyles = makeStyles((theme)=>({
  table:{
      minWidth: 850
  },
  tableContainer: {
      marginTop: 30,
      borderRadius: 15,
      margin: '10px 10px',
      maxWidth: 1050,
      marginLeft:50
  },
  tableHeaderCell: {
      fontWeight: 'bold',
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar:{
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
      fontWeight: 'bold',
      color: theme.palette.primary.dark
  },
  status: {
      fontweight: 'bold',
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'grey',
      borderRadius: 8,
      padding: '3px 10px',
      display: 'inline-block'
  }
}))


function CSSubmitReportList() {
    const state = useContext(GlobalState)
    const [reports] = state.csSubmitReportsAPI.sreports
    const classes = useStyles();
    
    console.log(state)

    return (
      <div className="reportlist">
      <h1 className="saved-reports-title">Submitted Reports</h1>
        <div className="reporttopheader">
         
           <button className="btnnewReport"><Link to = "/create-report" className="btnnewReportlink">New Entry</Link></button>
            <ReportFilters/>
           
        </div>
      {
                <TableContainer component={Paper} className={classes.tableContainer} >
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHeaderCell}>Date</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Start Time</TableCell>
                      <TableCell className={classes.tableHeaderCell}>End Time</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {reports.map((report) => (
                      <TableRow key={report._id}>
                        <TableCell >{new Date(report.date).toLocaleDateString()}</TableCell>
                        <TableCell >{new Date(report.start_time).toLocaleTimeString()}</TableCell>
                        <TableCell >{new Date(report.end_time).toLocaleTimeString()}</TableCell>
                        <TableCell><Link to={`/view-report/${report._id}`} >{<Button  className="viewbtn">
                            View</Button>}</Link></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
      }
      {reports.length === 0 && <Loading/>}
    </div>
    )
}

export default CSSubmitReportList
