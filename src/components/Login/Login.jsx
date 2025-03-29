import React,{useState} from 'react'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'

const Login = () =>{
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.post("https://reqres.in/api/login",{
        email,
        password,
      })
      localStorage.setItem('token',res.data.token)
      alert('Login Successfull')
      navigate('/User')

    }catch(error){
      alert('Enter Valid Credidentials')
    }
  }

  return (
    <div className='bg-gradient-to-r from-[#136a8a] to-[#267871] lg:h-screen lg:w-full md:h-screen md:w-full sm:h-screen sm:w-full w-full h-screen flex flex-col justify-center items-center text-white'>
      <div className=' bg-white/15 backdrop-blur-lg lg:h-auto lg:w-auto md:h-auto md:w-1/2 sm:h-auto sm:w-1/2 flex flex-col justify-center items-center p-10 rounded-4xl shadow-2xl'>
      
        <h1 className='text-3xl font-bold '><i className="text-[black] pr-2 fa-solid fa-user-lock"></i> Log In</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className='flex flex-col p-2 m-2'>
        
          <label className='pt-4 m-2' htmlFor="Email">
            <i className="fa-solid fa-envelope-open pr-2 text-black"></i> E-mail : </label>
          <input className='p-1 mt-2 w-70 h-10 border rounded-3xl ' type="Email" id="Email" placeholder=' E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
        
          <label className='pt-4 m-2' htmlFor="Password">
            <i className="fa-solid fa-key text-black pr-2"></i> Password : </label>
          <input className='p-1 mt-2 border w-auto h-10 rounded-3xl' type="password" id="Password" placeholder=' Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <button className='p-2 m-10 rounded-3xl cursor-pointer bg-white text-black hover:bg-black hover:text-white' type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
