import React, { useContext } from "react"
import { GithubContext} from "../../context/github/githubContext";
import { Loading } from "../shared/Loading";
import { UserItem } from "./UserItem";


export const UserResults = () => {
    const {users, loading} = useContext(GithubContext);   
    console.log(loading); 
  
  return (
      (loading )? <Loading /> :
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user)=>(
        <UserItem key={user.login} user={user}/>
        ))}    
        </div>
    )
}