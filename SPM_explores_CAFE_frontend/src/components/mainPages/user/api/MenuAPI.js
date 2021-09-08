import React,  {useState, useEffect} from 'react'
import axios from 'axios'

function MenuAPI(){
    const [foods, setFoods] = useState([])
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    const getFoods = async () =>{
        // const res = await axios.get(`/api/foods?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
        const res = await axios.get('/api/foods')
        setFoods(res.data.foods)
        console.log(res)
    }

    useEffect(() =>{
        getFoods()
    },[])
    return{
        foods: [foods, setFoods],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]

    }

}

export default MenuAPI