"use client"

import React from 'react'
import { Provider } from 'react-redux';
import { meraStore } from './store';

const Provide = ({ children }) => {
  return (
    <Provider store={meraStore}>

    
      {children}
    
    </Provider>
  )
}

export default Provide