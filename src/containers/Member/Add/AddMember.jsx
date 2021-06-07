import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../../../components/Buttons/Button/Button';
import InputText from '../../../components/Form/Input/InputText/InputText';
import Label from '../../../components/Form/Label/Label';
import H2 from '../../../components/Text/Title/H2/H2';
import './AddMember.css';
import Alert from '../../../components/Alert/Alert';

const AddMember = ({ addMember }) => {
  const [newMember, setNewMember] = useState('');
  const [inputError, setInputError] = useState('');
  const [inputSuccess, setInputSuccess] = useState('');

  const validation = () => {
    setInputError('');
    setInputSuccess('');

    if (newMember.length >= 3) {
      axios
        .get(
          `https://wcs-dev-tech-challenge-api.herokuapp.com/api/members/${newMember}`
        )
        .then((res) => res.data)
        .then((data) => {
          if (!data.length > 0) {
            addMember(newMember);
            setInputSuccess(`Le membre ${newMember} a été ajouté avec succès.`);
          } else {
            setInputError('Ce membre existe déjà.');
          }
        });

      setNewMember('');
    } else if (newMember.length <= 0) {
      setInputError('Le nom du membre doit être renseigné.');
    } else if (newMember.length < 3) {
      setInputError('Le nom du membre doit comporté au moins 3 caractères.');
    }
  };

  const handleChange = (e) => {
    setNewMember(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validation();
  };

  return (
    <>
      <H2 className="new-member-title">Ajouter un(e) Argonaute</H2>

      <form className="new-member-form" onSubmit={handleSubmit}>
        {inputError !== '' && (
          <Alert variant="danger" size=".9em">
            {inputError}
          </Alert>
        )}
        {inputSuccess !== '' && (
          <Alert variant="success" size=".85em">
            {inputSuccess}
          </Alert>
        )}

        <Label htmlFor="name">Nom de l&apos;Argonaute</Label>

        <div className="form-group">
          <InputText
            name="name"
            className="form-control mr-1"
            placeholder="Charalampos"
            value={newMember}
            handleChange={handleChange}
          />
          <Button submit>Envoyer</Button>
        </div>
      </form>
    </>
  );
};

AddMember.propTypes = {
  addMember: PropTypes.func.isRequired,
};

export default AddMember;
