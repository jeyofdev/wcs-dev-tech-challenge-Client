import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../components/UI/Footer/Footer';
import Header from '../../components/UI/Header/Header';
import AddMember from '../Member/Add/AddMember';
import ListMembers from '../Member/List/ListMembers';
import './App.css';

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get('https://wcs-dev-tech-challenge-api.herokuapp.com/api/members')
      .then((res) => res.data)
      .then((data) => setList(data));
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <AddMember />
        {list.length > 0 && <ListMembers members={list} />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
