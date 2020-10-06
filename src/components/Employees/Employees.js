import React from "react"
import "./Employees.css"

export const EmployeesCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location">{employee.location.name}, {employee.location.address}</div>
    </section>
)