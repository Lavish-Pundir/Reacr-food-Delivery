// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react'
import { food_items } from '../food';

// eslint-disable-next-line react-refresh/only-export-components
export const dataContext = createContext();

function UserContext({ children }) {

    let [input, setInput] = useState("")
    let [cate, setCate] = useState(food_items)
    let [ showCart, setShowCart ] = useState(false)

    let data = {
        input,
        setInput,
        cate,
        setCate,
        showCart,
        setShowCart
    }

    return (
        <div>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext
