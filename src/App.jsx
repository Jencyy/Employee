// src/App.js
import React from 'react';
import Header from './component/Employ/Header/Header';
import EmployeeForm from './component/Employ/EmployeeForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <EmployeeForm />
      </div>
    </div>
  );
};

export default App;
