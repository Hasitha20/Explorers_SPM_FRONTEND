import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
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
import EditIcon from '@material-ui/icons/Edit';
import Loading from '../../Pages/Utils/Loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios'
import OrderFilters from './OrderFilters';
import Button from 'react-bootstrap/Button';
import './CSOrders.css'
import CSLoadMore from './CSLoadMore';


const useStyles = makeStyles((theme)=>({
    table:{
        minWidth: 650
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
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

function CSOrdersList() {

    const state = useContext(GlobalState)
    const [csorders] = state.csordersAPI.csorders
    const [setLoading] = useState(false)
    const [callback, setCallback] = state.csordersAPI.callback
    const [token] = state.token
    const classes = useStyles();
    
    console.log(state)

    const deleteorder = async(id) =>{
      console.log({id})
      
      try{
          setLoading(true)
          const deleteorder = axios.delete(`/api/csorder/${id}`, {
              headers: {Authorization: token}
          })

      
          await deleteorder
          setCallback(!callback)
          setLoading(false)
      }catch(err){
          alert(err.response.data.msg)
      }
    }


    return (
    
        <>
      <button variant="danger" size="lg"><Link to = "/create-order">New Entry</Link></button>
      <OrderFilters/>
      {
                <TableContainer component={Paper} className={classes.tableContainer} >
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHeaderCell} >Order ID</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Date and Time</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Customer Name</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Total Price</TableCell>
                      <TableCell className={classes.tableHeaderCell} >Status</TableCell>
                      <TableCell className={classes.tableHeaderCell}
                                  style={{
                                      maxWidth: 1200
                                  }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {csorders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell >{(order.orderid)}</TableCell>
                        <TableCell >{new Date(order.date).toLocaleString()}</TableCell>
                        <TableCell >
                            <Grid container>
                                <Grid item lg={4}>
                                    <Avatar alt={(order.customername)} src='.' className={classes.avatar}/>
                                </Grid>
                                <Grid item lg= {4}>
                                <Typography className= {classes.name}>{(order.customername)}</Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell >${(order.totalPrice)}</TableCell>
                        <TableCell >
                            <Typography 
                            className={classes.status}
                            style={{
                                backgroundColor:
                                ((order.status === 'Completed' && 'green') ||
                                (order.status === 'In Progress' && 'orange') ||
                                (order.status === 'New' && 'blue') ||
                                (order.status === 'Cancel' && 'red'))
                            }}
                            >{(order.status)}</Typography>
                        </TableCell>
                        <TableCell >{
                            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={()=> deleteorder(order._id)}>
                            Delete</Button>
                            
                        }</TableCell>
                        <TableCell><Link to={`/edit-order/${order._id}`}>{<Button variant="contained" color="secondary" startIcon={<EditIcon />}>
                            Edit</Button>}</Link></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
      }
      <CSLoadMore/>
      {csorders.length === 0 && <Loading/>}
    </>
    )
}

export default CSOrdersList
