import React from 'react';
import Button from '../../../components/Text/Buttons/Button/Button';
import InputText from '../../../components/Text/Form/Input/InputText/InputText';
import Label from '../../../components/Text/Form/Label/Label';
import H2 from '../../../components/Text/Title/H2/H2';
import './AddMember.css';

const AddMember = () => {
  return (
    <>
      <H2>Ajouter un(e) Argonaute</H2>
      <form className="new-member-form">
        <Label htmlFor="name">Nom de l&apos;Argonaute</Label>
        <InputText name="name" placeholder="Charalampos" />
        <Button submit>Envoyer</Button>
      </form>
    </>
  );
};

export default AddMember;
