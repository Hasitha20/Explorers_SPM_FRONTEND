import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function LoginU() {

    const [user, setUser] = useState({
        email:'', password:''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value })
    }

    const loginSubmit = e =>{
        e.preventDefault()
        try{
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = "/menu";
        }catch (err){
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page-user">
            <form onSubmit={loginSubmit}>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput}/>

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput}/>

                <div className="row">
                        <button type="submit"></button>
                        <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    )
}
