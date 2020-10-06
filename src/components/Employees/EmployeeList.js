import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeesCard } from "./Employees"
import "./Employees.css"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="employees">
            {
                employees.map(employee => {
                    return <EmployeesCard key={employee.id} employee={employee} />
                })
            }
        </div>
    )
}