import React from 'react'
import '../styles/App.css';
import { Wrapper } from '../context/userContext';
import { Settings } from './Settings';
import { Home } from './Home';
const App = () => {

  return (
    <div id="main">
      <Wrapper>
        <Settings />
        <Home />
        <Home />
      </Wrapper>
       {/* <UserContext.Provider value={{ greeting, changeGreeting }}>
          <Settings />
          <Home />
        </UserContext.Provider> */}
    </div>
  )
}


export default App;
