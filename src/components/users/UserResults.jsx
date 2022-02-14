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

    console.log("users: ", users);


  return (
      (loading)? <Loading /> :
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user)=>(<h3>{user.login}</h3>))}    
        </div>
    )
}