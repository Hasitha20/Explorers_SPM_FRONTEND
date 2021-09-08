import {useState, useEffect} from 'react'
import axios from 'axios'

function EmployeeAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [employeeList, setEmployeeList] = useState([])
    const [callback] = useState(false)
    

    const getEmployeesInformations = async () => {
        const res = await axios.get('/emp/getEmployee')
        //setUsersList(res.data)
        setEmployeeList(res.data)
    }
    useEffect(() => {
        getEmployeesInformations()
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
                    alert(err.responce.data.msg)
                }
            }
            getEmployee()
        }
    }, [token])

    return {
        isLogged: [isLogged, setIsLogged],
        employeeList: [employeeList, setEmployeeList]
    }
}

export default EmployeeAPI
