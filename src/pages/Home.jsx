import React from 'react';
import { UserResults } from '../components/users/UserResults';

export const Home = () => {
    return (
        <div>
            <h2 className='text-6xl'>Welcome</h2>
            <br/>
            <UserResults />
        </div>
    )
}