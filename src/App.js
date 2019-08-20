import React from 'react';
import Header from './components/header/header';
import LogForm from './components/log/logForm';
import PresentationText from './components/presentationText/presentationText';
import Oeuf from './components/oeuf/oeuf'
import Meteo from './components/applications/meteo/meteo';

const App = () => {

  return (
    <div className="App">
      <Header />
      <LogForm />
      <PresentationText />
      <Oeuf />
      <Meteo />
    </div>
  );
}

export default App;
