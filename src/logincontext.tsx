import { createContext } from "react";
export type UserType={
      name : string | undefined,
      setName:(arge:string|undefined)=>void;

}
export const LoginContext = createContext<UserType|undefined>;