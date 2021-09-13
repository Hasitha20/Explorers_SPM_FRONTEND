import  {useState, useEffect} from 'react'
import axios from 'axios'

function MessageAPI() {
    const [message, setMessage] = useState([])
    const [callback, setCallback] = useState(false)

    const getMessageList = async () => {
        const res = await axios.get('/api/message')
        console.log(res.data)
    }

    useEffect(() => {
        getMessageList()
    }, [])

    return {
        userMessage: [message, setMessage],
        callback: [callback, setCallback]
    }
}
 
export default MessageAPI
