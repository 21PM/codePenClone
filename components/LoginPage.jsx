import React from 'react';
import {Link} from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg w-full max-w-4xl flex">
        <div className="w-1/2 flex flex-col justify-center items-center space-y-4 pr-10">
          <img src="https://blog.codepen.io/wp-content/uploads/2022/01/codepen-wordmark-display-inside-white@10x.png" alt="Codepen Logo" className="w-32 mb-6" />
          <h2 className="text-3xl font-bold mb-6">Log In</h2>
          <button className="flex items-center justify-center w-full bg-gray-700 py-2 rounded-lg mb-4 hover:bg-transparent hover:border hover:border-gray-100 transition-all duration-300">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-6 h-6 mr-2" />
            Log In with Google
          </button>
          <button className="flex items-center justify-center w-full bg-gray-700 py-2 rounded-lg mb-4 hover:bg-transparent hover:border hover:border-gray-100 transition-all duration-300">
            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" className="w-6 h-6 mr-2" />
            Log In with GitHub
          </button>
          <button className="flex items-center justify-center w-full bg-gray-700 py-2 rounded-lg hover:bg-transparent hover:border hover:border-gray-100 transition-all duration-300">
            <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" className="w-6 h-6 mr-2" />
            Log In with Facebook
          </button>
          <a href="#" className="text-gray-400 text-sm underline mt-4">How social log in works</a>
        </div>
        <div className="w-1/2 border-l border-gray-600 flex flex-col justify-center items-center pl-10">
          <div className="w-full space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-px bg-gray-600 w-full"></div>
              <span className="text-gray-400">OR</span>
              <div className="h-px bg-gray-600 w-full"></div>
            </div>
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-gray-500 mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-gray-500 mb-4"
            />
            <button className="w-full bg-green-500 py-2 rounded-lg text-white font-bold hover:bg-green-600 transition-all mb-4">
              Log In
            </button>
            <a href="#" className="text-gray-400 text-sm underline block text-center mb-4">Forgot Password?</a>
            <a href="#" className="text-gray-400 text-sm underline block text-center">Need an account? Sign up now!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
