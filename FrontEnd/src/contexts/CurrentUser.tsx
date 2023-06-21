import React, { createContext, useState } from "react";

interface UserContextValue {
    currentUser: any;
    setCurrentUser: any;
  }

export const CurrentUser = createContext<UserContextValue | null>(null)

function CurrentUserProvider({ children }: any){

    const [currentUser, setCurrentUser] = useState(null)

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider