import {useState, useEffect} from 'react'
import axios from 'axios'

function ReportsAPI() {
    const [reports, setReports] = useState([])
    const [callback, setCallback] = useState(false)

    const getReports = async () =>{
        const res = await axios.get('api/savedreport')
        setReports(res.data)
    }

    useEffect(()=>{
        getReports()
    }, [])



    return {
        reports: [reports, setReports],
        callback: [callback, setCallback]
    }
}

export default ReportsAPI
