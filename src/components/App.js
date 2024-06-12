import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

const App = () => {
  const navbarComponent = <Navbar />;
  const homeComponent = <Home />;
  const aboutComponent = <About />;

  return (
    <div>
      {navbarComponent}
      {homeComponent}
      {aboutComponent}
    </div>
  );
};

export default App;
