// eslint-disable-next-line no-unused-vars
import React from 'react'
import { LuLeafyGreen } from 'react-icons/lu'
import { GiChickenOven } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { AddItem } from '../redux/cartSlice'
import { toast } from 'react-toastify'


function Card({ id, name, image, price, type }) {
    let dispatch = useDispatch()

    return (

        <div className='w-75 h-100 bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 '>

            <div className='w-full h-[60%] overflow-hidden rounded-lg'>
                <img
                    src={image}
                    alt={name}
                // className="w-full h-full object-cover"
                />
            </div>

            <div className='text-2xl font-semibold'>
                {name}
            </div>

            <div className='w-full flex justify-between items-center'>
                <div className='text-lg font-bold text-green-500'>
                    Rs {price}/-
                </div>

                <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'>
                    {type === "veg"
                        ? <LuLeafyGreen />
                        : <GiChickenOven />
                    }
                    <span>{type}</span>
                </div>
            </div>

            <button className='w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all'
                onClick={() => {
                    dispatch(AddItem({ id, name, price, image, qty: 1 }));
                    toast.success("Item added")
                }}
            >
                Add to Dish
            </button>
        </div>
    )
}

export default Card
