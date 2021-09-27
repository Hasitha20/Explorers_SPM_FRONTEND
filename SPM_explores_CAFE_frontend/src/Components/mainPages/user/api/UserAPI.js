import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cart from '../cart/Cart'

function UserAPI(token) {

    const[isLogged, setIsLogged] = useState(false)
    const [cart, setCart] = useState([])

    

    useEffect(() => {
        if(token){
            const getUser = async () =>{
                try{
                    const res = await axios.get('/user/infor',{
                        headers: {Authorization: token}
                        
                    })
                    setIsLogged(true)
                    setCart(res.data.cart)
                    console.log(res)
                }catch (err){
                    alert(err.response.data.msg)
                }
            }
            getUser()
        }
    },[token])

    const addCart = async (food) => {
        if(!isLogged) return alert("Please login to continue")

        const check = cart.every(item => {
            return item._id !== food._id
        })

        if(check){
            setCart([...cart, {...food, quantity: 1}])

            await axios.patch('/user/addcart', {cart: [...cart, {...food, quantity: 1}]}, {
                headers:{Authorization: token}
            })
        }
        else{
            alert("This product has been added to cart")
        }
    }

    return {
        isLogged: [isLogged, setIsLogged],
        cart: [cart, setCart],
        addCart: addCart
    }
}

export default UserAPI
