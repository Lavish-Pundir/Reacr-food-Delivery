// eslint-disable-next-line no-unused-vars
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { RemoveItem } from '../redux/cartSlice'
import { IncrementQty } from '../redux/cartSlice'
import { DecrementQty } from '../redux/cartSlice'


function Card2({ name, id, price, image, qty }) {
    const dispatch = useDispatch()
    return (
        <div className='w-full min-h-35 md:min-h-30 p-2 shadow-lg flex justify-between gap-3 rounded-md'>

            <div className='min-w-0 flex-1 h-full flex gap-3 sm:gap-5'>
                <div className='w-24 sm:w-[45%] h-28 overflow-hidden rounded-lg shrink-0'>
                    <img src={image} alt={name} className='w-full h-full object-cover' />
                </div>

                <div className='min-w-0 flex flex-col gap-4'>
                    <div className='text-base sm:text-lg text-gray-600 font-semibold leading-tight'>
                        {name}
                    </div>

                    <div className='w-28 h-11 bg-slate-200 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl'>

                        <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-400'
                            onClick={() => { qty > 1 ? dispatch(DecrementQty({ id: id })) : 1 }}
                        >
                            -
                        </button>

                        <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400 '>
                            {qty}
                        </span>

                        <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-400'
                            onClick={() => { dispatch(IncrementQty({ id: id })) }}
                        >
                            +
                        </button>
                    </div>

                </div>

            </div>

            <div className='flex flex-col justify-start items-end gap-6 shrink-0'>
                <span className='text-lg sm:text-xl text-green-400 font-semibold'>Rs{price}</span>
                <RiDeleteBin6Line className='w-7.5 h-7.5 text-red-400 cursor-pointer'
                    onClick={() => dispatch(RemoveItem(id))}
                />
            </div>

        </div>
    )
}

export default Card2
