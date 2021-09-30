
import React, {useContext, useState, useEffect} from 'react'
import { GlobalState } from '../../../GlobalState';
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
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ShopIcon from '@mui/icons-material/Shop';
import GroupIcon from '@mui/icons-material/Group';
import Loading from '../../Pages/Utils/Loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CSLoadMore from '../CSOrders/CSLoadMore';


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
function CSCustomersList() {
    const state = useContext(GlobalState)
    const [cscutomers, setCustomers] = useState([])
    const [setLoading] = useState(false)
    
    const classes = useStyles();
  
    console.log(state)

    useEffect(() => {
     

        axios.get("http://localhost:5000/api/cscustomers").then((res) => {
          console.log(res.data);
          setCustomers(res.data);
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    }, []);
   
  
    return (
    
        <>
     <h1 className="titleOrders">customers     <GroupIcon /></h1>
 
      {
                <TableContainer component={Paper} className={classes.tableContainer} >
                <Table  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tableHeaderCell} >Customer Name</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Email</TableCell>
                      <TableCell className={classes.tableHeaderCell}>Mobile</TableCell>
                   
                    
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cscutomers.map((customer) => (
                      <TableRow key={customer._id}>
                        <TableCell >{(customer.name)}</TableCell>
                        <TableCell >{(customer.email)}<EmailIcon/></TableCell>
                        <TableCell >{(customer.mobile)}<LocalPhoneIcon/></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
      }
      <CSLoadMore/>
      {cscutomers.length === 0 && <Loading/>}
    </>
    )
}

export default CSCustomersList
