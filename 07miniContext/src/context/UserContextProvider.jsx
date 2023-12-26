import React from 'react'
import UserContext from './UserContext'

//fragments mentioned in contextProvider,therefore it is a jsx type file

const UserContextProvider=({children})=>{
  
    const [user,setUser]=React.useState(null)

    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider