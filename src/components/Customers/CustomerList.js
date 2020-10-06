import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomersCard } from "./Customers"
import "./Customers.css"

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <div className="customers">
            {
                customers.map(customer => {
                    return <CustomersCard key={customer.id} customer={customer} />
                })
            }
        </div>
    )
}
