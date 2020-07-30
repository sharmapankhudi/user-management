import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FormRegistaration from './FormRegistration';
import UserManagement from './UserManagement'
//import Example from './Example'

function App() {
  return (
    <>
   <UserManagement />
    <FormRegistaration />
    </>
  );
}

export default App;
