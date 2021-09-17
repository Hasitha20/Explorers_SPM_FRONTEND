import {useState, useEffect} from 'react'
import axios from 'axios'

function EmployeeAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [employeeList, setEmployeeList] = useState([])
    const [allEmployees, setAllEmployees] = useState([])
    const [callback, setCallback] = useState(false)
    

    const getEmployeesInformations = async () => {
        const res = await axios.get('/emp/getEmpList')
        //setUsersList(res.data)
        setEmployeeList(res.data.emps)
    }
    const getEmpList = async () => {
        const resEmp = await axios.get('/emp/getEmployee')
        //console.log(resEmp.data)
        setAllEmployees(resEmp.data)
    }
    useEffect(() => {
        getEmployeesInformations()
        getEmpList()
    },  [callback])

    useEffect(() => {
        if(token){
            const getEmployee = async () => {
                try {
                    const res = await axios.get('/emp/infor', {
                        headers: {Authorization: token}
                    })

                    setIsLogged(true)
                } catch (err) {
                    alert(err.responce)
                }
            }
            getEmployee()
        }
    }, [token])

    return {
        isLogged: [isLogged, setIsLogged],
        employeeList: [employeeList, setEmployeeList],
        allEmployees: [allEmployees, setAllEmployees],
        callback: [callback, setCallback],
    }
}

export default EmployeeAPI
