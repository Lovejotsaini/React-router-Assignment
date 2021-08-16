import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UsersList=(props)=>{
    const [users,setUsers]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const result=response.data
            setUsers(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])


    return (
        <div>
            <h1>Users List-{users.length}</h1>
            <ol>{users.map((ele)=>{
                return <li key={ele.id}><Link to={`/users/${ele.id}`}>{ele.username}</Link></li>
            })}
            </ol>
        </div>
    )
}

export default UsersList