import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function User() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get(`https://reqres.in/api/users?page=${page}`)
    .then((res)=>setUsers(res.data.data))
    .catch((err)=>console.log(err))
  },[page])

  const handleDelete = async (id) => {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };
  

  return (
    <div className='bg-gradient-to-r from-[#136a8a] to-[#267871] w-full h-full'>

      <h2 className='text-3xl font-bold flex justify-center text-white p-3'>
        <i className=" text-black pr-2 pt-1 fa-solid fa-circle-user"></i>User List
      </h2>

      <div className='grid lg:grid-cols-2 place-items-center md:grid-cols-1 sm:grid-cols-1 '>
        {users.map((user)=>(
          <div className='flex flex-col sm:flex-row lg:h-auto bg-[#f7f4ea] rounded-3xl p-4 m-4 mr-4' key={user.id}>
            <img className='h-40 w-40 m-4 rounded-3xl' src={user.avatar} alt={user.first_name}/>
            <div className='m-4 p-2 '>
              <p className='font-bold m-2'>{user.first_name} {user.last_name}</p>
              <p className='m-2 break-all'>Email : {user.email}</p>
              <button onClick={()=>navigate(`/EditUser/${user.id}`)} className='mt-6 mx-4 h-10 w-20 bg-[#acd1f3] rounded-3xl cursor-pointer'>Edit</button>
              <button onClick={()=>handleDelete(user.id)} className='mt-6 mx-4 h-10 w-20 bg-[#acd1f3] rounded-3xl cursor-pointer'>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-between p-4'>
        <button className='m-4 p-2 w-25 rounded-3xl bg-white text-black hover:bg-black hover:text-white cursor-pointer' onClick={()=>setPage((prev)=>prev-1)} disabled={page===1}>Previous</button>
        <button className='m-4 p-2 w-25 rounded-3xl bg-white text-black hover:bg-black hover:text-white cursor-pointer' onClick={()=>setPage((prev)=>prev+1)}>Next</button>
      </div>
      
    </div>
  )
}

export default User
