import { createContext } from "react";

//createContext is a function

const UserContext=createContext({
    user:{
        name:"Dummy User",
        email:"dummy@gmail.com",
    },
});

export default UserContext;