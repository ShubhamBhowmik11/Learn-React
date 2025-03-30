import Dashboard from './Dashboard'
import UserContext from './UserContext'
 export type UserType = {
       name:string,
       isSubscribed:boolean
}
const UserDashboard = ()=>{
      const user:UserType={
            name:"shubham",
            isSubscribed:true
      }
      return (
            <>
            <UserContext.Provider value={user}>
             <Dashboard></Dashboard>
            </UserContext.Provider>
            </>
      )
}
export default UserDashboard;