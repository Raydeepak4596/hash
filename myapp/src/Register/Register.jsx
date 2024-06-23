import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  
    const navigate = useNavigate()
    const [user, setuser] = useState({
        email: '',
        password: ''
    })

    const handle = (e) => {
        const { name, value } = e.target
        setuser({ ...user, [name]: value })
    }


    const adduser = async () => {
        try {
            // bcrypt.hash(user.password,salt,(err,hash)=>{
            //     const d={
            //         email:email,
            //         password:hash
            //     }
            // })
           
            if (user.email === '' || user.password === '') {
                alert('Please enter user')
            }

            else {
                axios.post('http://localhost:5500/api/vi/user', user)
                setuser({
                    email: '',
                    password: ''
                })
            
            }
           
        } catch (error) {

        }
    }

    return (
        <div>
            <input type="text" placeholder='email' name='email' onChange={handle} value={user.email} />
            <input type="text" placeholder='password' name='password' onChange={handle} value={user.password} />
            <button onClick={adduser}>User</button>
        </div>
    )
}

export default Register
