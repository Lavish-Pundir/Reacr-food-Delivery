// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'
import { LuShoppingBag } from 'react-icons/lu'
import { MdFastfood } from 'react-icons/md'
import { dataContext } from '../context/UserContext'
import { food_items } from '../food'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Nav() {

    // eslint-disable-next-line no-unused-vars
    let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext)

    useEffect(() => {
        let searchValue = input.trim().toLowerCase()
        let newList = food_items.filter((item) => item.food_name.toLowerCase().includes(searchValue))
        setCate(newList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input])

    let items = useSelector(state => state.cart)

    return (
        <div className='w-full min-h-25 flex flex-wrap justify-between items-center gap-3 px-3 py-4 sm:px-5 md:px-8'>

            <Link
                to='/home'
                className='w-13 h-13 sm:w-16 sm:h-16 bg-white flex justify-center items-center rounded-md shadow-md cursor-pointer shrink-0'
                aria-label='Go to home'
            >
                <MdFastfood className='w-7 h-7 sm:w-8 sm:h-8 text-green-500' />
            </Link>

            <form className='order-3 w-full h-13 bg-white flex items-center px-4 gap-3 rounded-md shadow-md sm:order-none sm:flex-1 sm:h-14 sm:px-5 sm:gap-5'
                onSubmit={(e) => e.preventDefault()}
            >
                <IoSearch className=' text-green-500 h-5 w-5 ' />
                <input type="text" placeholder='Search Items...'
                    className='w-full outline-none text-[16px] md:text-[20px]'
                    onChange={(e) => setInput(e.target.value)} value={input}
                />
            </form>

            <div className='flex items-center gap-2 sm:gap-3'>
                <Link
                    to='/login'
                    className='h-11 px-3 sm:h-12 sm:px-5 bg-white text-green-500 font-semibold rounded-md shadow-md hover:bg-green-50 transition-all flex items-center'
                >
                    Login
                </Link>
                <Link
                    to='/signup'
                    className='h-11 px-3 sm:h-12 sm:px-5 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-400 transition-all flex items-center whitespace-nowrap'
                >
                    Sign Up
                </Link>
                <div className='w-13 h-13 sm:w-16 sm:h-16 bg-white flex justify-center items-center rounded-md shadow-md relative cursor-pointer shrink-0'
                    onClick={() => {
                        setShowCart(true)
                    }}
                >
                    <span className='absolute top-0 right-2 text-green-500 font-bold text-[16px] sm:text-[18px]'>
                        {items.length}
                    </span>
                    <LuShoppingBag className='w-7 h-7 sm:w-8 sm:h-8 text-green-500' />
                </div>
            </div>

        </div>
    )
}

export default Nav
