import React, { useState, useEffect} from 'react'
import axios from 'axios'

function ViewAllCategorys() {
    const [postData, setPostData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/categoryRouter/displayAllCategory').then((res) => {
            console.log(res.data)
            setPostData(res.data)
        }).catch(err => {
            console.log(err)
        })
    })

    const ListAllCategoryBySingle = (props) => {
        return(
            <div className="category_card">
                <img src={props.record.images.url} alt="" />

                <div className="category_box">
                    <h2 title={props.record.categoryName}>{props.record.categoryName}</h2>
                    <span>{props.record.status}</span>
                </div>
            </div>
        )
    }

    const categoryAll = postData.map((single) => {
        return (
            <ListAllCategoryBySingle record = {single} />
        )
    })

    return (
        <div className="categorys">
            {categoryAll}
        </div>
    )
}

export default ViewAllCategorys
