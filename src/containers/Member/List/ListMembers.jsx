import React from 'react';
import PropTypes from 'prop-types';
import H2 from '../../../components/Text/Title/H2/H2';
import Member from '../../../components/Member/Member';

const ListMembers = ({ members }) => {
  return (
    <>
      <H2>Membres de l&apos;équipage</H2>
      <section className="member-list">
        {members.map((member) => (
          <Member key={member.id}>{member.name}</Member>
        ))}
      </section>
    </>
  );
};

ListMembers.propTypes = {
  members: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default ListMembers;
