import { createContext } from "react";

const UserContext = createContext({
    name: "Swiggy",
    email: "johndoe@example.com"
})

export default UserContext