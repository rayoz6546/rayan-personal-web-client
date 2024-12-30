import React from 'react';
import logo from './logo.svg';
import { Provider } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import store from './Rayan/store';
import Rayan from './Rayan';


function App() {
  return (
    <HashRouter>
    <Provider store={store}>
    <div>
        <Routes>
            <Route path="/" element={<Navigate to="Rayan" />} />
            <Route path="/Rayan/*" element={<Rayan />} />
        </Routes>
    </div>
    </Provider>
</HashRouter>
  );
}

export default App;
