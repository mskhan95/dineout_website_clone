import React, {useState} from 'react'
import { createContext } from 'react'

export const MyContext = createContext();

export default function Context({children}) {

    const [city, setcity] = useState("Delhi")

    const [user, setUser] = useState("")
  
    return (
      <div>
        <MyContext.Provider value={{city,setcity,user,setUser }}>{children}</MyContext.Provider>
      </div>
    )
  }