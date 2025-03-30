import { createContext } from "react";
 export interface User {
       name:string,
       isSubscribed:boolean
}
const UserContext = createContext<null | User>(null);
export default UserContext;