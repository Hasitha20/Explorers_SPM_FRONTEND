import  {useState, useEffect} from 'react'
import axios from 'axios'

function CategoryAPI() {
    const [categorys, setCategorys] = useState([])
    const [callback, setCallback] = useState(false)

    const getCategories = async () => {
        const res = await axios.get('/api/category')
        setCategorys(res.data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return {
        categories: [categorys, setCategorys],
        callback: [callback, setCallback]
    }
}

export default CategoryAPI
