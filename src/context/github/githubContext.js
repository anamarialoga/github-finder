import {createContext,  useReducer} from 'react';
import React from 'react';
import { GithubReducer } from './githubReducer';


export const GithubContext = createContext();
const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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"

export const GithubProvider = ({children}) => {

    const initState = {
        users:[],
        loading: false
    }
    const [state, dispatch] = useReducer(GithubReducer, initState);

    const searchUsers = async (userToSearch) => {
        dispatch({ 
            type: 'SET_LOADING',
            payload: true
        })
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
    }

    const clearUsers = () => {
        dispatch({
            type: 'SET_USERS',
        })
    }

    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers
    }}>
        {children}
    </GithubContext.Provider>
}

