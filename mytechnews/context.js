import React,{ useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

let API="http://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading : true ,
    query : "",
    nbPages : 0 ,
    page : 0 ,
    hits : []
  };

//context creation
const AppContext= React.createContext();
//to create provider function

const AppProvider = ({children})=>{
  const [ state , dispatch ] = useReducer( reducer , initialState );
  
  const fecthApiData = async(url) => {
    dispatch({ type : "SET_LOADING"});
    try {
      const res =  await fetch(url);
      const data = await res.json();
      console.log(data);

        dispatch({
            type : "GET_STORIES",
            payload : {
                hits : data.hits,
                nbPages: data.nbPages,
            },
        });

    } catch (error) {
      console.log(error);
    }
  }
  
  //to remove post
  const removePost=(post_ID)=>{
    dispatch({ type : "REMOVE_POST" , payload : post_ID});
  };

  //search api 
  const searchPost = (searchQuery) =>{
    dispatch({type : "SEARCH_QUERY" , payload:searchQuery});
  };

//pagination
  const getNextPage =()=>{
    dispatch({ type:"NEXT_PAGE" , });
  };
  const getPrevPage =()=>{
    dispatch({ type:"PREV_PAGE" , });
  };

  useEffect(()=>{
    fecthApiData(`${API}query=${state.query}&page=${state.page}`);
  },[state.query,state.page]);


    return(
        <AppContext.Provider value={{...state , removePost , searchPost, getPrevPage , getNextPage}}>
            {children}
        </AppContext.Provider>
    );
};

//custom hook creation
const useGlobalContext = () =>{
    return useContext(AppContext);
};
export {AppContext,AppProvider,useGlobalContext};