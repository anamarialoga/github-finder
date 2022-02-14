import React, { useEffect, useState } from "react"
import { Loading } from "../shared/Loading";

export const UserResults = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        fetchUsers()
    }, [])
    
    const fetchUsers = async () => {
        const resp = await fetch(`https://api.github.com/users`, 
        {headers : {
            Authorization: `token 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`
        }});
        const data = await resp.json(); 
        //console.log("fetched data: ", data);
        setUsers(data);
        setLoading(false);
    }

    //console.log("users: ", users);


  return (
      (loading )? <Loading /> :
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user)=>(<li key={user.login}>{user.login}</li>))}    
        </div>
    )
}