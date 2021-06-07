import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../components/UI/Footer/Footer';
import Header from '../../components/UI/Header/Header';
import AddMember from '../Member/Add/AddMember';
import ListMembers from '../Member/List/ListMembers';
import './App.css';

const App = () => {
  const [list, setList] = useState([]);

  const addNewMember = (memberName) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/members`, {
        name: memberName,
      })
      .then((res) => res.data)
      .then((data) => setList([...list, data[0]]));
  };

  const getAllMembers = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/members`)
      .then((res) => res.data)
      .then((data) => setList(data));
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <AddMember addMember={addNewMember} />
        {list.length > 0 && <ListMembers members={list} />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
