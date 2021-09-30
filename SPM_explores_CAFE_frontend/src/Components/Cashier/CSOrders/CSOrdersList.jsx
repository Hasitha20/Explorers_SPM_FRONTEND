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
import ShopIcon from '@mui/icons-material/Shop';
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

function CSOrdersList() {

    const state = useContext(GlobalState)
    const [csorders] = state.csordersAPI.csorders
    const [setLoading] = useState(false)
    const [callback, setCallback] = state.csordersAPI.callback
    const [token] = state.token
    const classes = useStyles();
    const [onEdit, setOnEdit] = useState(false)
    const [status, setStatus] = useState([])
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

    const handleChangeInput = (status) =>{

     
      setStatus(status);
  
    }
   const updateOrder = async(id) =>{
   
      setOnEdit(true)
      await axios.put(`/api/csorder/${csorders._id}`, {status});
      alert("Order updated successfully")
       
   }
    return (
    
        <>
     <h1 className="titleOrders">Orders      <ShopIcon /></h1>
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
                      <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
                      <TableCell className={classes.tableHeaderCell}></TableCell>
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
                            <Typography contenteditable="true"  
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
                            <Button className="deleteorderbtn" startIcon={<DeleteIcon />} onClick={()=> deleteorder(order._id)}>
                            Delete</Button>
                            
                        }</TableCell>
                        <TableCell><Link to={`/view-order/${order._id}`}>{<Button className="viewOrderbtn">
                            View Order</Button>}</Link></TableCell>
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
