
import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = ({ handleLogout }) => {
  handleLogout();
  return <Redirect to="/" />;
};

export default Logout;
