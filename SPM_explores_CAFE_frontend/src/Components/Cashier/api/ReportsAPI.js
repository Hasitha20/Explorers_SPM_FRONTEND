import {useState, useEffect} from 'react'
import axios from 'axios'

function ReportsAPI() {
    const [reports, setReports] = useState([])

    const getReports = async () =>{
        const res = await axios.get('api/savedreport')
        setReports(res.data)
    }

    useEffect(()=>{
        getReports()
    }, [])



    return {
        reports: [reports, setReports]
    }
}

export default ReportsAPI
