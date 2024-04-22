import './App.css';
import CurrentLoc from './Components/AddressBar/CurrentLoc'; 
import Searchbox from './Components/AddressBar/Searchbox'; 
import List from './Components/List/List.jsx'; 
import axios from 'axios';
import { useEffect } from 'react';

const apiCall = () => {
  axios.get('http://localhost:8080')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};

export default function App() {
  useEffect(()=>{
    console.log("Useeffect is up");
    apiCall();
  },[])
  return (
    <div className="">
      <CurrentLoc />
      <Searchbox />
      <List heading="Explore"/>
    </div>
  )
}
