import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import Card from './components/Card/Card';
import Dashboard from './components/Dashboard/Dashboard';
import { useDispatch} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';

const App = () => {
  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return (
    <div style={{paddingTop : "10px"}} >
      <Navbar/>
      <hr style={{marginTop : "10px"}} />
      <Dashboard/>
    </div>
  );
}

export default App