import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'

function EditUser() {
  const {id}=useParams()
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get(`https://reqres.in/api/users/${id}`)
        .then((res)=>setUser(res.data.data))
        .catch((err)=>console.log(err))
    },[id])


  const [user, setUser] = useState({
    first_name:'',
    last_name:'',
    email:'',
    avatar:'',
  })
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const handleUpdate=async(e)=>{
      e.preventDefault();
      await axios.put(`https://reqres.in/api/users/${id}`,{
        first_name:user.first_name,
        last_name:user.last_name,
        email:user.email
      })
      alert("Details succussfully updated")
      navigate('/User')
    }
  return (
    <div className='bg-gradient-to-r from-[#136a8a] to-[#267871] lg:h-screen lg:w-full md:h-screen md:w-full sm:h-screen sm:w-full p-6 text-white '>
  
      <h2 className='text-3xl font-bold p-3 mb-5  flex justify-center'>
      <i className="fa-solid fa-circle-user pr-2 text-black"></i>Edit User</h2>
  
      <form onSubmit={handleUpdate} action="">
        <div className='bg-white/15 backdrop-blur-lg grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center w-full max-w-4xl mx-auto h-auto rounded-3xl'>
      
          <div className='m-6 p-2 flex flex-col items-center'>
            <h5 className='m-4 text-2xl font-bold'>Avatar</h5>
            <img className='lg:h-60 lg:w-60 md:h-40 md:w-40 sm:h-32 sm:w-32 m-4 rounded-3xl' src={user.avatar} alt={user.first_name} />
          </div>

          <div className='flex flex-col p-6 m-4'>
            <label className='mt-4 p-4' htmlFor="fName">
              <i className="fa-solid fa-circle-user pr-2 text-black"></i>First Name:
            </label>
            <input className='ml-4 p-2 border-2 rounded-3xl w-full' onChange={handleChange} id='fName' name='first_name' type="text" value={user.first_name} />
        
            <label className='mt-4 m-2 p-2' htmlFor="lName">
              <i className="fa-solid fa-circle-user pr-2 text-black"></i>Last Name:
            </label>
            <input className='ml-4 border-2 p-2 rounded-3xl w-full' onChange={handleChange} id='lName' name='last_name' type="text" value={user.last_name} />
        
            <label className='mt-4 m-2 p-2' htmlFor="email">
              <i className="fa-solid fa-envelope-open pr-2 text-black"></i>E-mail:
            </label>
            <input className='ml-4 border-2 p-2 rounded-3xl w-full' onChange={handleChange} id='email' name='email' type='email' value={user.email} />
        
            <button className='mt-10 m-6 h-12 w-30 bg-white text-black hover:bg-black hover:text-white cursor-pointer rounded-3xl' type='submit'>Update</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditUser
