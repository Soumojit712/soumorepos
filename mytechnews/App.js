import React from 'react'
import Search from './Search'
import Pagination from './Pagination'
//import { useGlobalContext } from './context'
//import { useContext } from 'react'
//import { AppContext } from './context'
import "./App.css";
import Storied  from './Storied';
const App = () => {
  //const data = useContext(AppContext);

  
  return (
    <>
      <Search/>
      <Pagination/>
      <Storied/>
    </>
  )
}

export default App
