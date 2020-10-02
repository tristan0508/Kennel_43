import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { EmployeesCard } from "./Employees/Employees"
import { LocationCard } from "./Locations/Locations"
import { CustomersCard } from "./Customers/Customers"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard
            name={"Doodles"} 
            dog={"Poodle"}/>
            <AnimalCard
            name={"Major"} 
            dog={"German Shepherd"}/>
            <AnimalCard 
            name={"Labby"}
            dog={"Laborador"}/>
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeesCard />
            <EmployeesCard />
            <EmployeesCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
        </article>
    </>
)

