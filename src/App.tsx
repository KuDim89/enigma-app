import React from 'react';
import { Header } from './components/Header/Header';


const App: React.FC = () => (
    <>
      <Header onLogin={()=> "0"} onLogout={() => "33"} onCreateAccount={()=> "44"}/>
      <h1>I had cleaned default project from the redundant files.</h1>
    </>
  )

export default App;
