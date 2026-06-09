// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'
import { LuShoppingBag } from 'react-icons/lu'
import { MdFastfood } from 'react-icons/md'
import { dataContext } from '../context/UserContext'
import { food_items } from '../food'
import { useSelector } from 'react-redux'

function Nav() {

    // eslint-disable-next-line no-unused-vars
    let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext)

    useEffect(() => {
        let newList = food_items.filter((item) => item.food_name.toLowerCase().includes(input))
        setCate(newList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input])

    let items = useSelector(state => state.cart)
    console.log(items);
    

    return (
        <div className='w-full h-25 flex justify-between items-center px-5 md:px-8'>

            <div className='w-16 h-16 bg-white flex justify-center items-center rounded-md shadow-md'>
                <MdFastfood className='w-8 h-8 text-green-500' />
            </div>

            <form className='w-[45%] h-14 bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]'
                onSubmit={(e) => e.preventDefault()}
            >
                <IoSearch className=' text-green-500 h-5 w-5 ' />
                <input type="text" placeholder='Search Items...'
                    className='w-full outline-none text-[16px] md:text-[20px]'
                    onChange={(e) => setInput(e.target.value)} value={input}
                />
            </form>

            <div className='w-16 h-16 bg-white flex justify-center items-center rounded-md shadow-md relative cursor-pointer'
                onClick={() => {
                    setShowCart(true)
                }}
            >
                <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>
                    {items.length}
                </span>
                <LuShoppingBag className='w-8 h-8 text-green-500' />
            </div>

        </div>
    )
}

export default Nav
