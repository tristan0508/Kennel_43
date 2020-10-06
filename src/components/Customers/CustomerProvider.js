import React, { useState, createContext } from "react"

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(setCustomers)
    }

    const addCustomers = customerObj => {
        fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerObj)
        })
        .then(getCustomers)
    }

    return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomers
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}