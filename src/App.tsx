import React from 'react';
import { Header } from './components/Header/Header';
import { LightMode } from './assets';
import { IconButton } from './components/IconButton/IconButton';


const App: React.FC = () => (
    <>
      <Header onLogin={()=> "0"} onLogout={() => "33"} onCreateAccount={()=> "44"}/>
      <h1>I had cleaned default project from the redundant files.</h1>
      <IconButton primary label="Click me!" size="large">
        <LightMode color='#FF5E13' />
      </IconButton>
    </>
  )

export default App;
