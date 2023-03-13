import React, { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const Settings = () => {

    // to be implemented in context
    const [inputValue, setInputValue] = useState("")
    const {greeting, changeGreeting } = useContext(UserContext)

    return (
        <div style={{ border: '5px solid red', padding: '8px' }} id="settings">
            <h4>Settings</h4>
            <input type={'text'} onChange={(e)=>{
                setInputValue(e.target.value)
                changeGreeting(e.target.value)}} value={inputValue}/>
        </div>
    )
}