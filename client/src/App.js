import React from 'react';
import AppNavbar from './components/app-navbar/app-navbar.component';
import ShoppingList from './components/shopping-list/shopping-list.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <ShoppingList/>
    </div>
  );
}

export default App;
