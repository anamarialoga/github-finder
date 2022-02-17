import React, { useContext,  useState } from "react"
import { GithubContext } from "../../context/github/githubContext";

export const UserSearch = () => {

    const [text, setText] = useState("");
    const {clearUsers, searchUsers, users} = useContext(GithubContext);

    // console.log(text);
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(text === ""){
           console.log('Enter something');
        }
        else
        {
            searchUsers(text);
            setText(""); //set text back to empty
        }
    }

    return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={(e)=> handleSubmit(e)} >
                <div className="form-control">
                    <div className="relative">
                        <input 
                        type="text" 
                        className="w-full pr-40 bg-gray-200 input input-lg text-black"
                        placeholder="Search in GitHub..." 
                        value={text}
                        onChange={(value)=>handleChange(value)}
                        />
                        <button  type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                            Go
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <br/>
        {users.length > 0 && (
        <div>
            <button className="btn btn-ghost bnt-lg" onClick={()=> clearUsers()}>Clear</button>
        </div>)}
    </div>)
}