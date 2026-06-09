// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { ImCross } from "react-icons/im";
import { dataContext } from '../context/UserContext'
import { useSelector } from 'react-redux'
import Card2 from '../components/Card2'
import { toast } from 'react-toastify'

function Home() {

    let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)

    function filter(category) {
        if (category === "All") {
            setCate(food_items);
        } else {
            let newList = food_items.filter((item) => (item.food_category === category))
            setCate(newList)
        }
    };

    let items = useSelector(state => state.cart)

    let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
    // console.log(subtotal);
    let deliveryFee = 20
    let taxes = subtotal * 0.5 / 100
    let total = Math.floor(subtotal + deliveryFee + taxes)


    return (
        <div className='bg-slate-200 w-full min-h-screen'>
            <Nav />

            {
                !input ?
                    <div className='flex flex-wrap justify-center items-center gap-6 w-full'>
                        {
                            Categories.map((item) => {
                                return (
                                    <div key={item.id} className='w-35 h-38 bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-500 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200'
                                        onClick={() => filter(item.name)}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </div>
                                )
                            })
                        }
                    </div> : null
            }


            <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center p-8 pb-8'>
                {
                    cate.length > 1 ?
                        cate.map((item) => (
                            <Card
                                key={item.id}
                                name={item.food_name}
                                image={item.food_image}
                                price={item.price}
                                id={item.id}
                                type={item.food_type}
                            />
                        )) :
                        <div className="text-center text-2xl text-green-500 font-semibold pt-5">
                            No Dish Found
                        </div>
                }

            </div>

            <div className={`w-full md:w-[35vw] h-full fixed top-0 right-0 bg-white shado-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart ? "translate-x-0" : "translate-x-full "}`}
            >
                <header className='w-full flex justify-between items-center'>
                    <span className='text-green-400 text-[20px] font-semibold'>Order Items</span>
                    <ImCross className='h-5 w-5 text-green-400 text-2xl font-semibold cursor-pointer hover:text-gray-600'
                        onClick={() => setShowCart(false)}
                    />
                </header>

                {
                    items.length > 0 ?
                        <>
                            <div className='w-full mt-9 flex flex-col gap-8'>
                                {
                                    items.map((item, index) => (
                                        <Card2
                                            key={`${item.id}-${index}`}
                                            name={item.name}
                                            price={item.price}
                                            image={item.image}
                                            id={item.id}
                                            qty={item.qty}
                                        />
                                    ))
                                }
                            </div>

                            <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'
                            >
                                <div className="w-full flex justify-between items-center">
                                    <span className="text-lg text-gray-600 font-semibold" >Subtotal</span>
                                    <span className="text-green-400 font-semibold text-md">Rs{subtotal}/-</span>
                                </div>

                                <div className="w-full flex justify-between items-center">
                                    <span className="text-lg text-gray-600 font-semibold" >Delivery Fee</span>
                                    <span className="text-green-400 font-semibold text-md">Rs{deliveryFee}/-</span>
                                </div>

                                <div className="w-full flex justify-between items-center">
                                    <span className="text-lg text-gray-600 font-semibold" >Taxes</span>
                                    <span className="text-green-400 font-semibold text-md">Rs{taxes}/-</span>
                                </div>

                            </div>

                            <div className="w-full flex justify-between items-center p-6">
                                <span className="text-[20px] text-gray-600 font-semibold" >Total</span>
                                <span className="text-green-400 font-semibold text-md">Rs{total}/-</span>
                            </div>
                            <button className="w-[90%] p-2 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all"
                                onClick={() => {
                                    toast.success("Order Placed...")
                                }}
                            >
                                Place Order
                            </button>
                        </>
                        :
                        <div className="text-center text-2xl text-green-500 font-semibold pt-5">
                            Empty Cart
                        </div>
                }

            </div>

        </div >
    )
}

export default Home
