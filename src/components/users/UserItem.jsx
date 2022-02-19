import React from "react";
import { Link } from "react-router-dom";

export const UserItem = ({user}) => {
    return (
    //the card
    <div className="card shadow-md compact side bg-base-100">
        {/* The invisible flexbox which contains the avatar and the login data */}
        <div className="flex-row items-center space-x-4 card-body">
            <div>
                {/* The avatar image */}
                <div className="avatar">
                    {/* Image design */}
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={user.avatar_url} alt="avatar"/>
                    </div>
                </div>
            </div>
            <div >
                <h2 className="card-title">
                {user.login}
                </h2>
                <Link className='text-base-content text-opacity-40' to={`/user/${user.login}`}>Visit profile</Link>
            </div>
        </div>
    </div>
    )
}