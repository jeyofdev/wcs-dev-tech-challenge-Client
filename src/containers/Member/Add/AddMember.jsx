import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Text/Buttons/Button/Button';
import InputText from '../../../components/Text/Form/Input/InputText/InputText';
import Label from '../../../components/Text/Form/Label/Label';
import H2 from '../../../components/Text/Title/H2/H2';
import './AddMember.css';

const AddMember = ({ addMember }) => {
  const [newMember, setNewMember] = useState('');

  const handleChange = (e) => {
    setNewMember(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMember(newMember);
  };

  return (
    <>
      <H2>Ajouter un(e) Argonaute</H2>
      <form className="new-member-form" onSubmit={handleSubmit}>
        <Label htmlFor="name">Nom de l&apos;Argonaute</Label>
        <InputText
          name="name"
          placeholder="Charalampos"
          handleChange={handleChange}
        />
        <Button submit>Envoyer</Button>
      </form>
    </>
  );
};

AddMember.propTypes = {
  addMember: PropTypes.func.isRequired,
};

export default AddMember;
