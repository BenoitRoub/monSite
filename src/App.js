import React from 'react';
import Header from './components/header/header';
import LogForm from './components/log/logForm';
import PresentationText from './components/presentationText/presentationText';
import Oeuf from './components/oeuf/oeuf'
import Meteo from './components/applications/meteo/meteo';
import ToDoList from './components/applications/toDoList/toDoList';
import Calendar from './components/applications/calendar/calendar';

const App = () => {

  return (
    <div className="App">
      <Header />
      <LogForm />
      <PresentationText />
      <Oeuf />
      <Meteo />
      <ToDoList />
      <Calendar />
    </div>
  );
}

export default App;
