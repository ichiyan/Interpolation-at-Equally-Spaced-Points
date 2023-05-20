import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from "./form/form";
import InputForm2 from "./form/form3";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/*<InputForm></InputForm>*/}
          <InputForm2></InputForm2>
      </header>
    </div>
  );
}

export default App;
