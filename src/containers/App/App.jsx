import React from 'react';
import Footer from '../../components/UI/Footer/Footer';
import Header from '../../components/UI/Header/Header';
import AddMember from '../Member/Add/AddMember';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <AddMember />
      </main>

      <Footer />
    </div>
  );
};

export default App;
