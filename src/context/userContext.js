import React, { createContext, useState } from "react";
import { Settings } from "../components/Settings";


const UserContext = createContext()

const Wrapper = (props) => {

    const [greeting, setGreeting] = useState("Hello")

    const changeGreeting = (newGreeting) => {
        setGreeting(newGreeting)
    }
    console.log(props);
    return (
        <UserContext.Provider value={{ greeting, changeGreeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }
