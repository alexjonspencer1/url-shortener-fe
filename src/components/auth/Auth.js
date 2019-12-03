import React from 'react';
import SignupUser from '../../containers/SignupUser';
import LoginUser from '../../containers/LoginUser';

export default function Auth() {
  return (
    <>
      <h1>Sign Up</h1>
      <SignupUser />
      <h1>Login</h1>
      <LoginUser />
    </>
  );
}