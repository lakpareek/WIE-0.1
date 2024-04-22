import React from 'react';
import Header from './components/Header/Header';
import HospitalDetails from './components/HospitalDetails/HospitalDetails';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/';

function App() {
  return (
    <div>
      <Header />
      <HospitalDetails />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;

