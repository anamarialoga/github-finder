import {createContext,  useReducer, useState} from 'react';
import React from 'react';
import { GithubReducer } from './githubReducer';



export const GithubContext = createContext();
const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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"

export const GithubProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const initState = {
        users:[],
    }
    const [state, dispatch] = useReducer(GithubReducer, initState);

    const searchUsers = async (userToSearch) => {
        setLoading(true);
        const newURLparams = new URLSearchParams ({q: userToSearch});
        const resp = await fetch(`${GITHUB_URL}/search/users?${newURLparams}`, 
        {headers : {
            Authorization: `token ${GITHUB_TOKEN}`
        }});
        const data = await resp.json(); 
        dispatch({
            type: 'GET_USERS',
            payload: data.items
        })
        setLoading(false);
    }

    const getUser = async (username) => {
        setLoading(true);
        const resp = await fetch(`${GITHUB_URL}/users/${username}`, 
        {headers : {
            Authorization: `token ${GITHUB_TOKEN}`
        }});

        if(resp.status === 404)
        {
            window.location='/notfound';
        }
        else{
            const data = await resp.json(); 
            setUser(data);
            setLoading(false);
            clearUsers();
        }
    }

    const clearUsers = () => {
        dispatch({
            type: 'SET_USERS',
        })
    }

    return <GithubContext.Provider value={{
        users: state.users,
        user,
        loading,
        searchUsers,
        getUser,
    }}>
        {children}
    </GithubContext.Provider>
}

