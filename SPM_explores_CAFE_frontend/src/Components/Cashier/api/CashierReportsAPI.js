import {useState, useEffect} from 'react'
import axios from 'axios'

function CashierReportsAPI() {

    const [report, setReport] = useState([])
    const [callBack, setCallback] = useState(false)

    useEffect(() => {
        const getReport = async () => {
            const res = await axios.get('http://localhost:5000/api/cashierReport')
            setReport(res.data)
            console.log(res.data)
        }
        getReport()
    }, [callBack])

    return {
        report: [report, setReport],
        callback: [callBack, setCallback]
    }
}

export default CashierReportsAPI
