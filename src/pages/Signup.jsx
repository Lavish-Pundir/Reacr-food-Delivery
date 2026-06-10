import { useState } from 'react'
import { MdFastfood } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Signup() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        toast.success('Account created')
        navigate('/home')
    }

    return (
        <div className='min-h-screen bg-slate-200 flex items-center justify-center px-5 py-10'>
            <div className='w-full max-w-md bg-white rounded-lg shadow-xl p-7'>
                <div className='flex items-center justify-between mb-8'>
                    <Link
                        to='/home'
                        className='w-14 h-14 bg-green-50 flex justify-center items-center rounded-md'
                        aria-label='Go to home'
                    >
                        <MdFastfood className='w-8 h-8 text-green-500' />
                    </Link>
                    <Link
                        to='/login'
                        className='text-green-500 font-semibold hover:text-green-400'
                    >
                        Login
                    </Link>
                </div>

                <h1 className='text-3xl font-bold text-gray-700 mb-2'>Create account</h1>
                <p className='text-gray-500 mb-8'>Sign up to save your details and order faster.</p>

                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-600 font-semibold' htmlFor='name'>Full Name</label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter your name'
                            className='h-13 rounded-md bg-slate-100 px-4 outline-none focus:ring-2 focus:ring-green-400'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-600 font-semibold' htmlFor='email'>Email</label>
                        <input
                            id='email'
                            name='email'
                            type='email'
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='you@example.com'
                            className='h-13 rounded-md bg-slate-100 px-4 outline-none focus:ring-2 focus:ring-green-400'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-600 font-semibold' htmlFor='password'>Password</label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            required
                            minLength='6'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Create password'
                            className='h-13 rounded-md bg-slate-100 px-4 outline-none focus:ring-2 focus:ring-green-400'
                        />
                    </div>

                    <button className='w-full p-3 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-400 transition-all'>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup
