import React from 'react'
import { connect } from 'react-redux'
import ContactList from './ContactList'
const App = (contacts) => (
  <div>
    <ContactList />
  </div>
)

export default App
