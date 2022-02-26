import { createContext, useState } from "react";
import { useUser } from "./UserContext";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState({})
}