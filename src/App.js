import React from 'react';
import Navbar from './components/navbar';
import Videobanner from './components/videobanner';
import Circles from './components/circles';
import Communication from './components/communication';
import Webinar from './components/webinar';
import Map from './components/map';
import Organizations from './components/organizations';
import Newservices from './components/newservices';
import Press from './components/press';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import "components/fontawsomeicon";





function App() {
  return (
    <div className="App">

     <Navbar />
     <Videobanner />
     <Circles />
     <Communication />
     <Webinar />
     <Map />
     <Organizations />
     <Newservices />
     <Press />
     <Footer />

     
     
     
    
    </div>
  )
}

export default App;