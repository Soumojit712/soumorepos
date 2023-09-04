const reducer = ( state , action  ) => {
    //if(action.type = )
       
    switch( action.type ){
    //to display Loading... on the screen while loading   
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true,
            };
    //retain the previous data and update them from the values passed from dispatch function
            case "GET_STORIES" :
            return {
                ...state,
                isLoading: false,
                hits:action.payload.hits,
                nbPages:action.payload.nbPages,
            };
    //to remove a post
        case "REMOVE_POST" :
            return {
                ...state,
                hits:state.hits.filter((curElem) => curElem.ObjectID !== action.payload),
            };  
    //to search for a topic 
            case "SEARCH_QUERY":
            return{
                ...state,
                query:action.payload,
            };    
    //pagination next page 
            case "NEXT_PAGE":
                let pnNum = state.page+1;
                if(pnNum>=50){
                    pnNum = 0;
                }
            return{
                ...state,
                page: pnNum,
            };   
    //prev page 
            case "PREV_PAGE":
                let pagNum = state.page-1;
                if(pagNum<=0){
                    pagNum = 0;
                }
            return{
                ...state,
                page: pagNum,
            };                 
            default:
                break;
    }

    return state;
};

export default reducer;