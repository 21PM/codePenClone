// src/ProfileComponent.js
import React from 'react';
import PickedPens from './CodeSnippet';

const Profile = () => {
  return (
    <div className="w-full h-full  bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full h-lvh max-w-6xl max-h-screen overflow-y-scroll">
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-between p-10 xs:gap-5">
          <section className='lg:flex lg:flex-row xs:flex xs:flex-col items-center justify-center'>
          <div className="relative">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/035/624/082/non_2x/user-profile-person-icon-in-flat-isolated-in-suitable-for-social-media-man-profiles-screensavers-depicting-male-face-silhouettes-for-apps-website-vector.jpg" 
              alt="Profile" 
              className="rounded-full w-32 h-32 md:w-48 md:h-48"
            />
          </div>
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
           
            <div className="mt-2 flex gap-3 items-center">
            <p>Name</p>
            <h2 className="text-2xl font-semibold">Adrian Doe</h2>
             
            </div>
            <div className="mt-2 flex gap-3">
            <p>Email   </p>
             
              <p className="font-light text-orange-400"> adrian@yourwebsite.com</p>
            </div>
          </div>
          </section>
          <section>
            <button className="px-9 py-2 bg-slate-600 rounded hover:bg-transparent hover:border hover:border-gray-500 transition-all duration-300 hover:decoration-4">LOGOUT</button>
          </section>
          
      
        </div>
      
        


        <PickedPens/>

        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Div 1</h3>
            <p className="mt-2">Content for the first div goes here.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Div 2</h3>
            <p className="mt-2">Content for the second div goes here.</p>
          </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Div 3</h3>
              <p className="mt-2">Content for the third divsda goes here.</p>
            </div>
          
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
