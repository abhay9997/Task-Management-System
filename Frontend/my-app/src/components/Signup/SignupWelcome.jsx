import React from 'react';
import { useState } from 'react';
import InputField from './SignupInputField';
import Button from './SignupButton';
import LoginLink from './SignupLink';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function SignupWelcome() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5500/api/CreateUser', {
        name,
        email,
        password,
      })
      if (response.data.success) {
        alert('Signup successful!');
        navigate('/login');
      }
      else {
        alert('Signup failed. Please check your credentials.');
      }
    } catch (error) {
      alert('Service error. Please try again.');
      console.error('Error during signup:', error);
    }

  }

  return (
    <main className="flex justify-center items-center px-16 py-20 text-xl max-md:px-5">
      <section className="flex flex-col p-16 mt-2.5 max-w-full rounded-2xl border border-solid border-stone-300 w-[648px] max-md:px-5">
        <h1 className="text-5xl font-semibold text-center text-zinc-800 max-md:max-w-full max-md:text-4xl">
          Welcome to <span className="text-indigo-800">Workflo</span>!
        </h1>
        <form onSubmit={handleSubmit}>
          <InputField placeholder="Full name" onChange={handleName} />
          <InputField placeholder="Your email" type="email" onChange={handleEmail} />
          <InputField placeholder="Password" type="password" showIcon={true} onChange={handlePassword} />
          <Button text="Sign up" />
        </form>
        <LoginLink />
      </section>
    </main>
  );
}

export default SignupWelcome;
