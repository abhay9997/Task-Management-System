import React from 'react';
import InputField from './InputField';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:5500/api/Login', {
      email: email,
      password: password

    })
      .then(result => {
        const { token, userId } = result.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', userId);
        alert('success')
        navigate('/Userpage')
      })
      .catch(error => {
        alert('Enter Correct User id and Password');

      })

  }



  return (
    <form onSubmit={handleSubmit}>
      <InputField type="email" placeholder="Your  email" onChange={handleEmail} />
      <InputField
        type="password"
        onChange={handlePassword}
        placeholder="Password"
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9dfcd153cf2e7e4871cee459d40fb3e24f2ac144ebe9bf7c898aea9e30458133?apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833&&apiKey=ae0b0ec3fbc34adfa8c2dc7b79860833"
      />
      <Button>Login</Button>
    </form>
  );
}

export default LoginForm;
