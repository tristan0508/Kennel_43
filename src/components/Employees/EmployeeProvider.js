import React, { useState, createContext } from "react"

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        fetch("http://localhost:8088/Employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployees = employeeObj => {
        fetch("http://localhost:8088/Employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
    }

    return(
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployees
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}