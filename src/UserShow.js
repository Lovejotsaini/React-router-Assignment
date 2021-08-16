import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserShow = (props) => {
    const { id } = props.match.params
    const [user, setUsers] = useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const result=response.data
            setUsers(result)
        })
    })
    return (
        <div>
            <h1>Show-{id}</h1>
            <p>{user.username}-{user.email}-{user.address && user.address.city}</p>

            <Link to="/">back</Link>
        </div>
    )
}

export default UserShow