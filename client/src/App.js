import React from 'react';
import Container from 'reactstrap/es/Container';
import AppNavbar from './components/app-navbar/app-navbar.component';
import ShoppingList from './components/shopping-list/shopping-list.component';
import CustomModal from './components/modal/modal.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Container>
        <CustomModal/>
        <ShoppingList/>
      </Container>
    </div>
  );
}

export default App;
