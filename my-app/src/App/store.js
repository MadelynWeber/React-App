// the Redux store is created using the configureStore function from Redux Toolkit. 
// configureStore requires that we pass in a reducer argument.

// the store is an immutable object tree -- holds the application's state

import { configureStore } from '@reduxjs/toolkit'
import currentUser from '../context/slice'

export default configureStore({
  reducer: {
    currentUser
  }
});