import React, { createContext } from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { CustomerList } from "./Customers/CustomerList"
import { CustomerProvider } from "./Customers/CustomerProvider"
import { AnimalList} from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationList } from "./Locations/LocationList"
import { LocationProvider } from "./Locations/LocationProvider"
import { EmployeeList } from "./Employees/EmployeeList"
import { EmployeeProvider } from "./Employees/EmployeeProvider"


export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
           
            <AnimalProvider>
                <Route exact path="/animals">
                     <AnimalList />
                </Route>
            </AnimalProvider> 

            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
        </>
    )
}

