export const GithubReducer = (state, action) => {
    //actions defined here and used within the dispatch function
    switch(action.type){
        case 'GET_USERS':
            return {
            ...state, 
            users: action.payload,
            };
        case 'SET_USERS':
            return {
                ...state,
                users: [],
            }
        default: return state; //no action -> current state
    }
}