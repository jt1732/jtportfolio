import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import StackedList from '../components/stackedList';


const Projects = () => {
    return (
      <>
        <header>
          <NavBar></NavBar>
        </header>
        <main>
          <StackedList></StackedList>
        </main>
  
        <footer>
          <Footer />
        </footer>
      </>
    );
  };

export default Projects;
