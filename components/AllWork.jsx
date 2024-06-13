import React, { useEffect, useState } from 'react'
import PickedPens from '../pages/CodeSnippet'
import { useSelector } from 'react-redux'

function AllWork() {
  
  // console.log(filteredArray);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full h-lvh max-w-full max-h-screen overflow-y-scroll">
        <PickedPens/>
    </div>
  )
}

export default AllWork