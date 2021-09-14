import React, { useEffect, useState } from 'react'
import axios from 'axios'

function KMmessagesAPI() {
    const [messageskm, setmessageskm] = useState([])

    useEffect(() => {
        const getmessageskm = async () => {
            const res = await axios.get('/api/messagekm')
            console.log(res)
        }

        getmessageskm()
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default KMmessagesAPI
