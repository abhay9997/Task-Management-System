import React from 'react';
import { Link } from 'react-router-dom';

function SignupLink() {
  return (
    <div className="flex gap-1 justify-center self-center mt-8 text-center">
      <p className="text-zinc-600">Already have an account?</p>
      <Link to="/Login" className="text-sky-700">
        Log in
        <span className="text-zinc-600">.</span>
      </Link>
    </div>
  );
}

export default SignupLink;
