import { createContext, useContext, useState } from "react";
import { getUser } from "../services/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const currentUser = getUser();
    const [user, setUser] = useState(currentUser ? { id: currentUser.id, email: currentUser.email,
        //  name: currentUser.name, birthday: currentUser.birthday, bio: currentUser.bio 
        } : {});

    console.log(user);
    const value = ({ user, setUser, currentUser })
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('use useUser under UserProvider only');
    }

    return context;
}