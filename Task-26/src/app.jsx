import React from 'react'
import Navbar from './Components/navbar';
import Header from './Components/header';
import PContent from './Components/pcontent';
import Project from './Components/project';
import About from './Components/about';
import Contact from './Components/contact';
import Location from './Components/location';
import Footer from './Components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <PContent/>
      <Project/>
      <About/>
      <Contact/>
      <Location/>
      <Footer/>
    </>
  )
}

export default App
