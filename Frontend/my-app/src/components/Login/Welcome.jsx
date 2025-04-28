import React from 'react';

import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

function Welcome() {
  return (

    <main className="flex justify-center items-center px-16 py-20 text-xl max-md:px-5">
      <section className="flex flex-col p-16 mt-10 max-w-full rounded-2xl border border-solid border-stone-300 w-[648px] max-md:px-5">
        <h1 className="text-5xl font-semibold text-center text-zinc-800 max-md:max-w-full max-md:text-4xl">
          Welcome to <span className="text-indigo-800"> Workflo</span>!
        </h1>
        <LoginForm />
        <p className="flex gap-1 justify-center self-center mt-8 text-center max-md:flex-wrap">
          <span className="text-zinc-600">Don't have an account? Create a</span>
          <Link to="/Signup" className="text-sky-700">
            new account<span className="text-black">.</span>
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Welcome;